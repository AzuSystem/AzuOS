/*
	Development Watermark Component for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Create a <p> element
const paragraph = document.createElement('p');

// Set the class attribute
paragraph.className = 'sysver';

// Set the inner HTML
paragraph.innerHTML = 'AzuOS Alpha 5<br>By AzuSystem';

// Append the taskbar to the element with id 'desktop'
const desktop = document.getElementById('desktop');
desktop.appendChild(paragraph);
