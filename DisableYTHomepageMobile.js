// ==UserScript==
// @name YouTube Hide homepage videos (Jan 2025)
// @description Disables the homepage videos on the mobile version of YouTube
// @version	20250109d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

setInterval(()=>document.querySelector('ytm-browse')?.remove(),200)
