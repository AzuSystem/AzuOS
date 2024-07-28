/*
	Desktop for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

const desktopctxt = {
	View: 'console.log("Opened View Desktop Window");',
	Refresh: 'console.log("Refreshed Desktop");',
	'New File': 'console.log("Opened Create File Dialog");',
	'Display Settings': 'console.log("Open Settings Display Settings");',
	Personalize: 'console.log("Open Themes");',
	'Open in Terminal': 'console.log("Refreshed Desktop");'
};

// Desktop Context Menu
setTimeout(function() {
	setContextMenu(desktopctxt);
}, 2000);