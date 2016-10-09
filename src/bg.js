chrome.browserAction.onClicked.addListener(function(activeTab){
  // TODO Make sure I hit a certain a day somehow
  // TODO Put this on Github
  // TODO Produce a chart of how well I'm doing..?
 
  chrome.storage.sync.get({
    urls: [],
  }, function(settings) {
    var page = settings.urls[Math.floor(Math.random() * settings.urls.length)]
    chrome.tabs.create({ url: page });
  });
});
