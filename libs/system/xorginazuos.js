/*
	X11 x AzuOS <3
	Show X11 Windows in AzuOS (idk when wayland support will come)
	Written by: MTSyntho @ AzuSystem 2025
*/

// azuapi.call('xorg', 'fetchWindow').then(result => {
// 	var openWindows = result.filter(window => !window.ischild);

// 	openWindows.forEach(xwindow => {
// 		// console.log(xwindow.id)
// 		win.create(xwindow.title, `xorg${xwindow.title}`).then(win => win
// 			.setWidth(xwindow.width)
// 			.setHeight(xwindow.height)
// 			.confirm()
// 		)
// 		element.create('canvas', '', `xorgcontent${xwindow.title}`).then(elm => elm
// 			.width('100%')
// 			.height('100%')
// 			.id(`xorgcontent${xwindow.title}`)
// 			.window(`xorg${xwindow.title}`)
// 		)

// 		setInterval(() => {
// 			pywebview.api.fetch_window_content(xwindow.id).then(response => {
// 				const data = JSON.parse(response);

// 				if (data.error) {
// 					console.error(`Error fetching content for window ${xwindow.title}:`, data.error);
// 				} else {
// 					// const canvas = element.get(`xorgcontent${xwindow.title}`);
// 					const canvas = document.getElementById(`xorgcontent${xwindow.title}`)
// 					const ctx = canvas.getContext('2d');
// 					const img = new Image();

// 					img.onload = () => {
// 						ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// 					};
// 					img.src = `data:image/png;base64,${data.content}`;
// 				}
// 			});
// 		}, 1000 / 30); // 30 FPS
// 	})
// });

// azuapi.call('xpra', 'isPresent').then(result => {
// 	if (result === false) {
// 		webwin.create(name, "http://localhost:48500", name + 'win').then(webwin => webwin
// 		    .setWidth(1280*0.75)
// 		    .setHeight(720*0.75)
// 		    .confirm()
// 		);		
// 	}
// });
