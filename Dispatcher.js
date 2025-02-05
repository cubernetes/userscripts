// ==UserScript==
// @name Script dispatcher
// @description Should be required by a Hook. Allows for easy adding of more scripts
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

console.log('Running Dispatcher');

GM_addElement('script', {
  src: 'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js?ts='+(+new Date()),
  type: 'text/javascript'
});

// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js
