/*
	System Info Library for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

azuapi.call = (originalCall => {
	return function (name, args) {
		if (name === 'sysinfo') {
			if (args === 'version') {
				return 'Alpha 8';
			} else if (args === 'os') {
				return 'AzuOS';
			} else if (args === 'developer' || args === 'author') {
				return 'AzuSystem';
			}
		}
		
		// Default behavior for other cases, call the original (assumed synchronous)
		return originalCall(name, args);
	};
})(azuapi.call);
