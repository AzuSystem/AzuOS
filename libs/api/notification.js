/*
	Notification API of AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

const azuapi = {
	call: (name, description) => {
		return new Promise((resolve) => {
			// Default Values if none provided
            const properties = {
                name,
                description
            };

			const azuapi = {
				name,
                description,
                title: (title) => {
                    properties.name = title;
                    return azuapi;
                },
                description: (desc) => {
                    properties.description = desc;
                    return azuapi;
                },
                confirm: () => {
                    // console.log(properties.name)
                    // console.log(properties.description)
                    loadPackage('apps:desktop/notification.js', `${properties.name}||${properties.description}`);
                }
			};
			resolve(azuapi);
		});
	}
};