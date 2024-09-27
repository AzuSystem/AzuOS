/*
	Wallpaper Component of AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Check if the desktop div already exists
if (!document.getElementById('desktop')) {

	// Create the div element
	var desktopDiv = document.createElement('div');

	// Set the id attribute
	desktopDiv.id = 'desktop';

	// Set the class attribute
	desktopDiv.className = 'desktop fadein';

	// Append the div to the body or another container
	document.body.appendChild(desktopDiv);
};