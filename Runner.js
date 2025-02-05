// function RunForever(outerCallback) {
// 	// https://stackoverflow.com/a/14570614
// 	const observeDOM = (()=>{
// 		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
// 
// 		return (obj, callback)=>{
// 			if (!obj || !obj.nodeType === true) {
// 				return;
// 			}
// 			if (MutationObserver) {
// 				const obs = new MutationObserver((mutations)=>{
// 					if (mutations[0].addedNodes.length) {
// 						callback(mutations[0]);
// 						obs.disconnect();
// 					}
// 				});
// 				obs.observe(obj, {childList: true, subtree: true});
// 			} else if (window.addEventListener) {
// 				obj.addEventListener('DOMNodeInserted', callback, false);
// 			}
// 		}
// 	})();
// 
// 	observeDOM(document, ()=>outerCallback());
// }

function RunForever(callback) {
	setInterval(()=>{
		callback();
	}, 200);
}

function RunOnceBody(callback) {
	let id = setInterval(()=>{
		if (document.body) {
			callback();
			clearInterval(id);
		}
	}, 200);
}
