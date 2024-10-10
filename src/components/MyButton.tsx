import { Button } from "@/components/shadcn/button"

type myButtonProps = {
	label: string
}

export const MyButton: React.FC<myButtonProps> = ({ label }) => (
	<Button onClick={() => alert("Hi")}>{label}</Button>
)
