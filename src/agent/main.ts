import OpenAI from "openai"

const client = new OpenAI({
	apiKey: process.env.DEEPSEEK_KEY,
	baseURL: "https://api.deepseek.com"
})

export async function sendPrompt(prompt: String) {
	const completion = await client.chat.completions.create({
		model: 
	})
	return ""
}