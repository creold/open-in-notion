var storage = chrome.storage.local;
var action = chrome.browserAction;
var tabs = chrome.tabs;
var toggle = false;

chrome.runtime.onInstalled.addListener(function() {
  storage.set({
    OINStatus: true,
    OINCloseTab: false,
    OINCloseTime: 1,
    OINWorkspaces: ''
  });
});

// Get extension status
storage.get("OINStatus", function(data) {
  if (data.OINStatus) {
    toggle = true;
  }
  setAppearance(toggle);
});

// On/Off extension
action.onClicked.addListener(function() {
  toggle = !toggle;
  setAppearance(toggle);
  storage.set({ OINStatus: toggle });
});

// Get response from content script
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request === "closeTab") {
    tabs.remove(sender.tab.id);
  }
});

function setAppearance(argument) {
  if (argument) {
    action.setIcon({
      path: {
        "16": "./icons/icon-on-16.png",
        "32": "./icons/icon-on-32.png",
        "48": "./icons/icon-on-48.png",
        "128": "./icons/icon-on-128.png"
      }
    });
    action.setBadgeText({ text: "" });
  } else {
    action.setIcon({
      path: {
        "16": "./icons/icon-off-16.png",
        "32": "./icons/icon-off-32.png",
        "48": "./icons/icon-off-48.png",
        "128": "./icons/icon-off-128.png"
      }
    });
    action.setBadgeText({ text: "OFF" });
    action.setBadgeBackgroundColor({ color: "#2C2D35" });
  }
}