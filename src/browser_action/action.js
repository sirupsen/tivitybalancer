function save_options() {
  var urls = document.getElementById('urls').value
  urls = urls.split("\n")

  chrome.storage.sync.set({
    urls: urls
  }, function() {
  })
}

function restore_options() {
  chrome.storage.sync.get({
    urls: [
      "https://ted.com",
      "https://thebrowser.com",
      "https://pocket.co"
    ]
  }, function(settings) {
    document.getElementById('urls').textContent = settings.urls.join("\n")
  })
}

function showVisits() {
  var string = ""

  chrome.storage.sync.get({
    visits: {}
  }, function(settings) {
    for (var page in settings.visits) {
      string += page + ": " + settings.visits[page].length + "\n"
    }

    document.getElementById('visits').textContent = string
  })
}

document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', showVisits);
document.getElementById('save').addEventListener('click', save_options);
