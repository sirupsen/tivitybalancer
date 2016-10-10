chrome.browserAction.onClicked.addListener(function(activeTab){
  // TODO Make sure I hit a certain a day somehow
  // TODO Put this on Github
  // TODO Produce a chart of how well I'm doing..?
 
  chrome.storage.sync.get({
    urls: [
      "https://ted.com",
      "https://thebrowser.com",
      "https://pocket.co"
    ],
    visits: {},
  }, function(settings) {
    var page = settings.urls[Math.floor(Math.random() * settings.urls.length)]


    settings.visits[page] = settings.visits[page] || []
    settings.visits[page].push(new Date())
    chrome.storage.sync.set({ visits: settings.visits })

    chrome.tabs.create({ url: page });
  });
});
