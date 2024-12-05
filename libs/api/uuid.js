/*
    UUID Library for AzuOS
    AzuSystem 2024 (ChatGPT ;-;)
*/

// Extend azuapi to handle UUID generation and return UUID directly
azuapi.call = (originalCall => {
  return function (name, args) {
    if (name === 'uuid') {
      // Generate and return a UUID immediately, no promise
      const generateUUID = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      };
      return generateUUID();  // Directly return the UUID string
    }

    // Default behavior for other cases, continue using the original call
    return originalCall(name, args);
  };
})(azuapi.call);
