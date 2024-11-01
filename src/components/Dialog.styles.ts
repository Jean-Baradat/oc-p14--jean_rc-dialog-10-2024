import styled from "@emotion/styled"
import { css } from "@emotion/css"

export const Backdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 50;
	height: 100%;
	width: 100%;
	backdrop-filter: blur(4px);
	background-color: rgba(0, 0, 0, 0.05);
`

export const getAnimationClass = (isOpen: boolean, hasBeenOpened: boolean) => {
	if (hasBeenOpened) {
		let animation = ""
		if (isOpen) {
			animation = "modalEnter"
		} else {
			animation = "modalExit"
		}

		return css`
			opacity: 0;
			visibility: hidden;
			display: block;
			animation: ${animation} 0.2s ease-out forwards;
		`
	}
}

export const DialogContainer = styled.dialog`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 50;
	transform: translate(-50%, -50%);
	margin: 0;
	min-width: 20rem;
	max-width: 24rem;
	border-radius: 0.25rem;
	background-color: #fff;
	padding: 1.25rem;
	box-shadow:
		rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	@keyframes modalEnter {
		from {
			opacity: 0;
			transform: translate(-50%, -48%) scale(0.96);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
			visibility: visible;
		}
	}

	@keyframes modalExit {
		from {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
			visibility: visible;
		}
		to {
			opacity: 0;
			transform: translate(-50%, -48%) scale(0.96);
			visibility: hidden;
		}
	}
`

export const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: -0.5rem;
	top: -0.5rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.25rem;
	border-width: 1px;
	background-color: #fff;

	&:hover {
		background-color: #f9fafb;
	}

	@media (min-width: 1024px) {
		width: 2rem;
		height: 2rem;
	}
`

export const CloseIcon = styled.span`
	svg {
		width: 1.75rem;
		height: 1.75rem;

		@media (min-width: 1024px) {
			width: 1.25rem;
			height: 1.25rem;
		}
	}
`

export const VisuallyHidden = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
`
