// ==UserScript==
// @name Script dispatcher
// @description Should be required by a Hook. Allows for easy adding of more scripts
// @version	20250205d.3
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM_addElement
// @grant GM_xmlhttpRequest
// ==/UserScript==

console.log('Running Dispatcher');
console.log('Window', window);

function loadScript(url) {
	GM_xmlhttpRequest({
	  method: 'GET',
	  url: url+'?ts='+(+new Date()),
	  onload: (response)=>{
		alert(response.responseText)
		GM_addElement('script', {
		  textContent: response.responseText
		});
	  }
	})
}

loadScript('https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js');
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js
