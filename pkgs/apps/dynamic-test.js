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
	.textshadow('0px 0px 50px #ffffffcc')
);

element.create('p', 'This script is used to test the AzuOS SDK', "tes").then(elm => elm
	.window("root2")
	.textalign('center')
);

element.create('p', system.copyright() + ' - ' + system.name() + ' Alpha ' + system.version().toString(), "tes").then(elm => elm
	.window("root2")
	.textalign('center')
);
// element.create('div', '', 'centerdiv').then(elm => elm
// 	.window("root2")
// 	.contentalign("center", "center")
// 	.flexbox()
// )
// element.create('button', 'Learn More', '').then(elm => elm
// 	.root("centerdiv")
// 	.textalign('center')
// )