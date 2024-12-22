var styling = (`
    font-size: 20px;
    font-family: 'Inter';
    resize: none;
    box-sizing: border-box;
    color: var(--azu-text-color);
`)

var filename = document.currentScript.getAttribute('script-arguments')
// let textdata;

win.create('AzuText', "azutextwin").then(win => win
    .setWidth(700)
    .setHeight(500)
    .confirm()
);

win.menubar('azutextwin').then(win => win
    .item('File', `
        'New', 'console.log('hi')'
        'Open', 'console.log('hi')'
    `)
    .confirm()
)

element.create('textarea', '', 'azutextinput').then(elm => elm
    .window('azutextwin')
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

if (filename) {
    fetch_file(filename, "plain")
        .then(result => {
            let textinput = element.get('azutextinput');
            textinput[0].value = result;
        })
        .catch(error => {
            console.error("[AzuText] Error:", error);
        });
}