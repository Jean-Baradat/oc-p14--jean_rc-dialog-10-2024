import { Dialog, DialogTrigger, DialogContent } from "@/components/Dialog"
import { Button } from "@/components/shadcn/button"
import { useState } from "react"
import handleDialog from "@/components/DialogUtils"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/card"
import { Alert, AlertDescription } from "@/components/shadcn/alert"
import { siGithub, siLinkedin } from "simple-icons"
import { Check, Copy } from "lucide-react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

SyntaxHighlighter.registerLanguage("jsx", jsx)

const simpleExample1 = `import { Dialog, DialogTrigger, DialogContent } from "@jean/rc-dialog"
import "@jean/rc-dialog/dist/style.css"`

const simpleExample2 = "const [isOpen, setIsOpen] = useState(false)"

const simpleExample3 = `<Dialog
	isOpen={isOpen}
	setIsOpen={setIsOpen}
>
	<DialogTrigger onClick>
		<button>Simple button</button>
	</DialogTrigger>
	<DialogContent>
		Dialog content...
	</DialogContent>
</Dialog>`

const installation = "npm i @jean/rc-dialog"

const App = () => {
	const [copied, setCopied] = useState("")
	const [isOpen, setIsOpen] = useState(false)

	const copyToClipboard = (text, id) => {
		navigator.clipboard.writeText(text)
		setCopied(id)
		setTimeout(() => setCopied(""), 3000)
	}

	const displayDialog = () => {
		handleDialog(isOpen, setIsOpen)
	}

	return (
		<div className="min-h-screen bg-background">
			<section className="bg-muted/50 px-6 py-20 text-center">
				<div className="container mx-auto flex max-w-3xl flex-col justify-between gap-4 sm:flex-row">
					<div>
						<h1 className="mb-6 scroll-m-20 text-4xl font-extrabold sm:text-6xl">
							Dialog React
						</h1>
						<p className="text-lg text-muted-foreground">
							Dialog React JS created for the OpenClassrooms P14 project
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							variant="secondary"
							size="lg"
							asChild
							className="w-full sm:h-full"
						>
							<a
								href="https://github.com/Jean-Baradat/oc-p14--jean_rc-dialog-10-2024"
								target="_blank"
							>
								<svg
									viewBox="0 0 25 25"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									width="16"
									height="16"
									className="mr-2"
								>
									<path d={siGithub.path} />
								</svg>
								GitHub
							</a>
						</Button>
					</div>
				</div>
			</section>

			<section
				className="px-4 py-16"
				id="main"
			>
				<div className="container mx-auto max-w-4xl">
					<Card>
						<CardHeader>
							<CardTitle>Installation</CardTitle>
							<CardDescription>Install the package with npm</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-row items-stretch gap-3 overflow-x-auto">
							<div className="w-full min-w-min rounded bg-muted px-5 py-3">
								<pre className="text-nowrap">
									<code className="text-sm">{installation}</code>
								</pre>
							</div>
							<div>
								<Button
									variant="default"
									size="icon"
									className="size-12 h-full min-w-12"
									onClick={() => copyToClipboard(installation, "installation")}
								>
									{copied === "installation" ? (
										<Check className="size-4" />
									) : (
										<Copy className="size-4" />
									)}
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>A simple example</CardTitle>
							<CardDescription>
								Display a dialog when a button is clicked
							</CardDescription>
						</CardHeader>
						<CardContent>
							<h3 className="mb-1 text-sm font-medium text-muted-foreground">
								Importing dependencies
							</h3>
							<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto">
								<div className="w-full min-w-min rounded bg-muted px-5 py-3">
									<SyntaxHighlighter
										language="jsx"
										style={prism}
										customStyle={{
											background: "transparent",
											padding: 0,
											margin: 0,
										}}
									>
										{simpleExample1}
									</SyntaxHighlighter>
								</div>
								<div>
									<Button
										variant="default"
										size="icon"
										className="size-12 h-full min-w-12"
										onClick={() => copyToClipboard(simpleExample1, "example1")}
									>
										{copied === "example1" ? (
											<Check className="size-4" />
										) : (
											<Copy className="size-4" />
										)}
									</Button>
								</div>
							</div>
							<h3 className="mb-1 text-sm font-medium text-muted-foreground">
								State management
							</h3>
							<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto">
								<div className="w-full min-w-min rounded bg-muted px-5 py-3">
									<SyntaxHighlighter
										language="jsx"
										style={prism}
										customStyle={{
											background: "transparent",
											padding: 0,
											margin: 0,
										}}
									>
										{simpleExample2}
									</SyntaxHighlighter>
								</div>
								<div>
									<Button
										variant="default"
										size="icon"
										className="size-12 h-full min-w-12"
										onClick={() => copyToClipboard(simpleExample2, "example2")}
									>
										{copied === "example2" ? (
											<Check className="size-4" />
										) : (
											<Copy className="size-4" />
										)}
									</Button>
								</div>
							</div>
							<h3 className="mb-1 text-sm font-medium text-muted-foreground">
								Dialog structure
							</h3>
							<div className="flex flex-row items-stretch gap-3 overflow-x-auto">
								<div className="w-full min-w-min rounded bg-muted px-5 py-3">
									<SyntaxHighlighter
										language="jsx"
										style={prism}
										customStyle={{
											background: "transparent",
											padding: 0,
											margin: 0,
										}}
									>
										{simpleExample3}
									</SyntaxHighlighter>
								</div>
								<div>
									<Button
										variant="default"
										size="icon"
										className="size-12 h-full min-w-12"
										onClick={() => copyToClipboard(simpleExample3, "example3")}
									>
										{copied === "example3" ? (
											<Check className="size-4" />
										) : (
											<Copy className="size-4" />
										)}
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="bg-muted/50 px-4 py-16">
				<div className="container mx-auto max-w-4xl">
					<Card>
						<CardHeader>
							<CardTitle>Démonstration interactive</CardTitle>
							<CardDescription>
								Testez les différentes variantes du composant Dialog
							</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4 md:grid-cols-2">
							<div className="space-y-4">
								<h4 className="font-medium">Dialog simple</h4>
								<Alert>
									<AlertDescription>
										<Dialog
											isOpen={isOpen}
											setIsOpen={setIsOpen}
										>
											<DialogTrigger onClick>
												<Button className="w-full">test</Button>
											</DialogTrigger>
											<DialogContent
												titleId="dialogTitle"
												descriptionId="dialogDescription"
											>
												<h1
													id="dialogTitle"
													className="pb-3 text-2xl font-semibold"
												>
													Lorem, ipsum dolor.
												</h1>
												<p
													id="dialogDescription"
													className="pb-3"
												>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit. Accusamus error voluptatibus eligendi expedita
													cum dignissimos repellat dolorum pariatur laboriosam,
													quos doloribus, ab est placeat nobis ex incidunt
													adipisci dolore doloremque.
												</p>
												<div className="flex gap-4">
													<Button className="flex-1">Lorem, ipsum.</Button>
													<Button className="flex-1">
														Lorem, ipsum dolor.
													</Button>
												</div>
											</DialogContent>
										</Dialog>
									</AlertDescription>
								</Alert>
							</div>
							<div className="space-y-4">
								<h4 className="font-medium">Dialog avec formulaire</h4>
								<Alert>
									<AlertDescription>
										<Dialog
											isOpen={isOpen}
											setIsOpen={setIsOpen}
										>
											<DialogTrigger onClick>
												<Button className="w-full">test</Button>
											</DialogTrigger>
											<DialogContent
												titleId="dialogTitle"
												descriptionId="dialogDescription"
											>
												<h1
													id="dialogTitle"
													className="pb-3 text-2xl font-semibold"
												>
													Lorem, ipsum dolor.
												</h1>
												<p
													id="dialogDescription"
													className="pb-3"
												>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit. Accusamus error voluptatibus eligendi expedita
													cum dignissimos repellat dolorum pariatur laboriosam,
													quos doloribus, ab est placeat nobis ex incidunt
													adipisci dolore doloremque.
												</p>
												<div className="flex gap-4">
													<Button className="flex-1">Lorem, ipsum.</Button>
													<Button className="flex-1">
														Lorem, ipsum dolor.
													</Button>
												</div>
											</DialogContent>
										</Dialog>
									</AlertDescription>
								</Alert>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>Props API</CardTitle>
							<CardDescription>Liste des props disponibles</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="rounded-lg border">
								<div className="grid grid-cols-4 border-b bg-muted p-4">
									<div>Prop</div>
									<div>Type</div>
									<div>Default</div>
									<div>Description</div>
								</div>
								<div className="grid grid-cols-4 p-4">
									<div className="font-medium">...</div>
									<div>...</div>
									<div>...</div>
									<div>Ajoutez vos props ici</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<footer className="border-t px-4 py-28 text-center">
				<div className="container mx-auto text-center text-muted-foreground">
					<p>
						Made with ❤️ by{" "}
						<Button
							variant="link"
							asChild
							className="inline-flex h-auto items-center gap-1 p-0"
						>
							<a
								href="https://www.linkedin.com/in/jean-baradat/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jean Baradat
								<svg
									viewBox="0 0 26 26"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									width="16"
									height="16"
								>
									<path d={siLinkedin.path} />
								</svg>
							</a>
						</Button>
					</p>
				</div>
			</footer>
		</div>
	)
}

export default App
