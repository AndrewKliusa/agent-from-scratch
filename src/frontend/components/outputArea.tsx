type OutputAreProps = {
	outputText: string,
}

export default function OutputArea({ outputText }: OutputAreProps) {
	return (
		<textarea 
			className="resize-none flex-1 p-1 border-black border-2 rounded-md mb-5" 
			readOnly={true}
			value={outputText}
		>
		</textarea>
	)
}