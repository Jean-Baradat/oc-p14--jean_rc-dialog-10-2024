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
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/shadcn/tabs"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/shadcn/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert"
import { siGithub, siLinkedin } from "simple-icons"
import { AlertCircle, Check, Copy } from "lucide-react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"

SyntaxHighlighter.registerLanguage("jsx", jsx)

const simpleExample1 = `
import { Dialog, DialogTrigger, DialogContent } from "@jean/rc-dialog"
import "@jean/rc-dialog/dist/style.css"
`.trim()
const simpleExample7 = `
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	handleDialog,
} from "@/components/Dialog"
import "@jean/rc-dialog/dist/style.css"
`.trim()
const simpleExample2 = "const [isOpen, setIsOpen] = useState(false)"
const simpleExample3 = `
<Dialog
	isOpen={isOpen}
	setIsOpen={setIsOpen}
>
	<DialogTrigger onClick>
		<button>
			Simple button
		</button>
	</DialogTrigger>
	<DialogContent>
		Dialog content...
	</DialogContent>
</Dialog>
`.trim()
const installation = "npm i @jean/rc-dialog"
const simpleExample4 = `
<Dialog
	isOpen={isOpen}
	setIsOpen={setIsOpen}
>
	<DialogTrigger onClick>
		<button>
			Open simple dialog
		</button>
	</DialogTrigger>
	<DialogContent
		titleId="dialogTitle"
		descriptionId="dialogDescription"
	>
		<h1 id="dialogTitle">
			Dialog title...
		</h1>
		<p id="dialogDescription">
			Dialog description...
		</p>
	</DialogContent>
</Dialog>
`.trim()
const simpleExample5 = `
const displayDialog = () => {
	handleDialog(isOpen, setIsOpen)
}
`.trim()
const simpleExample6 = `
<Dialog
	isOpen={isOpen}
	setIsOpen={setIsOpen}
>
	<DialogTrigger customEvent>
		<button onClick={displayDialog}>
			Open custom event dialog
		</button>
	</DialogTrigger>
	<DialogContent
		titleId="dialogTitle"
		descriptionId="dialogDescription"
	>
		<h1 id="dialogTitle">
			Dialog title...
		</h1>
		<p id="dialogDescription">
			Dialog description...
		</p>
		<button onClick={displayDialog}>
			Close
		</button>
	</DialogContent>
</Dialog>
`.trim()

const App = () => {
	const [copied, setCopied] = useState("")
	const [isOpenCustomDialog, setIsOpenCustomDialog] = useState(false)
	const [isOpenSimpleDialog, setIsOpenSimpleDialog] = useState(false)

	const copyToClipboard = (text: string, id: string): void => {
		navigator.clipboard.writeText(text)
		setCopied(id)
		setTimeout(() => setCopied(""), 3000)
	}

	const displayDialog = () => {
		handleDialog(isOpenCustomDialog, setIsOpenCustomDialog)
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
							variant="gooeyRight"
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
						<CardContent className="flex flex-row items-stretch gap-3 overflow-x-auto pt-1">
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
							<CardTitle>Simple Example</CardTitle>
							<CardDescription>
								Display a dialog when a button is clicked
							</CardDescription>
						</CardHeader>
						<CardContent>
							<h3 className="mb-1 text-sm font-medium text-muted-foreground">
								1. Dependencies and style
							</h3>
							<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
								2. State management
							</h3>
							<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
								3. Dialog structure
							</h3>
							<div className="flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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

			<section className="bg-muted/30 px-4 py-16">
				<div className="container mx-auto max-w-4xl">
					<Card>
						<CardHeader>
							<CardTitle>Interactive Demo</CardTitle>
							<CardDescription>
								Test the different Dialog component variants
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-9">
							<div className="space-y-4">
								<Tabs defaultValue="preview">
									<div className="flex items-center justify-between rounded p-1">
										<h4 className="font-medium">Simple dialog</h4>
										<TabsList className="h-9 gap-1 bg-transparent">
											<TabsTrigger
												className="rounded data-[state=active]:shadow"
												value="preview"
											>
												Preview
											</TabsTrigger>
											<TabsTrigger
												className="rounded data-[state=active]:shadow"
												value="code"
											>
												Code
											</TabsTrigger>
										</TabsList>
									</div>
									<TabsContent value="preview">
										<Alert>
											<AlertDescription className="flex justify-center">
												<Dialog
													isOpen={isOpenSimpleDialog}
													setIsOpen={setIsOpenSimpleDialog}
												>
													<DialogTrigger onClick>
														<Button>Open simple dialog</Button>
													</DialogTrigger>
													<DialogContent
														titleId="dialogTitle"
														descriptionId="dialogDescription"
													>
														<h1
															id="dialogTitle"
															className="pb-3 text-2xl font-semibold"
														>
															Simple dialog
														</h1>
														<p id="dialogDescription">
															This dialog opens directly when the button is
															clicked, without any additional logic. This is the
															default behavior when you use the <b>onClick</b>{" "}
															attribute on DialogTrigger. Ideal for simple use
															cases where you just want to show/hide the dialog.
														</p>
													</DialogContent>
												</Dialog>
											</AlertDescription>
										</Alert>
									</TabsContent>
									<TabsContent value="code">
										<Card>
											<CardContent className="pt-6">
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													1. Dependencies and style
												</h3>
												<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															onClick={() =>
																copyToClipboard(simpleExample1, "example9")
															}
														>
															{copied === "example9" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													2. State management
												</h3>
												<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															onClick={() =>
																copyToClipboard(simpleExample2, "example4")
															}
														>
															{copied === "example4" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													3. Dialog structure
												</h3>
												<Alert className="my-3 bg-blue-100">
													<AlertCircle className="size-4" />
													<AlertTitle>Info</AlertTitle>
													<AlertDescription>
														Use <code className="font-bold">titleId</code> and{" "}
														<code className="font-bold">descriptionId</code> to
														improve dialog accessibility.
													</AlertDescription>
												</Alert>
												<div className="flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															{simpleExample4}
														</SyntaxHighlighter>
													</div>
													<div>
														<Button
															variant="default"
															size="icon"
															className="size-12 h-full min-w-12"
															onClick={() =>
																copyToClipboard(simpleExample4, "example5")
															}
														>
															{copied === "example5" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
											</CardContent>
										</Card>
									</TabsContent>
								</Tabs>
							</div>

							<div className="space-y-4">
								<Tabs defaultValue="preview">
									<div className="flex items-center justify-between rounded p-1">
										<h4 className="font-medium">
											Dialog with customized event
										</h4>
										<TabsList className="h-9 gap-1 bg-transparent">
											<TabsTrigger
												className="rounded data-[state=active]:shadow"
												value="preview"
											>
												Preview
											</TabsTrigger>
											<TabsTrigger
												className="rounded data-[state=active]:shadow"
												value="code"
											>
												Code
											</TabsTrigger>
										</TabsList>
									</div>
									<TabsContent value="preview">
										<Alert>
											<AlertDescription className="flex justify-center">
												<Dialog
													isOpen={isOpenCustomDialog}
													setIsOpen={setIsOpenCustomDialog}
												>
													<DialogTrigger customEvent>
														<Button onClick={displayDialog}>
															Open custom event dialog
														</Button>
													</DialogTrigger>
													<DialogContent
														titleId="dialogTitle"
														descriptionId="dialogDescription"
													>
														<h1
															id="dialogTitle"
															className="pb-3 text-2xl font-semibold"
														>
															Custom event dialog
														</h1>
														<p
															id="dialogDescription"
															className="pb-3"
														>
															This dialog uses a custom function (displayDialog)
															to manage its opening. Use this approach when you
															need to add additional logic before or after
															opening the dialog, such as form validation or
															data loading.
														</p>
														<Button
															className="w-full"
															onClick={displayDialog}
														>
															Close
														</Button>
													</DialogContent>
												</Dialog>
											</AlertDescription>
										</Alert>
									</TabsContent>
									<TabsContent value="code">
										<Card>
											<CardContent className="pt-6">
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													1. Dependencies and style
												</h3>
												<Alert className="my-3 bg-blue-100">
													<AlertCircle className="size-4" />
													<AlertTitle>Info</AlertTitle>
													<AlertDescription>
														Import{" "}
														<code className="font-bold">handleDialog</code>, the
														utility function and use it by passing the state.
													</AlertDescription>
												</Alert>
												<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															{simpleExample7}
														</SyntaxHighlighter>
													</div>
													<div>
														<Button
															variant="default"
															size="icon"
															className="size-12 h-full min-w-12"
															onClick={() =>
																copyToClipboard(simpleExample7, "example10")
															}
														>
															{copied === "example10" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													2. State management
												</h3>
												<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															onClick={() =>
																copyToClipboard(simpleExample2, "example6")
															}
														>
															{copied === "example6" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													3. Custom event
												</h3>
												<div className="mb-5 flex flex-row items-stretch gap-3 overflow-x-auto p-1">
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
															{simpleExample5}
														</SyntaxHighlighter>
													</div>
													<div>
														<Button
															variant="default"
															size="icon"
															className="size-12 h-full min-w-12"
															onClick={() =>
																copyToClipboard(simpleExample5, "example7")
															}
														>
															{copied === "example7" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
												<h3 className="mb-1 text-sm font-medium text-muted-foreground">
													4. Dialog structure
												</h3>
												<Alert className="my-3 bg-blue-100">
													<AlertCircle className="size-4" />
													<AlertTitle>Important!</AlertTitle>
													<AlertDescription>
														To use a custom event handler, you must pass the{" "}
														<code className="font-bold">customEvent</code> prop
														to the DialogTrigger component.
													</AlertDescription>
												</Alert>
												<div className="flex flex-row items-stretch gap-3 overflow-x-auto p-1">
													<div className="w-full min-w-min rounded bg-muted px-5 py-3">
														<SyntaxHighlighter
															language="jsx"
															style={prism}
															useInlineStyles={true}
															customStyle={{
																background: "transparent",
																padding: 0,
																margin: 0,
															}}
														>
															{simpleExample6}
														</SyntaxHighlighter>
													</div>
													<div>
														<Button
															variant="default"
															size="icon"
															className="size-12 h-full min-w-12"
															onClick={() =>
																copyToClipboard(simpleExample6, "example8")
															}
														>
															{copied === "example8" ? (
																<Check className="size-4" />
															) : (
																<Copy className="size-4" />
															)}
														</Button>
													</div>
												</div>
											</CardContent>
										</Card>
									</TabsContent>
								</Tabs>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="px-4 py-16">
				<div className="container mx-auto max-w-4xl">
					<Card>
						<CardHeader>
							<CardTitle>Props</CardTitle>
							<CardDescription>Available props</CardDescription>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="dialog">
								<TabsList className="size-full flex-col gap-1 bg-muted/50 sm:flex-row">
									<TabsTrigger
										value="dialog"
										className="w-full flex-1 font-bold hover:bg-background/70"
									>
										Dialog
									</TabsTrigger>
									<TabsTrigger
										value="dialog-trigger"
										className="w-full flex-1 font-bold hover:bg-background/70"
									>
										DialogTrigger
									</TabsTrigger>
									<TabsTrigger
										value="dialog-content"
										className="w-full flex-1 font-bold hover:bg-background/70"
									>
										DialogContent
									</TabsTrigger>
								</TabsList>
								<TabsContent value="dialog">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Prop</TableHead>
												<TableHead>Type</TableHead>
												<TableHead>Default</TableHead>
												<TableHead>Description</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell className="font-medium">isOpen</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Controls the open/closed state of the dialog
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">setIsOpen</TableCell>
												<TableCell>function</TableCell>
												<TableCell>-</TableCell>
												<TableCell>
													Function to update the dialog state
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TabsContent>
								<TabsContent value="dialog-trigger">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Prop</TableHead>
												<TableHead>Type</TableHead>
												<TableHead>Default</TableHead>
												<TableHead>Description</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell className="font-medium">
													customEvent
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable custom event handling on trigger element
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">onClick</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable click event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onMouseDown
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable mousedown event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">onMouseUp</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable mouseup event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onMouseEnter
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable mouseenter event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onMouseLeave
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable mouseleave event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onTouchStart
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable touchstart event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onTouchEnd
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable touchend event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													onTouchMove
												</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable touchmove event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">onFocus</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable focus event handler on trigger
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">onBlur</TableCell>
												<TableCell>boolean</TableCell>
												<TableCell>false</TableCell>
												<TableCell>
													Enable blur event handler on trigger
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TabsContent>
								<TabsContent value="dialog-content">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Prop</TableHead>
												<TableHead>Type</TableHead>
												<TableHead>Default</TableHead>
												<TableHead>Description</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell className="font-medium">titleId</TableCell>
												<TableCell>string</TableCell>
												<TableCell>undefined</TableCell>
												<TableCell>
													ID for accessibility labelling the dialog
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">
													descriptionId
												</TableCell>
												<TableCell>string</TableCell>
												<TableCell>undefined</TableCell>
												<TableCell>
													ID for accessibility describing the dialog
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>Event</CardTitle>
							<CardDescription>Available event</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Function</TableHead>
										<TableHead>Parameters</TableHead>
										<TableHead>Description</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="font-medium">handleDialog</TableCell>
										<TableCell>isOpen / setIsOpen</TableCell>
										<TableCell>
											The utility function used to toggle the open/close state
											of the dialog
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</section>

			<footer className="bg-muted/50 px-4 py-28 text-center">
				<div className="container mx-auto text-center text-muted-foreground">
					<p>
						Made with ❤️ by{" "}
						<Button
							variant="linkHover"
							asChild
							className="inline-flex items-center gap-1 px-0"
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
