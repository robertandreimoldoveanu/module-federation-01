window.addEventListener('load', async () => {
	console.log('loaded');
	document.write('index.js loaded');

	// when we import the remoteOne module, the local token gets overridden by the remote one
	// if we would've imported the token before importing the remoteOne module, the local token would've been used
	const remoteModule = await import('app2/remoteOne');

	const token2 = await import('myToken');

	console.log('[HOST-TOKEN]: ' + token2.value);

	document.write('Remote loaded: ' + JSON.stringify(remoteModule));
});

// function loadComponent(scope, module) {
// 	return async () => {
// 		await __webpack_init_sharing__('default');
// 		const container = window[scope];
// 		await container.init(__webpack_share_scopes.default);
// 		const factory = await window[scope].get(module);
// 		const Module = factory();
// 		return Module;
// 	};
// }


