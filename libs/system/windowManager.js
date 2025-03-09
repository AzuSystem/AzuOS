// Window Handler for AzuOS by MTSyntho @ AzuSystem
// Portions of this code is from TwinBox v10.0
// (C) datkat21, Envy ISDX 2024

console.log('[Window Manager] Module Imported');

function newWindow(title, url) {
	let obj = {};

	var winbox = new WinBox({
			title: title,
			url: url,
			root: document.getElementById('desktop'),
			overflow: true,
			onclose: function(){
				this.g.classList.add("windowClose");
				document.getElementById(winbox.id).classList.remove("opentask");
				document.getElementById(winbox.id).classList.add("closetask");

				setTimeout(() => {
					this.onclose = null;
					this.close();
					document.getElementById(winbox.id).remove();
				}, 200);

				return true;
			}
	});
	const tbtask = document.createElement('a');
	tbtask.id = winbox.id;
	tbtask.className = 'taskbartask opentask';
	tbtask.textContent = title;
	tbtask.onclick = function() {
			unminWindow(winbox.id);
	};
	document.getElementById('tbtasks').appendChild(tbtask);
	console.log("Window ID:", winbox.id);
}

function createDynamicWindow(title, codename, width, height, x, y, max, min, autosize, fullscreen, script) {
  	// Checking if desktop exists :3
  	var desktop = document.getElementById('desktop');
  	if (!desktop) {
  	    console.error('[Window Manager] Desktop is missing, Window will be created on HTML Body');
  	    desktop = document.body;
  	}

	var winbox = new WinBox({
			title: title,
			root: desktop,
			width: width,
			height: height,
			x: x,
			y: y,
			max: max,
			min: min,
			autosize: autosize,
			overflow: true,
			onclose: function(){
				this.g.classList.add("windowClose");
				document.getElementById(winbox.id).classList.remove("opentask");
				document.getElementById(winbox.id).classList.add("closetask");

				setTimeout(() => {
					this.onclose = null;
					this.close();
					document.getElementById(winbox.id).remove();
					unloadPackage(script);
				}, 200);

				return true;
			}
	});
	document.getElementById(winbox.id).setAttribute("codename", codename)
	const tbtask = document.createElement('a');
	tbtask.id = winbox.id;
	tbtask.className = 'taskbartask opentask';
	tbtask.textContent = title;
	tbtask.onclick = function() {
			unminWindow(winbox.id);
	};
	// document.getElementById('tbtasks').appendChild(tbtask);
	console.log("Window ID:", winbox.id);
}

function newXorgWindow(title, id) {
	let obj = {};

	var winbox = new WinBox({
			title: title,
			url: url,
			root: document.getElementById('desktop'),
			overflow: true,
			onclose: function(){
				this.g.classList.add("windowClose");
				document.getElementById(winbox.id).classList.remove("opentask");
				document.getElementById(winbox.id).classList.add("closetask");

				setTimeout(() => {
					this.onclose = null;
					this.close();
					document.getElementById(winbox.id).remove();
				}, 200);

				return true;
			}
	});
	const tbtask = document.createElement('a');
	tbtask.id = winbox.id;
	tbtask.className = 'taskbartask opentask';
	tbtask.textContent = title;
	tbtask.onclick = function() {
			unminWindow(winbox.id);
	};
	document.getElementById('tbtasks').appendChild(tbtask);
	console.log("Window ID:", winbox.id);
}

// function newWindowAZML(title, maximized, url) {
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch HTML content');
//       }
//       return response.text(); // Assuming the content is plain text/html
//     })
//     .then(htmlContent => {
//       new WinBox({
//         title: title,
//         max: maximized,
//         root: document.querySelector("desktop"),
//         html: htmlContent,
//         overflow: true,
//       onclose: function(){
//         this.g.classList.add("windowClose");
	
//         setTimeout(() => {
//           this.onclose = null;
//           this.close();
//         }, 500);
	
//         return true;
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching or creating WinBox:', error);
//     });
// }

// function AzuDialog(title, note, modal) {
// 	new WinBox({
// 			title: title,
// 			html: '<p>' + note + '</p>',
// 			root: document.querySelector("desktop"),
// 			overflow: true,
// 			modal: modal,
// 			class: 'azudialog',
// 			onclose: function(){
// 				this.g.classList.add("windowClose");
	
// 				setTimeout(() => {
// 					this.onclose = null;
// 					this.close();
// 				}, 200);
	
// 				return true;
// 				}
// 	});
// };

// function powerDialog() {
// 	new WinBox({
// 			title: 'Choose an Action',
// 			url: 'apps/shutdownDialog/index.html',
// 			root: document.querySelector("desktop"),
// 			overflow: true,
// 			modal: true,
// 			class: 'poweroff',
// 			width: 500,
// 			height: 400,
// 			onclose: function(){
// 				this.g.classList.add("windowClose");
	
// 				setTimeout(() => {
// 					this.onclose = null;
// 					this.close();
// 				}, 200);
	
// 				return true;
// 				}
// 	});
// };

// function wifiPanel() {
// 	new WinBox({
// 			title: 'Find a Network',
// 			url: 'apps/wifipanel/index.html',
// 			root: document.querySelector("desktop"),
// 			overflow: true,
// 			modal: true,
// 			class: 'wifipanel',
// 			width: 500,
// 			height: 400,
// 			onclose: function(){
// 				this.g.classList.add("windowClose");
	
// 				setTimeout(() => {
// 					this.onclose = null;
// 					this.close();
// 				}, 200);
	
// 				return true;
// 				}
// 	});
// };