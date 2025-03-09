/*
    General API for AzuOS (Base Code)
    Written by: MTSyntho @ AzuSystem 2024
    This code creates the 'azuapi', other api scripts will extend upon it
*/

const azuapi = {
    call: (name, args) => {
        return new Promise((resolve) => {
            resolve({
                name,
                args
            });
        });
    }
};

// Loads all API scripts
loadLibrary('api:notification.js');
loadLibrary('api:uuid.js');
loadLibrary('api:systeminfo.js')
loadLibrary('api:hwinfo.js')
loadLibrary('api:xorg.js')
loadLibrary('api:shellcommand.js')