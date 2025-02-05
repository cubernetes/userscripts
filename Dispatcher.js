// ==UserScript==
// @name Script dispatcher
// @description Should be required by a Hook. Allows for easy adding of more scripts
// @version	20250205d.3
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// ==/UserScript==

console.log('Running Dispatcher');

if (unsafeWindow)
	unsafeWindow.GM = GM;

function loadScript(url) {
	GM.xmlHttpRequest({
	  method: 'GET',
	  url: url+'?ts='+(+new Date()),
	  onload: (response)=>{
		alert(response.responseText)
		GM.addElement('script', {
		  textContent: response.responseText
		});
	  }
	})
}

loadScript('https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js');
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js
// https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js
