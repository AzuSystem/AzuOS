/*
	Boot 'n' Welcome Screen for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/


var boot = document.getElementById('boot');
var welcome = document.getElementById('welcome');
var __skipBoot = false; // please remove in production, probably

if (__skipBoot === true) {
	boot.classList.add("fadeout");
	welcome.classList.add("fadeout");
	boot.remove();
	welcome.remove();
	setTimeout(function() {
		openLogin();
		document.body.style.cursor = 'auto';
	}, 150);
} else {
	setTimeout(function() {
		boot.classList.add("fadeout");

		setTimeout(function() {
			welcome.classList.add("fadein");
			document.body.style.cursor = 'auto';
			boot.remove();

			const currentHour = new Date().getHours();
        	let greeting;

        	if (currentHour >= 5 && currentHour < 12) {
        	    greeting = "Good morning";
        	} else if (currentHour >= 12 && currentHour < 18) {
        	    greeting = "Good afternoon";
        	} else if (currentHour >= 18 && currentHour < 22) {
        	    greeting = "Good evening";
        	} else {
        	    greeting = "Good night";
        	}

			document.getElementById("welcometextobject").innerHTML = greeting;

			// ! Doesn't work due to autoplay. Boot.mp3 renamed to login.mp3 
			// let sfx = new Audio("assets/sounds/boot.mp3");
			// sfx.play().then(() => {
			// 	console.log("Audio played successfully!");
			// }).catch((error) => {
			// 	console.error("Autoplay was blocked:", error);
			// });

			setTimeout(function() {
				welcome.classList.remove("fadein");
				welcome.classList.add("fadeout");

				setTimeout(function() {
					welcome.remove();
					openLogin();
				}, 500);
			
			}, 1000);

		}, 500);

	}, 1000);
};

// function login() {
// 	var boot = document.getElementById('boot');
// 	var welcome = document.getElementById('welcome');
// 	var login = document.getElementById('login');

// 	login.classList.add("fadeout");
// 	setTimeout(function() {
// 		var desktop = document.createElement('div');
// 		desktop.id = 'desktop';
// 		desktop.className = 'desktop';
// 		document.body.appendChild(desktop);
// 		// boot.remove();
// 		// welcome.remove();
// 		login.remove();

// 		// Creates Desktop
// 		const testDesktop = `
// <link rel="stylesheet" href="index.css">
// <div id=welcome class=welcome>
// 			<script src=scripts/welcome.js></script>
// 			<p class=welcometext>Welcome!</p>
// 		</div>
// 		<div id=desktop class=desktop>
// 			<link rel="stylesheet" href="scripts/winbox.min.css">
// 			<link rel="stylesheet" href="window.css">
// 			<script src=scripts/winbox.min.js></script>
// 			<script src=scripts/window.js></script>
// 			<p class=sysver>AzuOS Alpha 5<br>By AzuSystem</p>
// 			<div class=desktopIcons>
// 				<div class=deskIcon>
// 					<img width=40px src=assets/icons/folderopen.svg>
// 					<p>File Explorer</p>
// 				</div>
// 				<a onclick='newWindow("Settings", false, "apps/settings/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/settings.svg>
// 						<p>Settings</p>
// 					</div>
// 				</a>
// 				<div class=deskIcon>
// 					<img width=40px src=assets/icons/terminal.svg>
// 					<p>Terminal</p>
// 				</div>
// 				<a onclick='newWindow("Window Test", false, "apps/windowTest/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/window.svg>
// 						<p>Window Test</p>
// 					</div>
// 				</a>
// 				<a onclick='newWindowAZML("AZML Test", false, "apps/AZMLTest/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/code.svg>
// 						<p>AZML Test</p>
// 					</div>
// 				</a>
// 				<a onclick='newWindow("Clock", false, "apps/clock/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/clock.svg>
// 						<p>Clock</p>
// 					</div>
// 				</a>
// 				<a onclick='newWindow("Dezunkrr", false, "apps/dezunkrr/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/questionmark.svg>
// 						<p>Dezunkrr</p>
// 					</div>
// 				</a>
// 				<a onclick='AzuDialog("Dialog Test", "yo how u doin?", true)'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/exclamation.svg>
// 						<p>Dialog Test</p>
// 					</div>
// 				</a>
// 				<a onclick='newWindow("Apps Center", false, "apps/appcenter/index.html")'>
// 					<div class=deskIcon>
// 						<img width=40px src=assets/icons/gridview.svg>
// 						<p>Apps Center</p>
// 					</div>
// 				</a>
// 			</div>
// 			<div id=daToast class=implementationToast>
// 				<script src=scripts/toast.js></script>
// 				<p>Not Implemented...</p>
// 			</div>
// 			<div id=startMenu class=start-menu> 
// 				<div class=startShadow>
// 					<div class=startUser>
// 						<img class=pfp src=assets/pfp/wallpaperCave-uwp4415391.jpeg>
// 						<p class=start-menu-username>AzuUser</p>
// 						<button onclick="powerDialog()" class=power-button>
// 							<img width=30px height=30px src=assets/icons/power.svg>
// 						</button>
// 					</div>
// 				</div>
// 				<p class=pinapptitle>Pinned Apps <img height=15px src=assets/icons/pin.svg></p>
// 				<hr class=menuhr>
// 				<div class=startmenulist>
// 					<a>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/folderopen.svg>
// 							<div class=listOptionText>
// 								<p>File Manager</p>
// 							</div>
// 						</div>
// 					</a>
// 					<a onclick='newWindow("Settings", false, "apps/settings/index.html")'>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/settings.svg>
// 							<div class=listOptionText>
// 								<p>Settings</p>
// 							</div>
// 						</div>
// 					</a>
// 					<a>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/terminal.svg>
// 							<div class=listOptionText>
// 								<p>Terminal</p>
// 							</div>
// 						</div>
// 					</a>
// 					<a>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/internet.svg>
// 							<div class=listOptionText>
// 								<p>Web Browser</p>
// 							</div>
// 						</div>
// 					</a>
// 					<a onclick='newWindow("Window Test", false, "apps/windowTest/index.html")'>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/questionmark.svg>
// 							<div class=listOptionText>
// 								<p>Window Test</p>
// 							</div>
// 						</div>
// 					</a>
// 					<a onclick='newWindow("Pluto WebOS", false, "https://pluto-app.zeon.dev")'>
// 						<div id=install class="listOption">
// 							<img width=30 src=assets/icons/questionmark.svg>
// 							<div class=listOptionText>
// 								<p>Pluto</p>
// 							</div>
// 						</div>
// 					</a>
// 				</div>
// 			</div>
// 			<div class=taskbar>
// 				<div id=taskbardate class=taskbar-date>
// 					<h3 id="fulltime">00:00</h3>
// 					<p id="date" class=taskDateText>January 1, 2000</p>
// 					<script src="scripts/datetime.js"></script>
// 				</div>
// 				<script src=scripts/startmenu.js></script>
// 				<button onclick="openStartMenu()" class="toolbarStart">
// 					<img width=30px height=30px src=../assets/logo.svg>
// 				</button>
// 				<div class="toolbarTask" id=tbtasks></div>
// 				<button onclick="notImplemented()" class="trayButton">
// 					<img width=30px src=assets/icons/arrowup.svg>
// 				</button>
// 				<button onclick="wifiPanel()" class="wifi-Button">
// 					<img width=20px src=assets/icons/wifi.svg>
// 				</button>
// 				<button onclick="notImplemented()" class="quickPanel-Button">
// 					<img width=30px src=assets/icons/config.svg>
// 				</button>
// 				<button onclick="openTaskDate()" class="taskbarDate-Button">
// 					<p id="time">00:00</p>
// 				</button>
// 			</div>
//  			<script src=scripts/contextmenu.js></script>
//  			<script src=api/contextmenu.js></script>
//  			<script src=scripts/desktop.js></script>
// 		</div>
// 		`
// 		desktop.classList.add("fadein");
// 		desktop.innerHTML = testDesktop;
// 	}, 1000);
// }

// // Note 2 Self: Turn the desktop into various different components javascript files.