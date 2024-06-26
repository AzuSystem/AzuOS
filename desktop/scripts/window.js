function newWindow(title, maximized, url) {
  new WinBox({
      title: title,
      max: maximized,
      url: url,
      root: document.querySelector("desktop"),
      overflow: true
  });
}

function newWindowAZML(title, maximized, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch HTML content');
      }
      return response.text(); // Assuming the content is plain text/html
    })
    .then(htmlContent => {
      new WinBox({
        title: title,
        max: maximized,
        root: document.querySelector("desktop"),
        html: htmlContent,
        overflow: true
      });
    })
    .catch(error => {
      console.error('Error fetching or creating WinBox:', error);
    });
}