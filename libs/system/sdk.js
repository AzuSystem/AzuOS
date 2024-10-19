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
                    );
                }
			};
			resolve(win);
		});
	}
};

const element = {
	create: (type, innerHTML, codename) => {
		return new Promise((resolve) => {
			const elm = document.createElement(type);
			elm.innerHTML = innerHTML;

			const elementObject = {
				codename,
				element: elm,
				class: (className) => {
					elm.classList.add(className);
					return elementObject;
				},
				id: (id) => {
					elm.id(id);
					return elementObject;
				},
				align: (alignment) => {
					elm.classList.add('__azuos-sdk-center');
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
                background: (color) => {
                    elm.style.background = color;
                    return elementObject;
                },
				window: (windowid) => {
					var parentWindow = document.querySelector('[codename]')
					parentWindow.querySelector('.wb-body').appendChild(elm);
					return elementObject;
				}
			};
			resolve(elementObject);
		});
	}
};