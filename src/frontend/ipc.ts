import { ipcMain } from 'electron';
import { IPC, SendPromptRequest, SendPromptResponse } from '../shared/ipcTypings';
import { sendPrompt } from '../agent/main';

export function registerIpc() {
	ipcMain.handle(
		IPC.SEND_PROMPT,
		async (_event, req: SendPromptRequest): Promise<SendPromptResponse> => {
			const response = await sendPrompt(req.prompt);
			return { response }
		}
	)
}