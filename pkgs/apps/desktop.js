/*
	Desktop for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

loadCSS('index.css');
loadTheme('default-theme.css');
// loadTheme('dark-mode.css');
// loadTheme('light-mode.css');

// Load all the individial CSS files for elements.
loadCSS('ui/notification.css'); // Notification Animation
loadCSS('ui/button.css');
loadCSS('ui/startmenu.css'); // Start Menu Animation

unloadCSS('boot.css');
unloadCSS('login.css');
unloadPackage('system:bootscreen.js');
unloadPackage('system:logindisplay.js');
loadPackage('apps:desktop/wallpaper.js');
loadPackage('apps:desktop/watermark.js');
loadPackage('apps:desktop/taskbar.js');
loadPackage('apps:desktop/icons.js');
loadPackage('apps:desktop/startmenu.js');
loadLibrary('system:xorginazuos.js')

sounds.play("login")