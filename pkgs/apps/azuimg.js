var filename = document.currentScript.getAttribute('script-arguments')
// let textdata;

win.create('AzuImage', "azuimgwin").then(win => win
    .setWidth(700)
    .setHeight(500)
    .confirm()
);
// element.create('p', 'Click on an image file on the desktop to preview it.', 'azuimgwaittoload').then(elm => elm
//     .window('azuimgwin')
// );

if (filename) {
    var b64image = ""
    var file = pywebview.api.resolve_full_path(filename);

    file.then(result => {
        b64image = pywebview.api.convert_image_to_data_url(result);
        b64image.then(result => {
            element.create('img', '', 'azuimgpreview').then(elm => elm
                .window('azuimgwin')
                .position('fixed')
                .attribute("width", "100%")
                .attribute("height", "100%")
                .objectfit('contain')
                .src(result)
            );
        })
    });
}