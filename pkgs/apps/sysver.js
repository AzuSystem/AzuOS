export default {
	name: "About AzuOS",
	description: "Basic information on AzuOS.",
	version: "v1.0.0",
	icon: "icons:questionmark.svg"
}

win.create("About AzuOS", "root").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

element.create('div', '', 'sidebar').then(elm => elm
	.window('root')
	.width('220px')
	.height('100%')
	.position('fixed')
	.top(0)
	.left(0)
	.backgroundcolor('#00000050')
);

element.create('div', '', 'contents').then(elm => elm
	.window('root')
	.width('100%')
	.height('100%')
	.position('fixed')
	.top(0)
	.left('220px')
	.backgroundcolor('black')
);

element.create('img', '', 'logo').then(elm => elm
	.source('assets/logo.svg')
	.width(100)
	.parent('sidebar')
);

element.create("h2", "AzuOS", "").then(elm => elm
	.parent('contents')
	.textalign('center')
	.textshadow('0px 0px 50px #ffffffcc')
);

element.create('p', 'This script is used to test the AzuOS SDK', "tes").then(elm => elm
	.parent('contents')
	.textalign('center')
);

element.create('p', 'Copyright @ AzuSystem 2024 - AzuOS Alpha 7', "tes").then(elm => elm
	.parent('contents')
	.textalign('center')
);