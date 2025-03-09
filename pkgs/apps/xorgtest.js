// var xorgstuf = azuapi.call('xorg', 'fetchWindow')

// win.create("Xorg Test", "xorg").then(win => win
// 	.setWidth(700)
// 	.setHeight(500)
// 	.confirm()
// );


// xorgstuf.then(result => {
// 	let win = JSON.stringify(result, null, 2); // Pretty-print JSON

// 	element.create('p', win, "").then(elm => elm
// 		.window('xorg')
// 	);
// });

webwin.create(name, "http://localhost:14500", name + 'win').then(webwin => webwin
    .setWidth(1280*0.75)
    .setHeight(720*0.75)
    .confirm()
);	