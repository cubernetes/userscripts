// ==UserScript==
// @name Disable YouTube Disable Shorts Mobile (Jan 2025)
// @description Hides the shorts on the mobile version of YouTube
// @version 20250109d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// @grant GM.xmlHttpRequest
// @downloadURL https://timo.one/us/DisableYTShortsMobile.js
// ==/UserScript==

console.log('Running DisableYTShorts');

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

const base = GM.info.script.downloadURL.split('/').slice(0, -1).join('/');
loadScript(base + '/Runner.js', ()=>{
	RunForever(()=>{
		console.log('DisableYTShorts callback running');

		// remove shorts categorically
		document.querySelector('#player-shorts-container')?.remove();

		// this one disables all sorts of distractions on the home page (maybe a bit too much)
		document.querySelectorAll('.rich-section-content').forEach(e=>e.remove());

		// this one disables all sorts of distractions on the search results
		document.querySelectorAll('ytm-reel-shelf-renderer').forEach(e=>e.remove());
	});
});
