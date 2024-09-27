/*
	Login Display Screen for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

function openLogin() {
	var login = document.getElementById('login');
	login.classList.add("fadein");
}

function quickApps(state) {
	var panel = document.getElementById('quick-apps');
	if (state === 'open') {
		panel.classList.remove("fadeout");
		panel.classList.add("fadein");
	};
	if (state === 'close') {
		panel.classList.remove("fadein")
		panel.classList.add("fadeout");
	};
};

function login() {
	console.log('[Login Display] Logging In...')
	var boot = document.getElementById('boot');
	var welcome = document.getElementById('welcome');
	var login = document.getElementById('login');

	login.classList.add("fadeout");
	setTimeout(function() {
		var desktop = document.createElement('div');
		desktop.id = 'desktop';
		desktop.className = 'desktop';
		document.body.appendChild(desktop);
		// boot.remove();
		// welcome.remove();
		login.remove();

		loadPackage('desktop.js')
	}, 1000);
}

// Fetch Date n Time and apply it
setInterval(function() {
	var date = document.getElementById('date');
	var time = document.getElementById('time');
	var statustime = document.getElementById('status-time');

	date.innerText = fetchDateTime().date;
	time.innerText = fetchDateTime().time;
	statustime.innerText = fetchDateTime().time;
}, 1000);
