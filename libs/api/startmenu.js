/*
	Start Menu Library for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

var startmenu = document.getElementById('start-menu');

azuapi.call = (originalCall => {
	return function (name, args) {
		if (name === 'startmenu') {
			if (args === true || args === 'true') {
				startmenu.classList.remove('__azuos-start-menu-out');		
				startmenu.classList.add('__azuos-start-menu-in');
			} else if (args === false || args === 'false') {
				startmenu.classList.remove('__azuos-start-menu-in');
				startmenu.classList.add('__azuos-start-menu-out');				
			} else if (args === 'toggle' || args === null || args === '') {

			}
		}
		
		// Default behavior for other cases, call the original (assumed synchronous)
		return originalCall(name, args);
	};
})(azuapi.call);