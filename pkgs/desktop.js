/*
	Desktop for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

loadCSS('index.css');
unloadCSS('boot.css');
unloadCSS('login.css');
unloadPackage('bootscreen.js');
unloadPackage('logindisplay.js');
loadPackage('desktop/wallpaper.js');
loadPackage('desktop/watermark.js');
loadPackage('desktop/taskbar.js');
loadPackage('desktop/icons.js');
windowManager('start');

// I asked ChatGPT to remake each HTML component into JS
// taskbar.js may be rewritten to make sense to myself