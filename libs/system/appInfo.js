/*
	App Info Function for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
	Fetches App Info
*/

async function fetchAppInfo(path, data, type) {
	try {
		const splitPath = path.split(':', 2);
		let scriptPath = '';
		if (type === 'package') {
			scriptPath = `pkgs/${splitPath[0]}/${splitPath[1]}`;
		} else if (type === 'library') {
			scriptPath = `libs/${splitPath[0]}/${splitPath[1]}`;
		}
		const appinfo = await import(scriptPath);
		const validData = ['name', 'description', 'version', 'icon'];

		if (!validData.includes(data)) {
			throw new Error(`[AzuOS Core] Script Info only includes 4 data, (${validData.join(', ')}), ${data} is invalid.`);
		}
		return appinfo.default[data];
 		} catch (error) {
			console.error("[AzuOS Core] Failed to fetch app info: ", error);
			return null;
		}
	}