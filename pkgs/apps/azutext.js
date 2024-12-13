var styling = (`
    font-size: 20px;
    font-family: 'Inter';
    resize: none;
    box-sizing: border-box;
    color: var(--azu-text-color);
`)

var filename = document.currentScript.getAttribute('script-arguments')
// let textdata;

if (filename) {
    win.create(`${filename} - AzuText`, "azutextwin").then(win => win
        .setWidth(700)
        .setHeight(500)
        .confirm()
    );
    fetch_file(filename, "plain")
        .then(result => {
            element.create('textarea', result, '').then(elm => elm
                .window('azutextwin')
                .css(styling)
                .position('fixed')
                .width('calc(100% - 6px)')
                .height('calc(100% - 6px)')
                .placeholder('Write Something :3')
                .align('center')
                .attribute('wrap', 'soft')
                // .color('white')
                .backgroundcolor('transparent')
                .border('none')
                .outline('none')
                .padding('20px')
            );
        })
        .catch(error => {
            console.error("[AzuText] Error:", error);
        });
} else {
    win.create('AzuText', "azutextwin").then(win => win
        .setWidth(700)
        .setHeight(500)
        .confirm()
    );

	element.create('textarea', '', '').then(elm => elm
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
}