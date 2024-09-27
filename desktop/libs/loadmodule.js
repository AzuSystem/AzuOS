/*
	Dynamic Loading of Javascript Files
	Written by: Someone on StackOverflow - https://stackoverflow.com/a/950146
*/

function loadPackage(file) {
	var script = document.createElement("script");
	script.src = `pkgs/${file}`;
	document.head.appendChild(script);

	console.log(`[Package Loading] Imported '${file}'`)
};

function loadLibrary(file) {
	var script = document.createElement("script");
	script.src = `libs/${file}`;
	document.head.appendChild(script);

	console.log(`[Library Loading] Imported '${file}'`)
};

function loadJS(file) {
	var script = document.createElement("script");
	script.src = file;
	document.head.appendChild(script);

	console.log(`[Javascript Loading] Imported '${file}'`)
};

function loadCSS(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = file;

    document.head.appendChild(link);
}

// Generate by ChatGTP
function unloadCSS(file) {
    const link = document.querySelector(`link[href="${file}"]`);
    if (link) {
        link.remove();
        console.log(`Removed CSS file: ${file}`);
    } else {
        console.log(`CSS file not found: ${file}`);
    }
}