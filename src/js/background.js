// Shortcuts for Chrome APIs
const storage = chrome.storage.local;
const action = chrome.action;
const tabs = chrome.tabs;

// Set default settings on extension installation
chrome.runtime.onInstalled.addListener(() => {
  storage.set({
    OINStatus: true,
    OINCloseTab: false,
    OINCloseTime: 1,
    OINWorkspaces: ''
  });
  
  // Set initial appearance (ON by default)
  setAppearance(true);
});

// Set appearance when the Service Worker starts up
storage.get("OINStatus", (data) => {
  const isEnabled = data.OINStatus !== false;
  setAppearance(isEnabled);
});

// Handle extension icon click (Toggle On/Off)
action.onClicked.addListener(() => {
  storage.get("OINStatus", (data) => {
    // Fallback to true if undefined, then toggle the value
    const currentStatus = data.OINStatus !== false;
    const nextStatus = !currentStatus;

    // Update storage and appearance reactively
    storage.set({ OINStatus: nextStatus }, () => {
      setAppearance(nextStatus);
    });
  });
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender) => {
  if (request === "closeTab" && sender.tab && sender.tab.id) {
    tabs.remove(sender.tab.id);
  }
});

// Update the extension icon and badge based on status
function setAppearance(isEnabled) {
  if (isEnabled) {
    action.setIcon({
      path: {
        "16": "/icons/icon-on-16.png",
        "32": "/icons/icon-on-32.png",
        "48": "/icons/icon-on-48.png",
        "128": "/icons/icon-on-128.png"
      }
    });
    action.setBadgeText({ text: "" });
  } else {
    action.setIcon({
      path: {
        "16": "/icons/icon-off-16.png",
        "32": "/icons/icon-off-32.png",
        "48": "/icons/icon-off-48.png",
        "128": "/icons/icon-off-128.png"
      }
    });
    action.setBadgeText({ text: "OFF" });
    action.setBadgeBackgroundColor({ color: "#2C2D35" });
  }
}