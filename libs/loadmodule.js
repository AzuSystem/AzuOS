/*
	Dynamic Loading of Javascript Files
	Written by: Someone on StackOverflow - https://stackoverflow.com/a/950146
*/

function loadPackage(packagePath, args = '') {
    const splitPath = packagePath.split(':', 2);
    const scriptPath = `pkgs/${splitPath[0]}/${splitPath[1]}`;
    // console.log(`result: ${splitPath}`)

    var script = document.createElement("script");
    script.src = scriptPath;

    script.setAttribute('script-arguments', args);
    try {
        script.setAttribute('process-id', azuapi.call('uuid'));
    } catch (error) {
        if (error instanceof ReferenceError) {
                console.error(`[Package Injector] Package will be imported without a Process ID (UUID API likely isn't loaded): ${error}`)
            } else {
                console.error(`[Package Injector] Package will be imported, however an error has occured upon assigning a Process ID to this package: ${error}`);
            }
        
    }

    document.head.appendChild(script);

    console.log(`[Package Injector] Imported '${scriptPath}'`);
}

function loadLibrary(libraryPath, args = '') {
    const splitPath = libraryPath.split(':', 2);
    const scriptPath = `libs/${splitPath[0]}/${splitPath[1]}`;
    // console.log(`result: ${libraryPath}`)

	var script = document.createElement("script");
	script.src = scriptPath;

    script.setAttribute('script-arguments', args);

	document.head.appendChild(script);

	console.log(`[Library Injector] Imported '${libraryPath}'`)
}

function loadPromisedPackage(packagePath, args = '') {
    return new Promise((resolve, reject) => {
        const splitPath = packagePath.split(':', 2);
        const scriptPath = `pkgs/${splitPath[0]}/${splitPath[1]}`;

        var script = document.createElement("script");
        script.src = `scriptPath`;
        
        script.onload = () => {
            console.log(`[Package Injector] Imported '${scriptPath}'`);
            resolve();
        };
        
        script.onerror = () => {
            console.error(`[Package Injector] Failed to import '${scriptPath}'`);
            reject(new Error(`[Package Injector] Failed to load package: '${scriptPath}'`));
        };

        script.setAttribute('script-arguments', args);

        document.head.appendChild(script);
    });
}

function loadPromisedLibrary(file, args = '') {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.src = `libs/${file}`;
        
        script.onload = () => {
            console.log(`[Library Injector] Imported '${file}'`);
            resolve();
        };
        
        script.onerror = () => {
            console.error(`[Library Injector] Failed to import '${file}'`);
            reject(new Error(`[Library Injector] Failed to load library: ${file}`));
        };

        script.setAttribute('script-arguments', args);
        
        document.head.appendChild(script);
    });
}



function loadJS(file) {
	var script = document.createElement("script");
	script.src = file;
	document.head.appendChild(script);

	console.log(`[Javascript Injector] Imported '${file}'`)
};

function unloadPackage(packagePath) {
    const splitPath = packagePath.split(':', 2);
    const scriptPath = `pkgs/${splitPath[0]}/${splitPath[1]}`;

    const script = document.querySelector(`script[src="${scriptPath}"]`);
    if (script) {
        script.remove();
        console.log(`[Package Injector] Unloaded '${scriptPath}'.`);
    } else {
        console.error(`[Package Injector] Can't locate '${scriptPath}' for unloading.`);
    }
}

function loadCSS(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = `stylesheets/${file}`;

    document.head.appendChild(link);
    console.log(`[CSS Injector] Imported '${file}'`)
}

function loadRawPathCSS(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = file;

    document.head.appendChild(link);
    console.log(`[CSS Injector] Imported '${file}' from Raw Path`)
}

// Generate by ChatGTP
function unloadCSS(file) {
    const link = document.querySelector(`link[href="stylesheets/${file}"]`);
    if (link) {
        link.remove();
        console.log(`[CSS Injector] Removed CSS file: ${file}`);
    } else {
        console.error(`[CSS Injector] CSS file not found: ${file}`);
    }
}

function unloadRawPathCSS(file) {
    const link = document.querySelector(`link[href="${file}"]`);
    if (link) {
        link.remove();
        console.log(`[CSS Injector] Removed CSS file: ${file}`);
    } else {
        console.error(`[CSS Injector] CSS file not found: ${file}`);
    }
}

function loadTheme(file) {
    const themesPath = "themes/";
    loadRawPathCSS(themesPath + file);
}

function unloadTheme(file) {
    const themesPath = "themes/";
    unloadRawPathCSS(themesPath + file);
}