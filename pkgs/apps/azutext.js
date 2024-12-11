var styling = (`
    font-size: 20px;
    font-family: 'Inter';
    resize: none;
    box-sizing: border-box;
`)

var filename = document.currentScript.getAttribute('script-arguments')
// let textdata;

win.create("AzuText", "root").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

if (filename) {
	var textdata = fetch_file(filename, 'plain')
}

element.create('textarea', textdata, '').then(elm => elm
	.window('root')
	.css(styling)
	.position('fixed')
	.width('calc(100% - 6px)')
	.height('calc(100% - 6px)')
	.placeholder('Write Something :3')
	.align('center')
	.attribute('wrap', 'soft')
	.color('white')
	.backgroundcolor('transparent')
	.border('none')
	.outline('none')
	.padding('20px')
);