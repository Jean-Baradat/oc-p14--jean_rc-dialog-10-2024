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
import { Package, Github } from "lucide-react"

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const displayDialog = () => {
		handleDialog(isOpen, setIsOpen)
	}

	return (
		<div className="min-h-screen bg-background">
			<section className="px-4 py-20 text-center">
				<div className="container mx-auto max-w-3xl">
					<Package className="mx-auto mb-6 size-16" />
					<h1 className="mb-4 scroll-m-20 text-5xl font-extrabold tracking-tight">
						Dialog
					</h1>
					<p className="mb-8 text-xl text-muted-foreground">
						Un composant de dialogue React moderne, accessible et
						personnalisable
					</p>
					<div className="flex justify-center gap-4">
						<Button
							asChild
							size="lg"
						>
							<a href="#main">Commencer</a>
						</Button>
						<Button
							variant="outline"
							size="lg"
							asChild
						>
							<a href="#">
								<Github className="mr-2 size-4" />
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
							<CardDescription>Installez le package via npm</CardDescription>
						</CardHeader>
						<CardContent>
							<pre className="overflow-x-auto rounded-lg bg-muted p-4">
								<code>{`commandes d'installation`}</code>
							</pre>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader>
							<CardTitle>Utilisation basique</CardTitle>
							<CardDescription>Exemple simple d'implémentation</CardDescription>
						</CardHeader>
						<CardContent>
							<pre className="overflow-x-auto rounded-lg bg-muted p-4">
								<code>{`code d'exemple de la dialog`}</code>
							</pre>
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
										</Dialog>{" "}
									</AlertDescription>
								</Alert>
							</div>
						</CardContent>
					</Card>

					{/* <Card className="mt-6">
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
					</Card> */}
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t px-4 py-8">
				<div className="container mx-auto text-center text-muted-foreground">
					<p>Made with ❤️ by Jean Baradat</p>
				</div>
			</footer>
		</div>
	)
}

export default App
