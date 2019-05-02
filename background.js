// listens for when the icon for the extension is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript({
		file: 'inject.js'
	});
});
