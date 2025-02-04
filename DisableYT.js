// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @namespace cubernetes
// @version	20250205d
// @homepageURL	http://127.0.0.1/noexist.js
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @copyright Public Domain
// @downloadURL http://127.0.0.1/noexist.js
// @updateURL http://127.0.0.1/noexist.js
// ==/UserScript==

setTimeout(()=>document.body.hidden=false,20000);

(()=>{let i = 0;let id=setInterval(()=>{++i;if(i>20)clearInterval(id);document.body.hidden=true},100)})()
