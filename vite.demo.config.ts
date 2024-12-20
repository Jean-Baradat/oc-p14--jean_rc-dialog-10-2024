import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// If you add an alias, also add it to tsconfig.app.json
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	base: "/oc-p14--jean_rc-dialog-10-2024/",
	build: {
		outDir: "demo",
	},
})
