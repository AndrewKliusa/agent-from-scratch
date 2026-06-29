import { writeFile, access, constants, readFile } from "node:fs/promises"
import path from "node:path"
import { app } from 'electron';
import { PROJECT_NAME } from "./constants";
import defaultConfig from "./defaultConfig.json"
import config from '../../../forge.config';

export class Config {
	public static async init() {
		const configPath = path.join(app.getPath("appData"), PROJECT_NAME, "config.json")

		try {
			await access(configPath, constants.W_OK | constants.R_OK)
		} catch (error) {
			if (this.isErrnoException(error)) {
				await writeFile(configPath, JSON.stringify(defaultConfig))
			}
			throw error
		}

		const config = await readFile(configPath)
	}
	
	public static set() {
		
	}

	private static isErrnoException(error: unknown): error is NodeJS.ErrnoException {
  	return error instanceof Error
	}
}