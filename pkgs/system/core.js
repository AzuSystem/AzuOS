/*
	AzuOS Core (Modifed)
	Written by: MTSyntho @ AzuSystem
*/

// i dunno why i made this it's own function (can be found in logindisplay.js)
function unloadBootloader() {
	clearInterval(window.logindaterefresh);
	unloadPackage('bootloader.js');
};

async function windowManager(state) {
	if (state === 'start') {
		try {
			console.log('[AzuOS Core] Starting Window Manager & AzuOS SDK')
			await loadPromisedLibrary('WinboxJS/winbox.min.js');
			loadRawPathCSS('libs/WinboxJS/winbox.min.css');
			loadCSS('window.css');
			console.log('[System] Loaded Window Manager Dependencies')
			loadLibrary('system:windowManager.js')
			loadLibrary('system:sdk.js')
		} catch (error) {
			console.error(`[AzuOS Core] Error Encountered while loading Window Manager: ${error}`);
		}

	} else if (state === 'stop') {
		console.error('[AzuOS Core] Cannot close Window Manager (Not implemented)')
	}
}