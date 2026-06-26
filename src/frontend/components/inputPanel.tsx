import PromptInput from "./promptInput";
import SendButton from "./sendButton";

export default function InputPanel() {
	return (
		<footer className="bottom-0 flex w-full items-end gap-1">
			<PromptInput></PromptInput>
			<SendButton></SendButton>
		</footer>
	)
}