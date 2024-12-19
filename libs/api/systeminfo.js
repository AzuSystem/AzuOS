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
			} else if (args === 'display') {
		        const screen = window.screen;
		        const divisor = math.gdc(screen.width, screen.height);
		        const widthRatio = screen.width / divisor;
		        const heightRatio = screen.height / divisor;
				return {
		            "width": screen.width,
		            "height": screen.height,
		            "colorDepth": screen.colorDepth,
		            "orientation": screen.orientation,
		            "pixelDepth": screen.pixelDepth,
		            "aspectRatio": {
		                "width": widthRatio,
		                "height": heightRatio
		            }
		        }
			} else if (name === 'platinfo') {
				return pywebview.api.collect_platform_info();
			}
		}
		
		// Default behavior for other cases, call the original (assumed synchronous)
		return originalCall(name, args);
	};
})(azuapi.call);