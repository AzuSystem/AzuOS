/*
    Theme Manager for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/

// function loadTheme(file) {
//     var link = document.createElement('link');
//     link.rel = 'stylesheet'; 
//     link.type = 'text/css';
//     link.href = `themes/${file}`;

//     document.head.appendChild(link);
//     console.log(`[Theme Manager] Imported '${file}'`)
// }

function loadTheme(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `themes/${file}`;

    // Function to attempt to load the theme
    function tryLoad(retryCount) {
        link.onload = function () {
            document.head.appendChild(link);
            console.log(`[Theme Manager] Imported '${file}'`);
        };

        link.onerror = function () {
            if (retryCount > 0) {
                console.log(`[Theme Manager] Import Failed '${file}', Retrying... (${retryCount}/7)`);
                setTimeout(function () {
                    tryLoad(retryCount - 1);
                }, 20);
            } else {
                console.error(`[Theme Manager] Import Failed '${file}' after 7 attempts.`);
            }
        };
    }

    // Start the first attempt
    tryLoad(7);
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