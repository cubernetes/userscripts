// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/WaitForBody.js
// ==/UserScript==

console.log('DisableYT running')
RunOnce(()=>{
	console.log('DisableYT callback running')
	setTimeout(()=>document.body.hidden=false,20000);
	document.body.hidden=true
	console.log('DisableYT callback done: ', document.body === undefined)
});
