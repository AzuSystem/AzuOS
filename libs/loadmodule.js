/*
	Dynamic Loading of Javascript Files
	Written by: Someone on StackOverflow - https://stackoverflow.com/a/950146
*/

function loadPackage(file) {
	var script = document.createElement("script");
	script.src = `pkgs/${file}`;
	document.head.appendChild(script);

	console.log(`[Package Injector] Imported '${file}'`)
};

function loadLibrary(file) {
	var script = document.createElement("script");
	script.src = `libs/${file}`;
	document.head.appendChild(script);

	console.log(`[Library Injector] Imported '${file}'`)
};

function loadJS(file) {
	var script = document.createElement("script");
	script.src = file;
	document.head.appendChild(script);

	console.log(`[Javascript Injector] Imported '${file}'`)
};

function unloadPackage(file) {
    const script = document.querySelector(`script[src="pkgs/${file}"]`);
    if (script) {
        script.remove();
        console.log(`[Package Injector] Unloaded '${file}'.`);
    } else {
        console.error(`[Package Injector] Can't locate '${file}' for unloading.`);
    }
}

function loadCSS(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = file;

    document.head.appendChild(link);
    console.log(`[CSS Injector] Imported '${file}'`)
}

// Generate by ChatGTP
// However I still can't figure it out
function unloadCSS(file) {
    const link = document.querySelector(`link[href="${file}"]`);
    if (link) {
        link.remove();
        console.log(`[CSS Injector] Removed CSS file: ${file}`);
    } else {
        console.error(`[CSS Injector] CSS file not found: ${file}`);
    }
}