/*  
    background.js - Open in Notion module

    Open in Notion plugin for Chrome
    Copyright (c) 2019
    Sergey Osokin <https://github.com/creold/>

    This is free software; you can redistribute it and/or modify it under
    the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation; either version 3 of the License, or (at
    your option) any later version.

    This software is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
    Lesser General Public License for more details.

    See <http://www.gnu.org/licenses/>.
*/

var storage = chrome.storage.local;
var action = chrome.browserAction;
var tabs = chrome.tabs;
var toggle = false;

chrome.runtime.onInstalled.addListener(function() {
  storage.set({
    OINCloseTab: false
  });
});

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-144468036-4"]);
_gaq.push(["_trackPageview"]);

(function() {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://ssl.google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

// Receive the message from the content script
chrome.runtime.onMessage.addListener(function( request, sender, sendResponse ) {
    if(request.action == "OIN Redirect"){
        _gaq.push(["_trackEvent", request.action, "initiated"]);
    }
});

// Get extension status
storage.get("OINStatus", function(data) {
  if (data.OINStatus || data.OINStatus == undefined) {
    toggle = true;
  }
  setAppearance(toggle);
});

// On/Off extension
action.onClicked.addListener(function() {
  toggle = !toggle;
  setAppearance(toggle);
  storage.set({ OINStatus: toggle });
  _gaq.push(["_trackEvent", "OIN Change Status", "clicked"]);
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