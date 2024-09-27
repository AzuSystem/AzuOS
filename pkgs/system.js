/*
	Overall System Code for AzuOS
	Written by: Someone on StackOverflow - https://stackoverflow.com/a/950146
*/

// i dunno why i made this it's own function (can be found in logindisplay.js)
function unloadBootloader() {
	clearInterval(window.logindaterefresh);
	unloadPackage('bootloader.js');
};

function windowManager(state) {
	if (state === 'start') {
		loadLibrary('WinboxJS/winbox.min.js');
		loadCSS('libs/WinboxJS/winbox.min.css');
		loadCSS('window.css');
		console.log('[System] Loaded Window Manager Dependencies')
		loadLibrary('windowManager.js')
	} else if (state === 'stop') {
		console.error('[System] Cannot close Window Manager (Not implemented)')
	}
}