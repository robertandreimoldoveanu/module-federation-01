window.addEventListener('load', async () => {
	console.log('This will do some fancy stuff!');
	document.write('remote has loaded!');
	const token = await import('myToken');
	console.log('[TOKEN]: ' + token.value);
});

module.exports = {
	myVar: 'this is exported from a remote file!',
	token: import('./token'),
}
