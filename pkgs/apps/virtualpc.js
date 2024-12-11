webwin.create("VirtualPC via v86", "https://copy.sh/v86", "v86webwin").then(webwin => webwin
    .setWidth(1280*0.75)
    .setHeight(720*0.75)
    .confirm()
);

// win.create("VirtualPC via v86", "virtualpc").then(win => win
// 	.setWidth(1280*0.75)
// 	.setHeight(720*0.75)
// 	.confirm()
// );

// element.create('div', '', 'v86container').then(elm => elm
// 	.window('virtualpc')
//     .width("100%")
//     .height("100%")
//     .radius("12px")
//     .overflow("hidden")
// )

// element.create('iframe', '', 'v86frame').then(elm => elm
// 	.parent('v86container')
//     .width("100%")
//     .height("100%")
//     .radius("12px")
// 	.source('https://copy.sh/v86/')
//     .attribute('allowfullscreen', 'true')
// );