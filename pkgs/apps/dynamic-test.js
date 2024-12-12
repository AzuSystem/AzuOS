var osname = azuapi.call('sysinfo', 'os')
var osver = azuapi.call('sysinfo', 'version')
var osdev = azuapi.call('sysinfo', 'developer')

win.create("sdk testing", "root2").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

element.create('img', '', 'logo').then(elm => elm
	.window('root2')
	.source('assets/logo.svg')
);

element.create("h2", "AzuOS", "text").then(elm => elm
	.window("root2")
	.textalign('center')
	.shadow('0px 0px 50px #ffffffcc')
);

element.create('p', 'This script is used to test the AzuOS SDK', "tes").then(elm => elm
	.window("root2")
	.textalign('center')
);

element.create('p', `Copyright @ ${osdev} 2024 - ${osname} ${osver}`, "tes").then(elm => elm
	.window("root2")
	.textalign('center')
);