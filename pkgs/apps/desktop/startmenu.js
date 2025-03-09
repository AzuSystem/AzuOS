/*
	Start Menu Component of AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

// Beware the mad variables names :skull:

const startmenucss = (`
	background-color: var(--azu-taskbar-background);
	outline: var(--azu-taskbar-outline);
	position: fixed;
	bottom: 60px;
	left: 145px;
	width: 650px;
	height: 70%;
	margin: 15px;
	padding: 17px;
	box-shadow: var(--azu-taskbar-shadow);
	display: flex;
	z-index: 50;
	backdrop-filter: var(--azu-taskbar-blur);
	-webkit-backdrop-filter: var(--azu-taskbar-blur);
	border-radius: var(--azu-taskbar-border-radius);
	display: flex;
	flex-direction: column;
	align-items: left;
	transition-duration: 0.2s;
	// display: none;
	// opacity: 0;
	// pointer-events: none;
`)

const startmenupinnedcss = (`
	width: 35%;
	height: calc(100% - 100px);
	position: absolute;
	left: 17px;
	outline: 1px solid rgba(255, 255, 255, 0.125);
	box-shadow: 0 0 10px 2px #00000050;
	border-radius: 12px;
	display: flex; /* Enables flexbox for children */
	flex-direction: column;
`)

// const startmenuwidgetscss = (`
// `)

const startmenubottombarcss = (`
	width: calc(100% - 34px); /* Compensate for 17px padding on both sides */
	height: 50px;
	position: absolute;
	bottom: 17px;
	left: 17px;
	outline: 1px solid rgba(255, 255, 255, 0.125);
	box-shadow: 0 0 10px 2px #00000050;
	border-radius: 12px;
	display: flex; /* Enables flexbox for children */
	flex-direction: row; /* Horizontal layout of children */
	align-items: center; /* Vertically align items */
`)

const startmenubottomsidescss = (`
	flex: 1; /* These sections will take up equal space */
	display: flex; /* Enables flexbox inside sections */
	align-items: center; /* Vertically center content */
	height: 100%; /* Full height of the parent */
	gap: 2px;
`)

const startmenubarbtncss = (`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background: none;
	border-radius: 7px;
	border: none;
	transition-duration: 0.2s;
`)

element.create('div', '', 'start-menu').then(elm => elm
	.css(startmenucss)
	// .class('__azuos-start-menu-out')
	.opacity(0)
	.id('start-menu')
	.parent('desktop')
);

// Pinned Apps
element.create('div', '', 'start-menu-pinned').then(elm => elm
	.css(startmenupinnedcss)
	.parent('start-menu')
);

element.create('div', '', 'start-menu-widgets').then(elm => elm
	// .css(startmenuwidgetscss)
	.parent('start-menu')
);

// Start Menu Bottom Bar
element.create('div', '', 'start-menu-bottom-bar').then(elm => elm
	.css(startmenubottombarcss)
	.parent('start-menu')
);

// Start Menu Left
element.create('div', '', 'start-menu-left').then(elm => elm
	.css(startmenubottomsidescss + `justify-content: flex-start; padding-left: 8px;`)
	.parent('start-menu-bottom-bar')
);

// Start Menu Left (File Explorer Button)
element.create('button', '', 'start-menu-folder-btn').then(elm => elm
	.css(startmenubarbtncss)
	.parent('start-menu-left')
);

element.create('img', '', '').then(elm => elm
	.height(25)
	.source('assets/icons/folder.svg')
	.parent('start-menu-folder-btn')
);

// Start Menu Left (Settings Button)
element.create('button', '', 'start-menu-settings-btn').then(elm => elm
	.css(startmenubarbtncss)
	.parent('start-menu-left')
	.attribute('onclick', `
		close
		loadPackage("settings:settings.js")
	`)
);

element.create('img', '', '').then(elm => elm
	.height(25)
	.source('assets/icons/settings.svg')
	.parent('start-menu-settings-btn')
);

// Start Menu Center
// i know i used variables earlier ;-;
element.create('div', '', 'start-menu-center').then(elm => elm
	.css(`
		display: flex; /* Flex container */
		justify-content: center; /* Center content horizontally */
		align-items: center; /* Center content vertically */
		width: auto; /* Let the content dictate the width */
		padding: 0 8px;
	`)
	.parent('start-menu-bottom-bar')
);

element.create('div', '', 'start-menu-profile').then(elm => elm
	.css(`
		display: flex; /* Flex container for profile */
		flex-direction: row; /* Align items in a row */
		align-items: center; /* Center profile items vertically */
		justify-content: center; /* Ensure profile elements are centered */
		color: inherit; /* Use default text color */
		gap: 8px;
	`)
	.parent('start-menu-center')
);

// Profile Picture
element.create('img', '', '').then(elm => elm
	.css(`
		border-radius: 50%; /* Circular profile picture */
		width: 40px;
		height: 40px;
		box-shadow: 0 0 10px 2px #00000050;
	`)
	.source('assets/pfp/wallpaperCave-uwp4415391.jpeg')
	.parent('start-menu-profile')
);

// Username
element.create('p', 'AzuOS User', '').then(elm => elm
	.parent('start-menu-profile')
);

element.create('div', '', 'start-menu-right').then(elm => elm
	.css(startmenubottomsidescss + `justify-content: flex-end; padding-right: 8px;`)
	.parent('start-menu-bottom-bar')
);

// Start Menu Right (Power Button)
element.create('button', '', 'start-menu-power-btn').then(elm => elm
	.css(startmenubarbtncss)
	.parent('start-menu-right')
);

element.create('img', '', '').then(elm => elm
	.height(25)
	.source('assets/icons/power.svg')
	.parent('start-menu-power-btn')
);

// Start Menu Right (Account Button)
element.create('button', '', 'start-menu-account-btn').then(elm => elm
	.css(startmenubarbtncss)
	.parent('start-menu-right')
);

element.create('img', '', '').then(elm => elm
	.height(25)
	.source('assets/icons/account.svg')
	.parent('start-menu-account-btn')
);