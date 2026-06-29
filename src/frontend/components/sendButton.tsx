type SendButtonProps = {
	onClick: () => void
}

export default function SendButton({onClick}: SendButtonProps) {
	return (
		<button 
			onClick={onClick}
			className="border-black border-2 h-fit items-end bottom-0 rounded-full w-7"
		>
			➤
		</button>
	)
}