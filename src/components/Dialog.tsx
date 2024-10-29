import {
	cloneElement,
	createContext,
	useContext,
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
	children: React.ReactElement
	customEvent?: boolean
	onClick?: boolean
	onMouseDown?: boolean
	onMouseUp?: boolean
	onMouseEnter?: boolean
	onMouseLeave?: boolean
	onTouchStart?: boolean
	onTouchEnd?: boolean
	onTouchMove?: boolean
	onFocus?: boolean
	onBlur?: boolean
}

interface DialogProps {
	children: React.ReactElement | React.ReactElement[]
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface DialogContentProps {
	children: React.ReactElement | React.ReactElement[]
	titleId?: string
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
 *
 * @param param0
 * @returns
 */
const Dialog = ({ children, isOpen, setIsOpen }: DialogProps) => {
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
 *
 * @param param0
 * @returns
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
 *
 * @param event
 * @param defaultFn
 * @returns
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
 *
 * @param param0
 * @returns
 */
const DialogContent = ({
	children,
	titleId,
	descriptionId,
}: DialogContentProps) => {
	const context = useContext(DialogContext)

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
			<div
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
			</div>
		</>
	)
}

export { Dialog, DialogTrigger, DialogContent }
