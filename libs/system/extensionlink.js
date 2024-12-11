/*
	Extension Link Library for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
	Opens applications corresponding to their file extension
*/

var extension = document.currentScript.getAttribute('script-arguments').split('.').pop();
var azutext = ['txt', 'json', 'md']

if (azutext.includes(extension)) {
	loadPackage('apps:azutext.js', document.currentScript.getAttribute('script-arguments'))
	console.log(`[Extension Link] Opening ${document.currentScript.getAttribute('script-arguments')} in AzuText`)
};

unloadLibrary('system:extensionlink.js');
