	/*
	Login Display Screen for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

function openLogin() {
	var login = document.getElementById('login');
	login.classList.add("fadein");
	console.log('[Login Display] Opened Login Display')
	windowManager('start');
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
	// console.log(fetch_file('../test.py', 'plain'));
	var boot = document.getElementById('boot');
	var welcome = document.getElementById('welcome');
	var login = document.getElementById('login');
	var loginstatusmenu = document.getElementById('login-status');
	var loginstatus = document.getElementById('login-status-name');
	var loginstatusicon = document.getElementById('login-status-icon');
	var username = document.getElementById('name').value;
	var password = document.getElementById('pwd').value;

	loginstatusmenu.classList.remove('login-animation-end');
	loginstatusmenu.classList.add('login-animation-start');

	if (username === 'root' & password === 'root') {
		console.log(`[Login Display] Logging into, ${username}`)
		loginstatus.textContent = `Hello, ${username}!`;
		loginstatusicon.src = 'assets/icons/wavingHand.svg'
		setTimeout(function() {
			login.classList.add("fadeout");
			setTimeout(function() {
				login.remove();
				unloadBootloader();

				loadPackage('apps:desktop.js');
			}, 1000);
	}, 1000);
	} else {
		console.error('[Login Display] Incorrect Username or Password!')
		loginstatus.textContent = `Incorrect Username or Password!`;
		loginstatusicon.src = 'assets/icons/close.svg'
		setTimeout(function() {
			loginstatusmenu.classList.add('login-animation-end');
			loginstatusmenu.classList.remove('login-animation-start');
		}, 1000)
	}
}

document.getElementById('name').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    	document.getElementById('pwd').focus();
    }
});

document.getElementById('pwd').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    	login();
    }
});

// Fetch Date n Time and apply it
window.logindaterefresh = setInterval(function() {
	var date = document.getElementById('date');
	var time = document.getElementById('time');
	var statustime = document.getElementById('status-time');

	date.innerText = fetchDateTime().date;
	time.innerText = fetchDateTime().time;
	statustime.innerText = fetchDateTime().time;
}, 1000);