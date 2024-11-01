import {
	cloneElement,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react"
import { X } from "lucide-react"
import handleDialog from "@/components/DialogUtils"
import "@/components/Dialog.css"

// --------- Dialog Type ---------
type DialogContextType = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	hasBeenOpened: boolean
}

interface DialogTriggerProps {
	/**
	 * The trigger element that will open the dialog
	 */
	children: React.ReactElement
	/**
	 * Whether to use a custom event handler instead of the default ones
	 */
	customEvent?: boolean
	/**
	 * Whether to trigger on click event
	 */
	onClick?: boolean
	/**
	 * Whether to trigger on mousedown event
	 */
	onMouseDown?: boolean
	/**
	 * Whether to trigger on mouseup event
	 */
	onMouseUp?: boolean
	/**
	 * Whether to trigger on mouseenter event
	 */
	onMouseEnter?: boolean
	/**
	 * Whether to trigger on mouseleave event
	 */
	onMouseLeave?: boolean
	/**
	 * Whether to trigger on touchstart event
	 */
	onTouchStart?: boolean
	/**
	 * Whether to trigger on touchend event
	 */
	onTouchEnd?: boolean
	/**
	 * Whether to trigger on touchmove event
	 */
	onTouchMove?: boolean
	/**
	 * Whether to trigger on focus event
	 */
	onFocus?: boolean
	/**
	 * Whether to trigger on blur event
	 */
	onBlur?: boolean
}

interface DialogProps {
	/**
	 * The dialog content components
	 */
	children: React.ReactElement | React.ReactElement[]
	/**
	 * Whether the dialog is currently open
	 */
	isOpen: boolean
	/**
	 * Function to update the open state
	 */
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface DialogContentProps {
	/**
	 * The content elements to be displayed in the dialog
	 */
	children: React.ReactElement | React.ReactElement[]
	/**
	 * Optional ID for the dialog title element
	 */
	titleId?: string
	/**
	 * Optional ID for the dialog description element
	 */
	descriptionId?: string
}

// --------- Dialog Context ---------
const DialogContext = createContext<DialogContextType>({
	isOpen: false,
	setIsOpen: () => {},
	hasBeenOpened: false,
})

// --------- Dialog Core ---------
/**
 * A dialog component that manages its open/closed state and provides context to its children
 *
 * @example
 * <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
 *   <DialogTrigger onClick>
 *     <button>Open Dialog</button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     Dialog content...
 *   </DialogContent>
 * </Dialog>
 */
const Dialog = ({ children, isOpen, setIsOpen }: DialogProps): JSX.Element => {
	const [hasBeenOpened, setHasBeenOpened] = useState(false)

	const context = useMemo(() => {
		if (isOpen && !hasBeenOpened) {
			setHasBeenOpened(true)
		}
		return { isOpen, setIsOpen, hasBeenOpened }
	}, [isOpen, setIsOpen, hasBeenOpened])

	return (
		<DialogContext.Provider value={context}>{children}</DialogContext.Provider>
	)
}
/**
 * A trigger component that controls the opening/closing of the dialog
 *
 * @example
 * <DialogTrigger onClick>
 *   <button>Open Dialog</button>
 * </DialogTrigger>
 */
const DialogTrigger = ({
	children,
	customEvent,
	onClick,
	onMouseDown,
	onMouseUp,
	onMouseEnter,
	onMouseLeave,
	onTouchStart,
	onTouchEnd,
	onTouchMove,
	onFocus,
	onBlur,
}: DialogTriggerProps) => {
	const context = useContext(DialogContext)

	if (customEvent) {
		return children
	} else {
		const defaultFn = () => handleDialog(context.isOpen, context.setIsOpen)

		const clonedElement = cloneElement(children, {
			onClick: shouldAddEventHandler(onClick, defaultFn),
			onMouseDown: shouldAddEventHandler(onMouseDown, defaultFn),
			onMouseUp: shouldAddEventHandler(onMouseUp, defaultFn),
			onMouseEnter: shouldAddEventHandler(onMouseEnter, defaultFn),
			onMouseLeave: shouldAddEventHandler(onMouseLeave, defaultFn),
			onTouchStart: shouldAddEventHandler(onTouchStart, defaultFn),
			onTouchEnd: shouldAddEventHandler(onTouchEnd, defaultFn),
			onTouchMove: shouldAddEventHandler(onTouchMove, defaultFn),
			onFocus: shouldAddEventHandler(onFocus, defaultFn),
			onBlur: shouldAddEventHandler(onBlur, defaultFn),
		})

		return clonedElement
	}
}

/**
 * Determines whether to add an event handler based on the event flag
 *
 * @param event - Boolean flag indicating whether to add the event handler
 * @param defaultFn - Default function to be executed when the event is triggered
 *
 * @returns The default function if event is true, undefined otherwise
 */
const shouldAddEventHandler = (
	event: boolean | undefined,
	defaultFn: () => void,
): (() => void) | undefined => {
	if (event) {
		return defaultFn
	} else {
		return undefined
	}
}

/**
 * Renders the content of a dialog with a close button and backdrop
 *
 * @example
 * <DialogContent
 *   titleId="dialog-title"
 *   descriptionId="dialog-desc"
 * >
 *   <h2 id="dialog-title">Dialog Title</h2>
 *   <p id="dialog-desc">Dialog content...</p>
 * </DialogContent>
 */
const DialogContent = ({
	children,
	titleId,
	descriptionId,
}: DialogContentProps): JSX.Element => {
	const context = useContext(DialogContext)

	useEffect(() => {
		if (context.isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [context.isOpen])

	let dialogClassName = ""
	if (context.hasBeenOpened) {
		dialogClassName = `jean-rc-dialog ${context.isOpen ? "jean-rc-dialog-open" : "jean-rc-dialog-closing"}`
	} else {
		dialogClassName = "jean-rc-dialog"
	}

	return (
		<>
			<div
				className="jean-rc-dialog-backdrop"
				style={{
					position: context?.isOpen ? "fixed" : undefined,
					display: context?.isOpen ? "block" : "none",
				}}
			></div>
			<dialog
				aria-modal="true"
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				className={dialogClassName}
			>
				<button
					onClick={() => handleDialog(context?.isOpen, context?.setIsOpen)}
					className="jean-rc-dialog-close"
				>
					<X className="jean-rc-dialog-icon" />
					<span className="jean-rc-sr-dialog-only">Close</span>
				</button>
				<section>{children}</section>
			</dialog>
		</>
	)
}

export { Dialog, DialogTrigger, DialogContent }
