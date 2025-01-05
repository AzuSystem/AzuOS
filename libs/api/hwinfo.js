/*
	Hardware Info Library for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

azuapi.call = (originalCall => {
	return function (name, args) {
		if (name === 'hwinfo' || name === 'hardware') {
			if (args === 'cpu') {
				return pywebview.api.cpu_data();
			} else if (args === 'memory' || args === 'ram') {
				return pywebview.api.memory_data();
			} else if (args === 'drive' || args === 'disk') {
				return pywebview.api.drive_data();
			}
		}
		
		// Default behavior for other cases, call the original (assumed synchronous)
		return originalCall(name, args);
	};
})(azuapi.call);