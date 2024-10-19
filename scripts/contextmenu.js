/*
	Context Menu Library for AzuOS
	Written by: MTSyntho @ AzuSystem 2024 (Mostly by ChatGPT)
*/

// test variable (worked)
// const ctxt = {
//     button1: 'console.log("btn1");',
//     button2: 'console.log("btn2");',
//     button3: 'console.log("btn3");',
//     'azu is cool': 'console.log("azuos is cool");'
// };

// Parses external variables from other scripts into this script to be used.
function ctxtLib(obj) {
    window.__azuosctxtvar = obj;
}

// ctxtLib(ctxt);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    if (event.button === 2) {
        const contextmenu = document.createElement('div');
        contextmenu.id = 'contextmenu';
        contextmenu.className = 'contextmenu';
        document.body.appendChild(contextmenu); // Append to body to avoid nested issues

        // Iterate over all properties of the __azuosctxtvar object
        for (let key in window.__azuosctxtvar) {
            if (window.__azuosctxtvar.hasOwnProperty(key)) {
                var button = document.createElement('button');
                button.className = 'contextmenubtn';
                button.textContent = key;
                button.onclick = new Function(window.__azuosctxtvar[key]); // Execute the function directly
                button.addEventListener('click', closeMenu); // Close menu when button is clicked
                contextmenu.appendChild(button);
                contextmenu.style.zIndex = Number.MAX_SAFE_INTEGER;
            }
        }

        // Calculate cursor position
        const cursorX = event.clientX;
        const cursorY = event.clientY;

        // Adjust position if menu goes beyond right edge of the screen
        const menuWidth = contextmenu.offsetWidth;
        const menuHeight = contextmenu.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let menuX = cursorX;
        let menuY = cursorY;

        if (menuX + menuWidth > screenWidth) {
            menuX = screenWidth - menuWidth - 10; // Adjusted 10 pixels from right edge
        }

        if (menuY + menuHeight > screenHeight) {
            menuY = screenHeight - menuHeight - 10; // Adjusted 10 pixels from bottom edge
        }

        // Set menu position
        contextmenu.style.left = menuX + 'px';
        contextmenu.style.top = menuY + 'px';

        // Function to close the menu
        function closeMenu() {
            contextmenu.remove();
        }

        // Close context menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.contextmenu')) {
                contextmenu.remove();
            }
        });
    }
});


// thx 2 chatgtp 4 assistance <3