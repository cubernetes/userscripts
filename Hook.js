// ==UserScript==
// @name Userscript hook
// @description Single require to another file that requires arbtrary amount of files. Useful when client script can't change easily (i.e. scripts can only be added via files, as in cromite)
// @version	20250205d.2
// @run-at document-end
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// @grant GM.addElement
// ==/UserScript==

// this is a working header for greasemonkey-style user scripts
// use document-body for violentmonkey scripts

console.log('Running Hook')

GM.addElement('script', {
  src: 'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/Dispatcher.js?ts='+(+new Date()),
  type: 'text/javascript'
});

GM.addElement('script', {
	textContent: 'console.log("Also works for hook");'
});
