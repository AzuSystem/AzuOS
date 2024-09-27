/*
	Desktop Icons Component for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Create the container for all desktop icons
const desktopIcons = document.createElement('div');
desktopIcons.className = 'desktop-icons';
desktopIcons.id = 'desktopIcons';
document.getElementById('desktop').appendChild(desktopIcons);

function addDesktopApp(name, icon, src) {
	// Create <a> for icon interaction
	const link = document.createElement('a');
	link.onclick = () => newWindow(name, `pkgs/${src}`);

	// Create deskIcon div for the... app icon
	const desktopIcon = document.createElement('div');
	desktopIcon.className = 'deskIcon';

	// Create the app icon
	const img = document.createElement('img');
	img.width = 40;
	img.src = icon;

	// Create icon name
	const text = document.createElement('p');
	text.textContent = name;

	// Add app icon and title to the desktop icon
	desktopIcon.appendChild(img);
	desktopIcon.appendChild(text);

	// Add desktop icon to the main container
	link.appendChild(desktopIcon);
	desktopIcons.appendChild(link);
};

addDesktopApp('Settings', 'assets/icons/settings.svg', 'settings/index.html');