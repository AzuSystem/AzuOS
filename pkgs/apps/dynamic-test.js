win.create("penas penas peans", "root").then(win => win
	.setWidth(200)
	.setHeight(300)
	.setMax(true)
	.confirm()
);

element.create("h2", "Good Day!", "text").then(elm => elm
	.window("root")
	.align('center')
	.color('red')
	.background('blue')
);

element.create('p', 'pedos r bad bad', "tes").then(elm => elm
	.window("root")
);