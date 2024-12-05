/*
	Notification API of AzuOS Desktop
	AzuSystem 2024 (ChatGPT ;-;)
*/

azuapi.call = (originalCall => {
  return function (name, args) {
    return originalCall(name, args).then(api => {
      api.title = (title) => {
        api.name = title;
        return api;
      };
      api.description = (desc) => {
        api.args = desc;
        return api;
      };
      api.confirm = () => {
        loadPackage('apps:desktop/notification.js', `${api.name}||${api.args}`);
      };
      return api;
    });
  };
})(azuapi.call);
