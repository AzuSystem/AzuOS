/*
	Development Watermark Component for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Create a <p> element
var watermark = document.createElement('p');

// Set the class attribute
watermark.className = 'sysver';

// Set the inner HTML
watermark.innerHTML = 'AzuOS Alpha 7<br>By AzuSystem';

// Add to desktop
var desktop = document.getElementById('desktop');
desktop.appendChild(watermark);
