function waitForBody(callback) {
	'use strict';

	let observer = new MutationObserver(()=>{
		if (document.body) {
			callback();
			observer.disconnect();
		}
	});
	observer.observe(document.documentElement, {childList: true});
}
