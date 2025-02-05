// ==UserScript==
// @name Disable YouTube for 20 seconds (Feb 2025)
// @description Disables the entire html of YouTube for 20 seconds, then shows it again
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

setTimeout(()=>document.body.hidden=false,20000);
document.body.hidden=true
