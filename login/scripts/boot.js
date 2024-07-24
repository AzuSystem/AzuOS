var spinner = document.getElementById("loading");

setTimeout(function() {
	spinner.classList.add("fadeout");
}, 2500);

setTimeout(function() {
	window.location.replace("login.html");
}, 3000);