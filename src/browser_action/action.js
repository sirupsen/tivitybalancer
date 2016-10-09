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
    urls: []
  }, function(settings) {
    document.getElementById('urls').textContent = settings.urls.join("\n")
  })
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
