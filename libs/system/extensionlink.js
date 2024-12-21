/*
	Extension Link Library for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
	Opens applications corresponding to their file extension
*/

var extension = document.currentScript.getAttribute('script-arguments').split('.').pop().toLowerCase();
var azutext = ['txt', 'json', 'md']
var azuimg = ['apng', 'png', 'jpg', 'jpeg', 'gif', 'ico', 'cur', 'jfif', 'pjpeg', 'pjp', 'svg']
var scriptfile = ['js']

if (azutext.includes(extension)) {
	loadPackage('apps:azutext.js', document.currentScript.getAttribute('script-arguments'))
	console.log(`[Extension Link] Opening ${document.currentScript.getAttribute('script-arguments')} in AzuText`)
} else if (azuimg.includes(extension)) {
	loadPackage('apps:azuimg.js', document.currentScript.getAttribute('script-arguments'))
	console.log(`[Extension Link] Opening ${document.currentScript.getAttribute('script-arguments')} in AzuImage`)
}

if (scriptfile.includes(extension)) {
	loadScript(document.currentScript.getAttribute('script-arguments'))
	console.log(`[Extension Link] Launching ${document.currentScript.getAttribute('script-arguments')}`)
}

unloadLibrary('system:extensionlink.js');
