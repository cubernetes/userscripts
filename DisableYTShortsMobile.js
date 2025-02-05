// ==UserScript==
// @name Disable YouTube Disable Shorts Mobile (Jan 2025)
// @description Hides the shorts on the mobile version of YouTube
// @version 20250109d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

setInterval(()=>{

// remove shorts categorically
document.querySelector('#player-shorts-container')?.remove();

// this one disables all sorts of distractions on the home page (maybe a bit too much)
document.querySelectorAll('.rich-section-content').forEach(e=>e.remove());

// this one disables all sorts of distractions on the search results
document.querySelectorAll('ytm-reel-shelf-renderer').forEach(e=>e.remove());

}, 200)
