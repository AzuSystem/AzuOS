/*
	Bootloader for AzuOS
	Handles the system upon boot
	Written by: MTSyntho @ AzuSystem 2024
*/

// For some reason ion wanna use jquery :'(
// $.getScript("libs/bootscreen.js", function() {
// 	alert("[Bootloader] Imported 'bootscreen.js' module");
// });

// Code snippet (bootloaderImport function) taken from StackOverflow - https://stackoverflow.com/a/950146
function bootloaderImport(file) {
	var script = document.createElement("script");
	script.src = `pkgs/${file}`;
	document.head.appendChild(script);

	console.log(`[Bootloader] Imported '${file}' (Package File) module`)
};

function bootloaderImportLibrary(file) {
	var script = document.createElement("script");
	script.src = `libs/${file}`;
	document.head.appendChild(script);

	console.log(`[Bootloader] Imported '${file}' (Library File) module`)
};

document.addEventListener('DOMContentLoaded', function() {
	console.log('[Bootloader] Initilizing AzuOS...')
	document.body.style.cursor = 'none';
	bootloaderImport('system/bootscreen.js');
	bootloaderImportLibrary('loadmodule.js');
	bootloaderImportLibrary('api/fileManagement.js');
	bootloaderImportLibrary('api/datetime.js')
	bootloaderImport('system/core.js')
	bootloaderImport('system/logindisplay.js');
});

// function __activateBootloader() {
// 	console.log('[Bootloader] Initilizing AzuOS...')
// 	setTimeout(function() {
// 		console.log('[Bootloader] Initilizing Login Screen...')
		
// 	}, 1000);

// }