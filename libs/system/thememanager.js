/*
    Theme Manager for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/

function loadTheme(file) {
    const existing = document.querySelector(`link[href="themes/${file}"]`);
    if (!existing) {
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = `themes/${file}`;
        link.setAttribute('theme', '')

        document.head.appendChild(link);
        console.log(`[Theme Manager] Imported '${file}'`);
    } else {
        console.error(`[Theme Manager] Failed to import '${file}': Theme already loaded.`);
    }
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

function unloadAllThemes() {
    const themes = document.querySelectorAll('link[theme]');
    themes.forEach(theme => theme.remove());

    console.log('[Theme Manager] Unloaded All Themes')
}