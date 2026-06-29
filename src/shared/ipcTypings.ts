export const IPC = {
	SEND_PROMPT: 'agent:sent-prompt'
} as const

export type SendPromptRequest = { prompt: string }
export type SendPromptResponse = { response: string }

declare global {
  interface Window {
    api: {
      sendPrompt: (req: SendPromptRequest) => Promise<SendPromptResponse>;
    };
  }
}

export {}