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
                    elm.style.backgroundClip = cliprepeat;
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
            elm.setAttribute("codename", codename);
			resolve(elementObject);
		});
	}
};