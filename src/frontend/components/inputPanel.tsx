import { ChangeEvent, useState } from "react";
import PromptInput from "./promptInput";
import SendButton from "./sendButton";

type InputPanelProps = {
	onOutputReceived: (input: string) => void
}

export default function InputPanel({ onOutputReceived }: InputPanelProps) {
	const [prompt, setPrompt] = useState("")

	async function handleSend() {
		const response = await window.api.sendPrompt({ prompt })
		onOutputReceived(response.response)
	}

	return (
		<footer className="bottom-0 flex w-full items-end gap-1">
			<PromptInput prompt={prompt} onPromptChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}></PromptInput>
			<SendButton onClick={handleSend}></SendButton>
		</footer>
	)
}