// ==UserScript==
// @nameYouTube Hide recommended videos (Jan 2025)
// @description Disables the recommended videos on the mobile version of YouTube
// @version	20250109d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

setInterval(()=>document.querySelectorAll('[section-identifier="related-items"]').forEach(e=>e.remove()),200)
