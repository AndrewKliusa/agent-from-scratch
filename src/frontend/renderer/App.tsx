import { useState } from "react";
import InputPanel from "../components/inputPanel";
import OutputArea from "../components/outputArea";

export default function App() {
	const [outputText, changeOutputText] = useState("")
	
  return (
		<div className="flex min-h-screen flex-col p-2">
			<h1 className="text-2xl font-bold text-red-800 pb-1">AI Reponse:</h1>
			<OutputArea 
				outputText={outputText}
			/>
			<InputPanel
				onOutputReceived={changeOutputText}
			/>
		</div>
	)
}