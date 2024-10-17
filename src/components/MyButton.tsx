import { Button } from "@/components/shadcn/button"

type myButtonProps = {
	label: string
}

const MyButton: React.FC<myButtonProps> = ({ label }) => (
	<Button onClick={() => alert("Hi")}>{label}</Button>
)

export default MyButton
