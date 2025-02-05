// ==UserScript==
// @name Script dispatcher
// @description Should be required by a Hook. Allows for easy adding of more scripts
// @version	20250205d.4
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// @downloadURL https://timo.one/us/Dispatcher.js
// ==/UserScript==

console.log('Running Dispatcher');

if (window.unsafeWindow)
	unsafeWindow.GM = GM;

function loadScript(url, callback) {
	GM.xmlHttpRequest({
	  method: 'GET',
	  url: url+'?ts='+(+new Date()),
	  onload: (response)=>{
		GM.addElement('script', {
			textContent: response.responseText + (callback === undefined ? '' : '\n(' + callback.toString() + ')();')
		});
	  }
	})
}

const base = GM_info.script.downloadURL.pathname.split('/').slice(0, -1).join('/');
loadScript(base + '/DisableYT.js');
loadScript(base + '/DisableYTHomepageMobile.js')
loadScript(base + '/DisableYTRecommendedMobile.js')
loadScript(base + '/DisableYTShortsMobile.js')
