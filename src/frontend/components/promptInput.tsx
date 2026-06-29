import { ChangeEvent } from "react";

type PromptInputProps = {
	prompt: string,
	onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function PromptInput({ prompt, onPromptChange }: PromptInputProps) {
	return (
		<textarea
			value={prompt}
			onChange={onPromptChange}
			className="flex-1 h-32 p-1 border-black border-2 rounded-md align-top resize-none"
		/>
	)
}