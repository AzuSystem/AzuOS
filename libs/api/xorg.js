/*
		X11 Window Library for AzuOS
		AzuSystem 2024 (ChatGPT ;-;)
*/

azuapi.call = (originalCall => {
	return function (name, args) {
		if (name === 'xpra') {
			if (args === 'isPresent') {
				return pywebview.api.xpra_running()
			}
		} else (name === 'launchxpra') {
			pywebview.api.exec_xpra(args)
		}

		// Default behavior for other cases, continue using the original call
		return originalCall(name, args);
	};
})(azuapi.call);
