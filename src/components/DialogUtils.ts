/**
 * Handles the opening and closing of a dialog
 *
 * @param isOpen - Current state of the dialog (true for open, false for closed)
 * @param setIsOpen - State setter function to update the dialog's open/closed state
 * @returns void
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * handleDialog(isOpen, setIsOpen); // Toggles dialog state
 */
const handleDialog = (
	isOpen: boolean,
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
	setIsOpen(!isOpen)
}

export default handleDialog
