// ==UserScript==
// @name YouTube Userscript wrapper
// @description Static wrapper for my other scripts, since userscript plugin of cromite doesn't support URLs, but only files
// @version	20250205d.2
// @run-at document-body
// @include	*://youtube.com/*
// @include	*://*.youtube.com/*
// ==/UserScript==

// if using greasemonkey instead of violentmonkey (e.g. for cromite):
// @run-at document-end

const links_link = 'https://raw.githubusercontent.com/cubernetes/userscripts/refs/heads/main/Links.js'

window.trustedTypes.createPolicy('default', {
    createHTML: str => str,
    createScriptURL: str => str,
    createScript: str => str,
});

window.trustedTypes.createPolicy('script', {
    createHTML: str => str,
    createScriptURL: str => str,
    createScript: str => str,
});

window.trustedTypes.createPolicy('script-src', {
    createHTML: str => str,
    createScriptURL: str => str,
    createScript: str => str,
});

console.log('Wrapper: healthy');
(async function loadScripts() {
  console.log('Wrapper: body loaded, fetching other scripts');

  const link_resp = await fetch(links_link);
  if (!link_resp.ok) {
    console.log(`Wrapper: Failed to load links from ${links_link}: ${link_resp.status}`);
    return;
  }
  const links = await link_resp.text().split(/\r?\n/);
  console.log(`Got links: ${links}`);
  for (const url of links) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Wrapper: Failed to load ${url}: ${response.status}`);
        continue;
      }
      const scriptText = await response.text();
      eval(scriptText);
      console.log(`Wrapper: Loaded script: ${url}`);
    } catch (error) {
      console.log(`Wrapper: Error loading script ${url}: ${error}`);
    }
  }
  console.log('Wrapper: all loaded');
})();
