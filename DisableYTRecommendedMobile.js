// ==UserScript==
// @nameYouTube Hide recommended videos (Jan 2025)
// @description Disables the recommended videos on the mobile version of YouTube
// @version	20250109d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// ==/UserScript==

console.log('Running DisableYTRecommended');

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

const url = window.location;
const base = url.protocol + '//' + url.host + url.pathname.split('/').slice(0, -1).join('/');
loadScript(base + '/Runner.js', ()=>{
	RunForever(()=>{
		console.log('DisableYTRecommended callback running');
		document.querySelectorAll('[section-identifier="related-items"]').forEach(e=>e.remove();
	});
});
