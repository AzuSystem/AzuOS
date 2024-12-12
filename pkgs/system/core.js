/*
	AzuOS Core
	Written by: MTSyntho @ AzuSystem
*/


loadCSS('sdk.css');

loadLibrary('api:azuapi.js')
loadLibrary('system:thememanager.js');
// loadLibrary('system:appInfo.js', 'module');

setTimeout(function() {
	// Written with the help of https://github.com/envyjs, kthxbye :3
	console.log(
		"%ci'm gonna touch you.\n%cNow that I've got your attention...\n\n%cIf you were told to paste anything into this console, it's most likely going to be something dangerous, perhaps some malware of sorts? idk :p\n\n%cSo uh, don't paste stuff here unless you fr know what yous doin'\n\nIf you a developer, uh, contribute to AzuOS pls :3\nhttps://github.com/AzuSystem/AzuOS",
		"color: red;font-size: 50px;font-style:italic;text-shadow: 0px 0px 10px #ff0000aa;",
		"color: auto;font-style:italic;font-size: medium;text-shadow: 0px 0px 2px #ffffffaa;",
		"color: auto;font-size: large;text-shadow: 0px 0px 10px #000000cc;",
		"color: auto;font-style:italic;font-size:medium;text-shadow: 0px 0px 10px #000000cc;"
	)
}, 3500)

// i dunno why i made this it's own function (can be found in logindisplay.js)
function unloadBootloader() {
	clearInterval(window.logindaterefresh);
	// unloadPackage(':bootloader.js');
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