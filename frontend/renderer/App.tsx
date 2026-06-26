import InputPanel from "../components/inputPanel";
import OutputArea from "../components/outputArea";

export default function App() {
  return (
		<div className="flex min-h-screen flex-col p-2">
			<h1 className="text-2xl font-bold text-red-800">Hello from React</h1>
			<OutputArea></OutputArea>
			<InputPanel></InputPanel>
		</div>	
	)
}