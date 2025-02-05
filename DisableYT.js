// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/WaitForBody.js
// ==/UserScript==

console.log('Running DisableYTrunning')

// @grant GM.addElement
// @grant GM.xmlHttpRequest
//unsafeWindow.GM = GM;
//
//function loadScript(url) {
//	GM.xmlHttpRequest({
//	  method: 'GET',
//	  url: url+'?ts='+(+new Date()),
//	  onload: (response)=>{
//		alert(response.responseText)
//		GM.addElement('script', {
//		  textContent: response.responseText + '\n' + 
//		});
//	  }
//	})
//}

RunOnce(()=>{
	console.log('DisableYT callback running')
	setTimeout(()=>document.body.hidden=false,20000);
	document.body.hidden=true
	console.log('DisableYT callback done: ', document.body === undefined)
});









// stuff
function RunForever(outerCallback) {
	// https://stackoverflow.com/a/14570614
	const observeDOM = (()=>{
		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

		return (obj, callback)=>{
			if (!obj || !obj.nodeType === true) {
				return;
			}
			if (MutationObserver) {
				const obs = new MutationObserver((mutations)=>{
					if (mutations[0].addedNodes.length) {
						callback(mutations[0]);
						obs.disconnect();
					}
				});
				obs.observe(obj, {childList: true, subtree: true});
			} else if (window.addEventListener) {
				obj.addEventListener('DOMNodeInserted', callback, false);
			}
		}
	})();

	observeDOM(document, ()=>outerCallback());
}

function RunOnceBody(callback) {
	let id = setInterval(()=>{
		if (document.body) {
			callback();
			clearInterval(id);
		}
	}, 200);
}
