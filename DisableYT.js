// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// ==/UserScript==

console.log('Running DisableYT');

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

loadScript('https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/Runner.js', ()=>{
	RunOnceBody(()=>{
		console.log('DisableYT callback running');
		setTimeout(()=>document?.body.hidden=false,20000);
		document?.body.hidden=true;
	});
});
