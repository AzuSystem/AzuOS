if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  fetch('../applications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      console.log(data); // Use the JSON data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
} else if (window.location.protocol === 'file:') {
  console.log('AzuOS Application Center cannot list applications when ran without a local server.');
  const launchwarn = document.createElement('p');
  launchwarn.textContent = 'Please run AzuOS on a local web server, this is required due to the CORS Policy on reading local files.';
  document.getElementById('apps').appendChild(launchwarn);
} else {
  fetch('../applications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      console.log(data); // Use the JSON data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}