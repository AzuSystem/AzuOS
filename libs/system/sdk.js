/*
	Software Developement Kit for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
	AzuOS SDK allows for the development of dynamically created applications
*/

const win = {
	create: (name, codename) => {
		return new Promise((resolve) => {
			// Default Values if none provided
			const properties = {
				name,
				codename,
				width: 500,
				height: 400,
				x: 100,
				y: 100,
				max: false,
				min: false,
				autosize: false,
				fullscreen: false,
			};

			const win = {
				codename,
				name,
				setWidth: (w) => {
					properties.width = w;
					return win;
				},
				setHeight: (h) => {
					properties.height = h;
					return win;
				},
				setX: (xpos) => {
					properties.x = xpos;
					return win;
				},
				setY: (ypos) => {
					properties.y = ypos;
					return win;
				},
				setMax: (maximize) => {
					properties.max = maximize;
					return win;
				},
				setMin: (minimize) => {
					properties.min = minimize;
					return win;
				},
				setAutosize: (auto) => {
					properties.autosize = auto;
					return win;
				},
				setFullscreen: (fullscreenapp) => {
					properties.fullscreen = fullscreenapp;
					return win;
				},
				confirm: () => {
					createDynamicWindow(
						properties.name,
						codename,
						properties.width,
						properties.height,
						properties.x,
						properties.y,
						properties.max,
						properties.min,
						properties.autosize,
						properties.fullscreen
						// document.currentScript
					);
				}
			};
		   resolve(win);
		});
	},
	menubar: (codename) => {
		return new Promise((resolve) => {
			const menuItems = {};

			const win = {
				item: (menuName, itemsDefinition) => {
					if (!menuItems[menuName]) {
						menuItems[menuName] = [];
					}

					// Parse and add menu items
					const items = itemsDefinition.trim().split('\n').map((line) => {
						const [label, funcName] = line.split(',').map((str) => str.trim().replace(/'/g, ''));
						return { label, funcName };
					});

					menuItems[menuName].push(...items);
					return win; // Enable method chaining
				},
				confirm: () => {
					// var parentWindow = document.querySelector(`[codename="${codename}"]`);

					element.create('div', '', 'menubar').then(elm => elm
						.window(codename)
						.backgroundcolor('#ffffff20')
						.width('100%')
						.height('15px')
						// .padding('2px')
					);

					var menubar = document.querySelector(`[codename="menubar"]`);

					// Iterate through menus and create HTML
					for (const [menuName, items] of Object.entries(menuItems)) {
						const menu = document.createElement('div');
						menu.className = 'menu';
						menu.setAttribute('data-menu', menuName);

						const menuLabel = document.createElement('span');
						menuLabel.className = 'menu-label';
						menuLabel.innerText = menuName;
						menu.appendChild(menuLabel);

						const submenu = document.createElement('div');
						submenu.className = 'submenu';
						menu.appendChild(submenu);

						// Add menu items
						items.forEach(({ label, funcName }) => {
							const menuItem = document.createElement('div');
							menuItem.className = 'menu-item';
							menuItem.innerText = label;
							menuItem.onclick = () => {
								if (typeof window[funcName] === 'function') {
									window[funcName]();
								} else {
									console.error(`Function "${funcName}" not defined.`);
								}
							};
							submenu.appendChild(menuItem);
						});

					menubar.appendChild(menu);
					}
				},
			};
			resolve(win);
		});
	},
};

const element = {
	create: (type, innerHTML, codename, manualIsElementOverwrite = false) => {
		return new Promise((resolve) => {
			const elm = document.createElement(type);
			elm.innerHTML = innerHTML;

			const elementObject = {
				codename,
				element: elm,
				attribute: (name, value) => {
					elm.setAttribute(name, value);
					return elementObject;
				},
				class: (className) => {
					elm.classList.add(className);
					return elementObject;
				},
				id: (id) => {
					elm.id = (id);
					return elementObject;
				},
				display: (display) => {
					elm.style.display = display;
					return elementObject;
				},
				flex: () => {
					elm.style.display = 'flex';
					return elementObject;
				},
				gap: (gap) => {
					elm.style.gap = gap;
					return elementObject;
				},
				objectfit: (type) => {
					elm.style.objectFit = type;
					return elementObject;
				},
				objectFit: (type) => {
					elm.style.objectFit = type;
					return elementObject;
				},
				horizontal: () => {
					elm.style.flexDirection = 'row';
					return elementObject;
				},
				vertical: () => {
					elm.style.flexDirection = 'column';
					return elementObject;
				},
				align: (alignment) => {
					elm.classList.add('__azuos-sdk-align-center');
					return elementObject;
				},
				alignx: (alignment) => {
					elm.classList.add('__azuos-sdk-alignx-center');
					return elementObject;
				},
				aligny: (alignment) => {
					elm.classList.add('__azuos-sdk-aligny-center');
					return elementObject;
				},
				textalign: (textalignment) => {
					elm.style.textAlign = textalignment;
					return elementObject;
				},
				color: (color) => {
					elm.style.color = color;
					return elementObject;
				},
				textshadow: (shadow) => {
					elm.style.textshadow = shadow;
					return elementObject;
				},
				boxshadow: (shadow) => {
					elm.style.boxShadow = shadow;
					return elementObject;
				},
				dropshadow: (shadow) => {
					elm.style.filter = `drop-shadow(${shadow})`;
					return elementObject;
				},
				opacity: (opacity) => {
					elm.style.opacity = opacity;
					return elementObject;
				},
				border: (string) => {
					elm.style.border = string;
					return elementObject;
				},
				outline: (string) => {
					elm.style.outline = string;
					return elementObject;
				},
				backgroundcolor: (color) => {
					elm.style.background = color;
					return elementObject;
				},
				backgroundimage: (image) => {
					elm.style.backgroundImage = `url(${image.replace(/ /g, '%20')})`;
					// console.log(`url(${image.replace(/ /g, '%20')})`)
					return elementObject;
				},
				backgroundrepeat: (repeat) => {
					elm.style.backgroundRepeat = repeat;
					return elementObject;
				},
				backgroundposition: (pos) => {
					elm.style.backgroundRepeat = pos;
					return elementObject;
				},
				backgroundsize: (size) => {
					elm.style.backgroundSize = size;
					return elementObject;
				},
				backgroundattachment: (attach) => {
					elm.style.backgroundAttachment = attach;
					return elementObject;
				},
				backgroundclip: (clip) => {
					elm.style.backgroundClip = clip;
					return elementObject;
				},
				backgroundorigin: (origin) => {
					elm.style.backgroundOrigin = origin;
					return elementObject;
				},
				backgroundblend: (mode) => {
					elm.style.backgroundBlendMode = mode;
					return elementObject;
				},
				backdropfilter: (filter) => {
					elm.style.backdropFilter = filter;
					return elementObject;
				},
				filter: (filter) => {
					elm.style.filter = filter;
					return elementObject;
				},
				overflow: (overflow) => {
					elm.style.overflow = overflow;
					return elementObject;
				},
				overflowx: (overflow) => {
					elm.style.overflowx = overflow;
					return elementObject;
				},
				overflowy: (overflow) => {
					elm.style.overflowy = overflow;
					return elementObject;
				},
				scale: (scale) => {
					elm.style.scale = scale;
					return elementObject;
				},
				clippath: (clip) => {
					elm.style.clipPath = clip;
					return elementObject;
				},
				source: (srcimg) => {
					elm.src = srcimg;
					return elementObject;
				},
				src: (srcimg) => {
					elm.src = srcimg;
					return elementObject;
				},
				width: (width) => {
					if (elm.tagName === 'IMG' || elm.tagName === 'VIDEO' || elm.tagName === 'CANVAS') {
						elm.width = width;
					} else {
						elm.style.width = width;
					}
					return elementObject;
				},

				height: (height) => {
					if (elm.tagName === 'IMG' || elm.tagName === 'VIDEO' || elm.tagName === 'CANVAS') {
						elm.height = height;
					} else {
						elm.style.height = height;
					}
					return elementObject;
				},
				top: (top) => {
					elm.style.top = top;
					return elementObject;
				},
				left: (left) => {
					elm.style.left = left;
					return elementObject;
				},
				bottom: (bottom) => {
					elm.style.bottom = bottom;
					return elementObject;
				},
				right: (right) => {
					elm.style.right = right;
					return elementObject;
				},
				position: (pos) => {
					elm.style.position = pos;
					return elementObject;
				},
				padding: (padding) => {
					elm.style.padding = padding;
					return elementObject;
				},
				paddingtop: (top) => {
					elm.style.paddingTop = top;
					return elementObject;
				},
				paddingleft: (left) => {
					elm.style.paddingLeft = left;
					return elementObject;
				},
				paddingbottom: (bottom) => {
					elm.style.paddingBottom = bottom;
					return elementObject;
				},
				paddingright: (right) => {
					elm.style.paddingRight = right;
					return elementObject;
				},
				margin: (margin) => {
					elm.style.margin = margin;
					return elementObject;
				},
				margintop: (top) => {
					elm.style.marginTop = top;
					return elementObject;
				},
				marginleft: (left) => {
					elm.style.marginLeft = left;
					return elementObject;
				},
				marginbottom: (bottom) => {
					elm.style.marginBottom = bottom;
					return elementObject;
				},
				marginright: (right) => {
					elm.style.marginRight = right;
					return elementObject;
				},
				marginTop: (top) => {
					elm.style.marginTop = top;
					return elementObject;
				},
				marginLeft: (left) => {
					elm.style.marginLeft = left;
					return elementObject;
				},
				marginBottom: (bottom) => {
					elm.style.marginBottom = bottom;
					return elementObject;
				},
				marginRight: (right) => {
					elm.style.marginRight = right;
					return elementObject;
				},				
				radius: (radius) => {
					elm.style.borderRadius = radius;
					return elementObject;
				},
				css: (string) => {
					elm.style.cssText = string;
					elm.classList.remove('__azuos-button-large');
					return elementObject;
				},
				style: (string) => {
					const style = document.createElement("style");
					style.innerHTML = string;
					document.head.appendChild(style);
					elm.classList.remove('__azuos-button-large');
					return elementObject;
				},
				type: (string) => {
					elm.type = string;
					return elementObject;
				},
				for: (string) => {
					elm.for = string;
					return elementObject;
				},
				mininput: (number) => {
					elm.minlength = number;
					return elementObject;
				},
				maxinput: (number) => {
					elm.maxlength = number;
					return elementObject;
				},
				inputrequired: (boolean) => {
					if (typeof boolean === 'boolean') {
						elm.required = boolean;
					} else if (boolean === 'true') {
						elm.required = true;
					} else if (boolean === 'false') {
						elm.required = false;
					}
					return elementObject;
				},
				readonly: (boolean) => {
					if (typeof boolean === 'boolean') {
						elm.readonly = boolean;
					} else if (boolean === 'true') {
						elm.readonly = true;
					} else if (boolean === 'false') {
						elm.readonly = false;
					}
					return elementObject;
				},
				autoplay: () => {
					elm.autoplay = true;
					return elementObject;
				},
				controls: () => {
					elm.controls = true;
					return elementObject;
				},
				placeholder: (string) => {
					elm.placeholder = string
					return elementObject;
				},
				// usesystemcss: (boolean) => {
				// 	if (typeof boolean === 'boolean') {
				// 		elm.setAttribute('system-css', boolean)
				// 	} else if (boolean === 'true') {
				// 		elm.setAttribute('system-css', 'true')
				// 	} else if (boolean === 'false') {
				// 		elm.setAttribute('system-css', 'false')
				// 	}
				// 	return elementObject;
				// },
				buttontype: (string) => {
					if (string === 'default' || string === 'small') {
						elm.classList.add('__azuos-button-small');
					} else if (string === 'large') {
						elm.classList.add('__azuos-button-large');
					} else {
						elm.classList.add('__azuos-button-small')
					}
					return elementObject;					
				},
				parent: (elementcodename) => {
					var parent = document.querySelector(`[codename="${elementcodename}"]`);
					if (parent) {
						parent.appendChild(elm);  // Append the element to the parent
					} else {
						console.error(`[AzuOS SDK] Cannot append '${elm.tagName}' element (Codename: '${elementObject.codename}') to "${elementcodename}"`);
					}
					return elementObject;
				},
				window: (windowid) => {
					var parentWindow = document.querySelector(`[codename="${windowid}"]`);
					if (parentWindow) {
						parentWindow.querySelector('.wb-body').appendChild(elm);
					} else {
						console.error(`[AzuOS SDK] Cannot append '${elm.tagName}' element (Codename: '${elementObject.codename}') to window with codename "${windowid}".`);
					}
					return elementObject;
				}
			};
			// if (elm.getAttribute('system-css') === '') {
			// 	elm
			// }
			// if (elm.tagName === 'BUTTON' && ((elm.getAttribute('ignore-system-css') === null || elm.getAttribute('ignore-system-css') == 'false'))) {
			// 	elm.classList.add('__azuos-button-large')
			// };
			// const useSystemCSS = elm.getAttribute('system-css');
			// console.log('ignore-system-css value:', useSystemCSS);

			// if (elm.tagName === 'BUTTON') {
			// 	if (useSystemCSS === null || useSystemCSS === 'true') {
			// 		elm.classList.add('__azuos-button-large');
			// 	} if (useSystemCSS === 'false') {
			// 		console.log(useSystemCSS)
			// 	}
			// }

			elm.setAttribute("codename", codename);
			if (!manualIsElementOverwrite) {
				elm.setAttribute("isElement", "");
			}
			resolve(elementObject);

			// console.log(elm.classList)
			if (elm.tagName === 'BUTTON' && elm.classList.length === 0) {
				elm.classList.add('__azuos-button-small');
			}
		});
	},
	get: (codename, returnAsJSON = false) => {
		const elm = document.querySelector(`[codename="${codename}"]`);
		
		if (!elm) {
			return returnAsJSON ? { element: null, hasAttribute: false } : [null, false];
		}
		
		const hasAttr = elm.hasAttribute("isElement");
		
		return returnAsJSON ? { element: elm, hasAttribute: hasAttr } : [elm, hasAttr];
	}
};

const math = {
	gcd: (a, b) => {
		while (b !== 0) {
			let temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	},

	isClose: (a, b, rel_tol = 1e-9, abs_tol = 0.0) => {
		return Math.abs(a - b) <= Math.max(rel_tol * Math.max(Math.abs(a), Math.abs(b)), abs_tol);
	},

	factorial: (n) => {
		if (n === 0 || n === 1) return 1;
		return n * math.factorial(n - 1);
	},

	combinations: (n, r) => {
		return math.factorial(n) / (math.factorial(r) * math.factorial(n - r));
	},

	permutations: (n, r) => {
		return math.factorial(n) / math.factorial(n - r);
	},

	lcm: (a, b) => {
		return (a * b) / math.gcd(a, b);
	},

	copysign: (x, y) => {
		return Math.abs(x) * Math.sign(y);
	},

	product: (arr) => {
		return arr.reduce((acc, val) => acc * val, 1);
	},

	hypot: (...args) => {
		return Math.sqrt(args.reduce((sum, val) => sum + val ** 2, 0));
	},

	distance: (point1, point2) => {
		if (point1.length !== point2.length) throw new Error("Points must have the same dimension.");
		return Math.sqrt(point1.reduce((sum, _, i) => sum + (point1[i] - point2[i]) ** 2, 0));
	},
	erf: (x) => {
		const sign = Math.sign(x);
		const absX = Math.abs(x);
		const t = 1 / (1 + 0.3275911 * absX);
		const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
		const poly = t * (a1 + t * (a2 + t * (a3 + t * (a4 + t * a5))));
		return sign * (1 - poly * Math.exp(-absX * absX));
	},
	circleSurfaceArea: (radius) => {
		return Math.pow(radius, 2) * Math.PI;
	},
	circleCircumference: (diameter) => {
		return diameter * Math.PI;
	},
	pyramidVolume: (baseLength, height) => {
		const baseArea = baseLength * baseLength;
		return (1/3) * baseArea * height;
	},
	pyramidSurfaceArea: (baseLength, sideLength) => {
		// Assuming a square base pyramid
		const baseArea = baseLength * baseLength;
		const slantHeight = Math.sqrt(Math.pow(sideLength/2, 2) + Math.pow(height, 2)); // height needs to be passed as an argument
		const lateralArea = 2 * baseLength * slantHeight;
		return baseArea + lateralArea;
	},
	sphereVolume: (radius) => {
		return (4/3) * Math.PI * Math.pow(radius, 3);
	},
	sphereSurfaceArea: (radius) => {
		return 4 * Math.PI * Math.pow(radius, 2);
	},
	cylinderVolume: (radius, height) => {
		return Math.PI * Math.pow(radius, 2) * height;
	},
	cylinderSurfaceArea: (radius, height) => {
		return 2 * Math.PI * radius * (radius + height);
	},
	coneVolume: (radius, height) => {
		return (1/3) * Math.PI * Math.pow(radius, 2) * height;
	},
	coneSurfaceArea: (radius, height) => {
		const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
		return Math.PI * radius * (radius + slantHeight);
	},
	cuboidVolume: (length, width, height) => {
		return length * width * height;
	},
	cuboidSurfaceArea: (length, width, height) => {
		return 2 * (length * width + length * height + width * height);
	}
};


const system = {
//     version: () => {
//         return 8;
//     },
//     name: () => {
//         return "AzuOS";
//     },
//     copyright: () => {
//         return "Copyright @ AzuSystem 2024";
//     },
//     maker: () => {
//         return "AzuSystem";
//     },
	screen: () => {
		const screen = window.screen;
		const divisor = math.gdc(screen.width, screen.height);
		const widthRatio = screen.width / divisor;
		const heightRatio = screen.height / divisor;

		return {
			"width": screen.width,
			"height": screen.height,
			"colorDepth": screen.colorDepth,
			"orientation": screen.orientation,
			"pixelDepth": screen.pixelDepth,
			"aspectRatio": {
				"width": widthRatio,
				"height": heightRatio
			}
		}
	}
}

const webwin = {
	create: (title, url, codename) => {
		return new Promise((resolve) => {
			// Default Values if none provided
			const properties = {
				title,
				url,
				codename,
				width: 850,
				height: 480,
				x: 100,
				y: 100,
				max: false,
				min: false,
				autosize: false,
				fullscreen: false,
			};

			const webwin = {
				title: (titletext) => {
					title = titletext;
					return webwin;
				},
				url: (urltext) => {
					url = urltext;
					return webwin;
				},
				setWidth: (w) => {
					properties.width = w;
					return webwin;
				},
				setHeight: (h) => {
					properties.height = h;
					return webwin;
				},
				setX: (xpos) => {
					properties.x = xpos;
					return webwin;
				},
				setY: (ypos) => {
					properties.y = ypos;
					return webwin;
				},
				setMax: (maximize) => {
					properties.max = maximize;
					return webwin;
				},
				setMin: (minimize) => {
					properties.min = minimize;
					return webwin;
				},
				setAutosize: (auto) => {
					properties.autosize = auto;
					return webwin;
				},
				setFullscreen: (fullscreenapp) => {
					properties.fullscreen = fullscreenapp;
					return webwin;
				},
				confirm: () => {
					win.create(properties.title, properties.codename).then(win => win
						.setWidth(properties.width)
						.setHeight(properties.height)
						.setX(properties.x)
						.setY(properties.y)
						.setMax(properties.max)
						.setMin(properties.min)
						.setAutosize(properties.autosize)
						.setFullscreen(properties.fullscreen)
						.confirm()
					);
					element.create('iframe', '', 'webframe').then(elm => elm
						.window(properties.codename)
						.width("100%")
						.height("100%")
						.radius("12px")
						.source(url)
						.attribute('allowfullscreen', 'true')
						.attribute('sandbox')
					);
				}
			}
			resolve(webwin);
		});
	}
}

const strings = {
	greeting: () => {
		const currentHour = new Date().getHours();
		let greeting;

		if (currentHour >= 5 && currentHour < 12) {
			greeting = "Good morning";
		} else if (currentHour >= 12 && currentHour < 18) {
			greeting = "Good afternoon";
		} else if (currentHour >= 18 && currentHour < 22) {
			greeting = "Good evening";
		} else {
			greeting = "Good night";
		}
		return greeting;
	},
	trim_to_length: (str, maxLength) => {
		if (str.length > maxLength) {
			return str.slice(0, maxLength) + "..."; // Keep only the first `maxLength` characters
		}
		return str; // Return the string unchanged if within the limit
	}
}

const audio = {
	load: (file) => {
		return new Audio(file);
	},
	setProgress: (audiosource, progress) => {
		audiosource.currentTime = progress;
	}
}

const soundsPath = `assets/sounds/`;
const sounds = {
	debugsound: () => {
		let sfx = audio.load(soundsPath + "Different.mp3");
		sfx.play();
	},
	play: (sound) => {
		let sfx = audio.load(soundsPath + sound + ".mp3");
		sfx.play();
	}
}