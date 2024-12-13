/*
	AzuTheme for AzuOS
	Written by: MTSyntho @ AzuSystem
*/


win.create("AzuTheme", "azutheme").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

// Background
element.create('div', '', 'azuthemediv').then(elm => elm
	.window('azutheme')
	.padding('20px')
);

element.create('h1', 'Themes', '').then(elm => elm
	.parent('azuthemediv')
)

element.create('h6', `
	look i know you expected more but I did alot more than just add this script ;-;
	don't worry tho, ill prolly add more to this next update :3
	`, '').then(elm => elm
	.parent('azuthemediv')
	.opacity(0.4)
)

element.create('div', '', 'tempthemeswitch').then(elm => elm
	.flex()
	.gap("8px")
	.horizontal()
	.parent('azuthemediv')
)

element.create('button', 'Light -> Dark', '').then(elm => elm
	.attribute('onclick', `unloadTheme("light-mode.css"); 
		unloadCSS("index.css");
		loadTheme("dark-mode.css");
		loadCSS("index.css");
		`)
	.parent('tempthemeswitch')
)

element.create('button', 'Dark -> Light', '').then(elm => elm
	.attribute('onclick', `unloadTheme("dark-mode.css");
		unloadCSS("index.css");
		loadTheme("light-mode.css");
		loadCSS("index.css");
		`)
	.parent('tempthemeswitch')
)