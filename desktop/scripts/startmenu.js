/*
    Start Menu for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/ 

let startMenu = document.querySelector(".start-menu");
var smDiv = document.getElementById('startMenu');

var smComputedStyle = window.getComputedStyle(smDiv);
var smOpacity = smComputedStyle.getPropertyValue('opacity'); // thx chatgtp <3

function openStartMenu() {
	console.log('Menu Opened')
	startMenu.classList.remove("close");
	startMenu.classList.add("open");
}

function closeStartMenu() {
	console.log('Menu Closed')
	startMenu.classList.remove("open");
	startMenu.classList.add("close");
}

document.addEventListener('click', function(event) {
	var smComputedStyle = window.getComputedStyle(smDiv);
	var smOpacity = smComputedStyle.getPropertyValue('opacity');
    if (smOpacity === '1') {
        closeStartMenu();
    } else {
    	console.log(smOpacity);
    }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
	var smComputedStyle = window.getComputedStyle(smDiv);
	var smOpacity = smComputedStyle.getPropertyValue('opacity');
    if (smOpacity === '1') {
        closeStartMenu();
    } else {
    	console.log(smOpacity);
    }
  }
});
