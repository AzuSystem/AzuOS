win.create("sdk testing", "root").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

element.create('img', '', 'logo').then(elm => elm
	.window('root')
	.source('assets/logo.svg')
);

element.create("h2", "AzuOS", "text").then(elm => elm
	.window("root")
	.textalign('center')
	.shadow('0px 0px 50px #ffffffcc')
);

element.create('p', 'This script is used to test the AzuOS SDK', "tes").then(elm => elm
	.window("root")
	.textalign('center')
);

element.create('p', 'Copyright @ AzuSystem 2024 - AzuOS Alpha 7', "tes").then(elm => elm
	.window("root")
	.textalign('center')
);