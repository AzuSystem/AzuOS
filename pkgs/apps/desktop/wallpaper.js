/*
	Wallpaper Component of AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Check if the desktop already exists
if (!document.getElementById('desktop')) {

	// Create the div element
	var desktop = document.createElement('div');

	// Set the id attribute
	desktop.id = 'desktop';

	// Set the class attribute
	desktop.className = 'desktop fadein';

	desktop.setAttribute("codename", 'desktop');

	// Add desktop to body
	document.body.appendChild(desktop);

	var fade = document.createElement('div');

	fade.className = 'bottom-fade';

	desktop.appendChild(fade);
};