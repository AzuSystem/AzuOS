/*
	Development Watermark Component for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

var osname = azuapi.call('sysinfo', 'os')
var osver = azuapi.call('sysinfo', 'version')
var osdev = azuapi.call('sysinfo', 'developer')

// Create a <p> element
var watermark = document.createElement('p');

// Set the class attribute
watermark.className = 'sysver';

// Set the inner HTML
watermark.innerHTML = `${osname} ${osver}<br>By ${osdev}`

// Add to desktop
var desktop = document.getElementById('desktop');
desktop.appendChild(watermark);
