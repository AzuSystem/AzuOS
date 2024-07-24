// Portions of this code is from TwinBox v10.0
// (C) datkat21, Envy ISDX 2024

function newWindow(title, maximized, url) {
  let obj = {};

  var winbox = new WinBox({
      title: title,
      max: maximized,
      url: url,
      root: document.querySelector("desktop"),
      overflow: true,
      onclose: function(){
        this.g.classList.add("windowClose");
        document.getElementById(winbox.id).classList.remove("opentask");
        document.getElementById(winbox.id).classList.add("closetask");

        setTimeout(() => {
          this.onclose = null;
          this.close();
          document.getElementById(winbox.id).remove();
        }, 200);

        return true;
      }
  });
  const tbtask = document.createElement('a');
  tbtask.id = winbox.id;
  tbtask.className = 'taskbartask opentask';
  tbtask.textContent = title;
  tbtask.onclick = function() {
      unminWindow(winbox.id);
  };
  document.getElementById('tbtasks').appendChild(tbtask);
  console.log("Window ID:", winbox.id);
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
        overflow: true,
      onclose: function(){
        this.g.classList.add("windowClose");
  
        setTimeout(() => {
          this.onclose = null;
          this.close();
        }, 500);
  
        return true;
        }
      });
    })
    .catch(error => {
      console.error('Error fetching or creating WinBox:', error);
    });
}

function AzuDialog(title, note, modal) {
  new WinBox({
      title: title,
      html: '<p>' + note + '</p>',
      root: document.querySelector("desktop"),
      overflow: true,
      modal: modal,
      class: 'azudialog',
      onclose: function(){
        this.g.classList.add("windowClose");
  
        setTimeout(() => {
          this.onclose = null;
          this.close();
        }, 200);
  
        return true;
        }
  });
};

function powerDialog() {
  new WinBox({
      title: 'Choose an Action',
      url: 'apps/shutdownDialog/index.html',
      root: document.querySelector("desktop"),
      overflow: true,
      modal: true,
      class: 'poweroff',
      width: 500,
      height: 400,
      onclose: function(){
        this.g.classList.add("windowClose");
  
        setTimeout(() => {
          this.onclose = null;
          this.close();
        }, 200);
  
        return true;
        }
  });
};

function wifiPanel() {
  new WinBox({
      title: 'Find a Network',
      url: 'apps/wifipanel/index.html',
      root: document.querySelector("desktop"),
      overflow: true,
      modal: true,
      class: 'wifipanel',
      width: 500,
      height: 400,
      onclose: function(){
        this.g.classList.add("windowClose");
  
        setTimeout(() => {
          this.onclose = null;
          this.close();
        }, 200);
  
        return true;
        }
  });
};