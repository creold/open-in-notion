var storage = chrome.storage.local;
var loc = document.location;
var tabUrl = loc.href;

// Get extension options
storage.get(["OINStatus", "OINCloseTab", "OINCloseTime"], function (data) {
  let statusExt = data.OINStatus;
  let linkTab = data.OINCloseTab;
  let time = data.OINCloseTime;
  
  let expression = "(https:\/\/www\.notion\.so\/).+";
  
  var notionRegex = new RegExp(expression);
  let match = notionRegex.exec(tabUrl);

  // Get extension status
    if (statusExt || statusExt == undefined) {
      if (match != null) {
        if (tabUrl.indexOf("/native/") == -1) {
          loc.replace(tabUrl.replace(match[1], match[1] + "native/"));
        }
        if (linkTab) {
          setTimeout(() => {
            closeTab();
          }, time * 1000);
        }
      }
    }
});

// Send a message to the background script
function closeTab() {
  chrome.runtime.sendMessage("closeTab");
}
