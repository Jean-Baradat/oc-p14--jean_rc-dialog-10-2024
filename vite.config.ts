import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
	],
	resolve: {
		// If you add an alias, also add it to tsconfig.app.json
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		lib: {
			entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			name: "@jean/rc-dialog",
			formats: ["es", "umd"],
			fileName: "rc-dialog",
		},
		rollupOptions: {
			external: [
				"react",
				"clsx",
				"lucide-react",
				"tailwind-merge",
				"tailwindcss-animate",
			],
			output: {
				globals: {
					react: "React",
					clsx: "clsx",
					"lucide-react": "lucideReact",
					"tailwind-merge": "tailwindMerge",
				},
			},
		},
	},
})
