/**
 *
 * @param isOpen
 * @param setIsOpen
 */
const handleDialog = (
	isOpen: boolean,
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
	setIsOpen(!isOpen)
}

export default handleDialog
