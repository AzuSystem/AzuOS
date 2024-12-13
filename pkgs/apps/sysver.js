// export default {
// 	name: "About AzuOS",
// 	description: "Basic information on AzuOS.",
// 	ver: "v1.0.0",
// 	type: "process"
// }

var osname = azuapi.call('sysinfo', 'os')
var osver = azuapi.call('sysinfo', 'version')
var osdev = azuapi.call('sysinfo', 'developer')

win.create("About " + osname, "sysverwin").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

// Background
element.create('div', '', '').then(elm => elm
	.window('sysverwin')
	.width('220px')
	.height('100%')
	.position('fixed')
	.top(0)
	.left(0)
	.backgroundimage('assets/wallpapers/palm tree near dome.jpg')
	.backgroundsize('cover')
	.backgroundattachment('fixed')
	.backgroundposition('center')
	.backgroundrepeat('no-repeat')
	.filter('blur(15px) brightness(1.3)')
	.clippath('inset(0)')
);

element.create('div', '', 'sidebar').then(elm => elm
	.window('sysverwin')
	.width('220px')
	.height('100%')
	.position('fixed')
	.top(0)
	.left(0)
);

element.create('div', '', 'contents').then(elm => elm
	.window('sysverwin')
	.width('calc(100% - 240px)')
	.height('100%')
	.position('fixed')
	.top(0)
	.left('220px')
	.paddingleft('20px')
);

element.create('img', '', 'logo').then(elm => elm
	.source('assets/logo_white.svg')
	.width(100)
	.align('center')
	.dropshadow('0px 5px 5px #000000aa')
	.parent('sidebar')
);

element.create("h2", osname, "").then(elm => elm
	.parent('contents')
	.textshadow('0px 0px 50px #ffffffcc')
);

element.create('p', osname + ' is an Operating System written primarily with Web Technologies.', "").then(elm => elm
	.parent('contents')
);

element.create('p', `Copyright @ ${osdev} - ${osname} ${osver}`, "tes").then(elm => elm
	.parent('contents')
);

// azuapi.call('notification').then(api => api
//     .title('About AzuOS')
//     .description('learn.')
//     .confirm()
// );

// console.log(azuapi.call('uuid'));