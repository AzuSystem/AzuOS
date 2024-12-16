win.create(`Video Demo - Big Buck Bunny`, "videodemo").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

element.create('video', ``, "videoelem").then(elm => elm
	.window("videodemo")
	.textalign('center')
	.src('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_2160p_60fps_normal.mp4')
	.css("width: 100%; height: 100%;")
	.controls()
	.autoplay()
);