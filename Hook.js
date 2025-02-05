// ==UserScript==
// @name Userscript hook
// @description Loads another script that then loads other scripts. Useful when client script can't change easily (i.e. scripts can only be added via files, as in cromite)
// @version	20250205d.6
// @run-at document-end
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// ==/UserScript==

console.log('Running Hook')

unsafeWindow.GM = GM;
function loadScript(url) {
	GM_xmlhttpRequest({
	  method: 'GET',
	  url: url+'?ts='+(+new Date()),
	  onload: (response)=>{
		GM_addElement('script', {
		  textContent: response.responseText
		});
	  }
	})
}

loadScript('https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/Dispatcher.js');
