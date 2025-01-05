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

// element.create('h6', `
// 	look i know you expected more but I did alot more than just add this script ;-;
// 	don't worry tho, ill prolly add more to this next update :3
// 	`, '').then(elm => elm
// 	.parent('azuthemediv')
// 	.opacity(0.4)
// )

// element.create('h3', 'Select a theme :3', '').then(elm => elm
// 	.parent('azuthemediv')
// 	.opacity(0.5)
// );

element.create('div', '', '').then(elm => elm
	.parent('azuthemediv')
	.width('100%')
	.height('2px')
	.backgroundcolor('white')
	.opacity(0.2)
);

element.create('div', '', 'tempthemeswitch').then(elm => elm
	.flex()
	.gap("8px")
	.horizontal()
	.parent('azuthemediv')
)

element.create('button', 'AzuOS Default', '').then(elm => elm
	.parent('azuthemediv')
	.opacity(0.4)
	.attribute('onclick', `
		unloadAllThemes();
		loadTheme("default-theme.css");
	`)
	.parent('tempthemeswitch')
)

element.create('button', 'Dark Theme', '').then(elm => elm
	.attribute('onclick', `
		unloadAllThemes();
		loadTheme("dark-mode.css");
	`)
	.parent('tempthemeswitch')
)

element.create('button', 'Light Mode', '').then(elm => elm
	.attribute('onclick', `
		unloadAllThemes();
		loadTheme("light-mode.css");
	`)
	.parent('tempthemeswitch')
)