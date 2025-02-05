// ==UserScript==
// @name Userscript hook
// @description Single require to another file that requires arbtrary amount of files. Useful when client script can't change easily (i.e. scripts can only be added via files, as in cromite)
// @version	20250205d.0
// @run-at document-end
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @require https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/Dispatcher.js
// ==/UserScript==

// this is a working header for greasemonkey-style user scripts
// use document-body for violentmonkey scripts

console.log('Hook ran.');
