/*
	Desktop for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

loadCSS('index.css')
unloadCSS('boot.css')
unloadCSS('login.css')
loadPackage('desktop/wallpaper.js');
loadPackage('desktop/watermark.js')
loadPackage('desktop/taskbar.js')

// I asked ChatGPT to remake each HTML component into JS
// taskbar.js may be rewritten to make sense to myself