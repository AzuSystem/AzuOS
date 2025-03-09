/*
	Taskbar Component for AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

const taskbarcss = (`
	background-color: var(--azu-taskbar-background);
	outline: var(--azu-taskbar-outline);
	/*border-radius: 4px;*/
	position: fixed;
	bottom: 0px;
	width: var(--azu-taskbar-width);
	margin: 15px;
	height: 45px;
	padding: 0px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	box-shadow: var(--azu-taskbar-shadow);
	display: flex;
	z-index: 50;
	backdrop-filter: var(--azu-taskbar-blur);
	-webkit-backdrop-filter: var(--azu-taskbar-blur);
	border-radius: var(--azu-taskbar-border-radius);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	text-align: center;
`)

const taskbarcomponent = (`
  border: 0px;
  border-radius: 0px;
  /* width: 45px; */
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

const taskbarstart = (`
	width: 45;
	border-top-left-radius: var(--azu-taskbar-border-radius);
	border-bottom-left-radius: var(--azu-taskbar-border-radius);
`)

const taskbardivider = (`
	border-left: 1px solid #ffffff20;
	width: 0;
	height: 80%;
	box-shadow: 0 0 25px #ffffffcc;
`)

const taskbarright = (`
	display: flex;
	flex-direction: row;
	position: fixed;
	right: 12px;
`)

const taskbarextras = (`
	width: 37px;
`)

const taskbartime = (`
	width: 47px;
	text-shadow: 0px 4px 5px #00000050
`)

const taskbarprocesses = (`
	width: calc(100% - 180px);
`)

let isStartMenuOpen = false;

element.create('div', '', 'taskbar', true).then(elm => elm
	.css(taskbarcss)
	.parent('desktop')
);

// Start Button
element.create('button', '', 'start-btn').then(elm => elm
	.css(taskbarcomponent + taskbarstart)
	.id('start-btn')
	.parent('taskbar')
	.attribute('onclick', `
		var startmenu = document.getElementById('start-menu');

		if (isStartMenuOpen === false) {
			// startmenu.style.display = 'block';
			// startmenu.style.pointerEvents = 'all'	
			startmenu.classList.remove('__azuos-start-menu-out');		
			startmenu.classList.add('__azuos-start-menu-in');
			isStartMenuOpen = true;
		} else if (isStartMenuOpen === true) {
			// startmenu.style.display = 'none';
			// startmenu.style.pointerEvents = 'none'	
			startmenu.classList.remove('__azuos-start-menu-in');
			startmenu.classList.add('__azuos-start-menu-out');
			isStartMenuOpen = false;			
		}
	`)
);

element.create('img', '', '').then(elm => elm
	.src('assets/logo.svg')
	.width(30)
	.height(30)
	.dropshadow('0px 4px 5px #00000050')
	.parent('start-btn')
);

// Taskbar Divider
element.create('div', '', '').then(elm => elm
	.css(taskbardivider)
	.parent('taskbar')
);

// Taskbar Processes
element.create('div', '', 'taskbar-processes').then(elm => elm
	.css(taskbarprocesses)
	.parent('taskbar')
);

// Taskbar Divider
element.create('div', '', '').then(elm => elm
	.css(taskbardivider)
	.parent('taskbar')
);

// Taskbar Actions (Container)
element.create('div', '', 'taskbarright').then(elm => elm
	.css(taskbarright)
	.parent('taskbar')
);

// Taskbar Actions (Hidden Icons)
element.create('button', '', 'hidden-icons-btn').then(elm => elm
	.css(taskbarextras + taskbarcomponent)
	.parent('taskbarright')
);

element.create('img', '', '').then(elm => elm
	.src('assets/icons/arrowup-hollow.svg')
	.width(25)
	.height(25)
	.dropshadow('0px 4px 5px #00000050')
	.parent('hidden-icons-btn')
);

// Taskbar Actions (Quick Panel)
element.create('button', '', 'quick-panel-btn').then(elm => elm
	.css(taskbarextras + taskbarcomponent)
	.parent('taskbarright')
);

element.create('img', '', '').then(elm => elm
	.src('assets/icons/config.svg')
	.width(25)
	.height(25)
	.dropshadow('0px 4px 5px #00000050')
	.parent('quick-panel-btn')
);

// Taskbar Actions (Time)
element.create('button', '', 'time-display').then(elm => elm
	.css(taskbarcomponent + taskbarextras + taskbartime)
	.parent('taskbarright')
);

element.create('p', '00:00', '').then(elm => elm
	.textshadow('0px 4px 5px #00000050')
	.parent('time-display')
);