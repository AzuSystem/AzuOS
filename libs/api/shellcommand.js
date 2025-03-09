/*
		Execute Command Library for AzuOS
		Execute Shell Commands from AzuOS
		AzuSystem 2025
*/

azuapi.call = (originalCall => {
	return function (name, args) {
		if (name === 'execshell') {
			return pywebview.api.exec_command(args, false)
		} else if (name === 'execguishell') {
			return pywebview.api.exec_command(args, true)

		webwin.create(name, "http://localhost:48500", name + 'win').then(webwin => webwin
		    .setWidth(1280*0.75)
		    .setHeight(720*0.75)
		    .confirm()
		);

		}

		// Default behavior for other cases, continue using the original call
		return originalCall(name, args);
	};
})(azuapi.call);
