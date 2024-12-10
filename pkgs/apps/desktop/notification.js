/*
	Notification Component of AzuOS Desktop
	Written by: MTSyntho @ AzuSystem 2024
*/

const notificationcss = (`
  background-color: hsla(270, 0%, 12%, 75%);
  outline: 1px solid rgba(255, 255, 255, 0.125);
  position: fixed;
  bottom: 60px;
  right: 0px;
  width: 400px;
  margin: 15px;
  height: auto;
  padding: 17px;
  box-shadow: 0 0 10px 2px #000000cc;
  display: flex;
  z-index: 50;
  backdrop-filter: blur(16px) saturate(200%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-height: 270px;
  transition-duration: 0.2s;
`)

const notificationclose = (`
  position: fixed;
  right: 0;
  top: 0;
  margin: 17px;
  margin-top: 14px;
  background: none;
  width: 30px;
  height: 30px;
  border: 0px;
  border-radius: 12px;
  transition-duration: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`)

const scriptarguments = document.currentScript.getAttribute('script-arguments');
const notificationname = scriptarguments.split('||')[0];
const notificationdesc = scriptarguments.split('||')[1];

element.create('div', '', 'notification').then(elm => elm
	.css(notificationcss)
  .class('__azuos-notification-in')
	.parent('desktop')
);

element.create('p', notificationname, '').then(elm => elm
	.textshadow('0px 4px 5px #00000050')
	.parent('notification')
	.margin(0)
);

element.create('p', notificationdesc, '').then(elm => elm
	.textshadow('0px 4px 5px #00000050')
	.parent('notification')
	.opacity(0.5)
	.margin(0)
);

// Notification Close Button
element.create('button', '', 'notification-close').then(elm => elm
	.css(notificationclose)
	.parent('notification')
);

element.create('img', '', '').then(elm => elm
	.src('assets/icons/close.svg')
	.width(25)
	.height(25)
	.dropshadow('0px 4px 5px #00000050')
	.parent('notification-close')
);