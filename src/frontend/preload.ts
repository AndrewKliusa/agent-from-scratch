import { contextBridge, ipcRenderer } from 'electron';
import { IPC, SendPromptRequest, SendPromptResponse } from '../shared/ipcTypings';

contextBridge.exposeInMainWorld("api", {
	sendPrompt: (req: SendPromptRequest) => 
		ipcRenderer.invoke(IPC.SEND_PROMPT, req) as Promise<SendPromptResponse>
})