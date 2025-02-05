// ==UserScript==
// @name YouTube Userscript wrapper
// @description Static wrapper for my other scripts, since userscript plugin of cromite doesn't support URLs, but only files
// @version	20250205d.1
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==
// for greasemonkey instead of violentmonkey:
// @run-at document-end

const links = [
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYT.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTHomepageMobile.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTRecommendedMobile.js',
  'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/DisableYTShortsMobile.js',
];;

window.trustedTypes.createPolicy('default', {
    createHTML: str => str,
    createScriptURL: str => str,
    createScript: str => str,
});

console.log('Wrapper: healthy');
// thx llm i hope no bug
(async function loadScripts() {
  console.log('Wrapper: body loaded, fetching other scripts');

  for (const url of links) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Wrapper: Failed to load ${url}: ${response.status}`);
        continue;
      }
      const scriptText = await response.text();
      eval(scriptText); // bam
      console.log(`Wrapper: Loaded script: ${url}`);
    } catch (error) {
      console.log(`Wrapper: Error loading script ${url}:`, error);
    }
  }
  console.log('Wrapper: all loaded');
})();
