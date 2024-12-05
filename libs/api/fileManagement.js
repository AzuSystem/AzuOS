/*
    File Manager API for AzuOS
    Written by: MTSyntho @ AzuSystem 2024
*/

// function fetch_directory(path) {
// 	result = pywebview.api.fetch_directory(path);
// 	return result
// 	console.log('[File Interaction API] Returned Directory Items')
// }

// to be adapted to new azuapi.call... function

async function fetch_directory(path) {
    try {
        const result = await pywebview.api.fetch_directory(path);
        console.log('[File Interaction API] Returned Directory Items', result);
        return result; // Return the result for further use
    } catch (error) {
        console.error("[File Interaction API] Error Occured while fetching directory: ", error);
        return null; // Return null or handle the error as needed
    }
}


// function fetch_file(path, type) {
// 	result = pywebview.api.fetch_file(type, path);
// 	return result
// }

async function fetch_file(path, type) {
    try {
        const result = await pywebview.api.fetch_file(type, path);
        if (type==='plain') {
        	console.log(`[File Interaction API] Returned Plain Text from '${path}'`)
        } else if (type==='path') {
        	console.log(`[File Interaction API] Returned File URL from '${path}'`)
        }
        return result; // Return the result if needed
    } catch (error) {
        console.error("[File Interaction API] Error Occured while fetching file: ", error);
        return null; // Or handle the error as needed
    }
}