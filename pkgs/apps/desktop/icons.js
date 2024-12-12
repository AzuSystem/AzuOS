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
	link.onclick = () => loadPackage(src)

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

function addDesktopFiles(name, icon) {
	// Create <a> for icon interaction
	const link = document.createElement('a');
	link.onclick = () => loadLibrary('system:extensionlink.js', `~/Desktop/${name}`)

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


addDesktopApp('SDK Test', 'assets/icons/exclamation.svg', 'apps:dynamic-test.js');
addDesktopApp('About', 'assets/icons/computer.svg', 'apps:sysver.js');
addDesktopApp('VirtualPC', 'assets/icons/questionmark.svg', 'apps:virtualpc.js');
addDesktopApp('AzuText', 'assets/icons/questionmark.svg', 'apps:azutext.js');
addDesktopApp('AzuTheme', 'assets/icons/questionmark.svg', 'settings:azutheme.js');

// addDesktopApp('Settings', 'assets/icons/settings.svg', 'settings/index.html');
// console.log(fetch_directory('~/Desktop'));
fetch_directory('~/Desktop').then(([files, folders]) => {
    // Process files
    files.forEach(file => {
        addDesktopFiles(file, 'assets/icons/questionmark.svg');
    });

    folders.forEach(folder => {
        addDesktopFiles(folder, 'assets/icons/folderopen.svg');
    });
});
