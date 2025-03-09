// win.create('Open Firefox', 'ff').then(win => win
//     .setWidth(640)
//     .setHeight(360)
//     .confirm()
// )

// // element.create('div', '', 'ffdiv').then(elm => elm
// // 	.window('ff')
// // );

// var ff = azuapi.call('execshell', 'ls -l /')
// ff.then(result => {
    // console.log(result)
//     element.create('p', result, 'ffresult').then(elm => elm
//         .window('ff')
//     );
// })

// pywebview.api.exec_command('firefox')
azuapi.call('launchxpra', 'dolphin')
