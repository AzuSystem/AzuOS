/*
    Theme Manager for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/

function loadTheme(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = `themes/${file}`;

    document.head.appendChild(link);
    console.log(`[Theme Manager] Imported '${file}'`)
}

function unloadTheme(file) {
    const link = document.querySelector(`link[href="themes/${file}"]`);
    if (link) {
        link.remove();
        console.log(`[Theme Manager] Removed Theme: ${file}`);
    } else {
        console.error(`[Theme Manager] Theme not found: ${file}`);
    }
}