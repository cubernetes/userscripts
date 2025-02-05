// ==UserScript==
// @name YouTube Userscript wrapper
// @description Static wrapper for my other scripts, since userscript plugin of cromite doesn't support URLs, but only files
// @version	20250205d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

const links = [
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js',
];

// thx llm i hope no bug
(async function loadScripts() {
  console.log('body loaded, fetching other scripts');
  
  for (const url of links) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Failed to load ${url}: ${response.status}`);
        continue;
      }
      const scriptText = await response.text();
      eval(scriptText); // bam
      console.log(`Loaded script: ${url}`);
    } catch (error) {
      console.error(`Error loading script ${url}:`, error);
    }
  }
  console.log('all loaded');
})();
