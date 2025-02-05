// ==UserScript==
// @name YouTube Userscript wrapper
// @description Static wrapper for my other scripts, since userscript plugin of cromite doesn't support URLs, but only files
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js
// ==/UserScript==

console.log('Dispatcher');
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js
