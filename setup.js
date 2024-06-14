function utilswin() {
	console.log('Utilities Window')
	var win = document.getElementById("window");
	var inWin = document.getElementById("contents");
	var home = document.getElementById("home");
	var utils = document.getElementById("utilities");
	utils.style.display = "block";
	home.classList.add("fadeOut");
	win.classList.add("utilSize");
	inWin.classList.add("utilSize");
	var delayInMilliseconds = 500;
	setTimeout(function() {
		home.style.display = "block";
		utils.classList.add("fadeIn");
	}, delayInMilliseconds);

}