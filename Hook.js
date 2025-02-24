// ==UserScript==
// @name Userscript hook
// @description Loads another script that then loads other scripts. Useful when client script can't change easily (i.e. scripts can only be added via files, as in cromite)
// @version	20250205d.14
// @run-at document-end
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// @downloadURL https://timo.one/us/Hook.js
// ==/UserScript==

console.log('Running Hook');

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

base = GM.info.script.downloadURL.split('/').slice(0, -1).join('/');
loadScript(base + '/Dispatcher.js');
