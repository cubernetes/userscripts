// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @version	20250205d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

setTimeout(()=>document.body.hidden=false,20000);
//(()=>{let i = 0;let id=setInterval(()=>{++i;if(i>20)clearInterval(id);document.body.hidden=true},100)})()
document.body.hidden=true
