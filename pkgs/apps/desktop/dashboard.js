/*
	Dashboard Component of AzuOS Desktop
	AzuSystem 2024
*/

const dashboardcss = (`
	background-color: hsla(270, 0%, 12%, 75%);
	/* outline: 1px solid rgba(255, 255, 255, 0.125); */
	/*border-radius: 4px;*/
	position: fixed;
	top: 0;
	bottom: 0;
	margin: 0;
	padding: 15px;
	left: 0;
	right: 0;
	box-shadow: 0 0 10px 2px #000000cc;
	display: flex;
	z-index: 50;
	backdrop-filter: blur(16px) saturate(200%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	/* border-radius: 12px; */
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: left;
	text-align: center;
`)

const dashheadercss = (`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	text-align: center;
	width: 100%;
	gap: auto;
`)

const dashheaderbtn = (`
	border: 0px;
	border-radius: 0px;
	width: 45px;
	height: 45px;
	padding: 5px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	z-index: 50;
	background: none;
	border: 0;
	transition-duration: 0.1s
`)

// Main Dashboard Container
element.create('div', '', 'dashboard').then(elm => elm
	.css(dashboardcss)
	.parent('desktop')
);

// Dashboard Header
element.create('div', '', 'dashheader').then(elm => elm
	.css(dashheadercss)
	.parent('dashboard')
)

// Welcome text in Dashboard Header
element.create('h2', strings.greeting("root"), '').then(elm => elm
	.margin(0)
	.width("100%")
	.textalign("left")
	.parent("dashheader")
)

// Right side of Dashboard Header
element.create('div', '', 'dashheaderright').then(elm => elm
	.width("100%")
	.css(`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: right;
		text-align: center;
		gap: 4px;
		background-color: rgba(255,255,255,0.1);
		border-radius: 12px;
	`)
	.parent('dashheader')
)

// Settings button
element.create('button', '', 'dashsettings').then(elm => elm
	.css(dashheaderbtn)
	.parent("dashheaderright")
)

element.create('img', '', '').then(elm => elm
	.src('assets/icons/settings.svg')
	.width(30)
	.height(30)
	.dropshadow('0px 4px 5px #00000050')
	.parent('dashsettings')
);

// Power Off button
element.create('button', '', 'dashpoweroff').then(elm => elm
	.css(dashheaderbtn)
	.parent("dashheaderright")
)

element.create('img', '', '').then(elm => elm
	.src('assets/icons/power.svg')
	.width(30)
	.height(30)
	.dropshadow('0px 4px 5px #00000050')
	.parent('dashpoweroff')
);