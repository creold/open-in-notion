/*  
    redirect.js - Open in Notion module

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
var appURI = "notion://native/";
var loc = document.location;
var tabUrl = loc.href;

// Get extension options
storage.get(["OINStatus", "OINCloseTab"], function (data) {
  let statusExt = data.OINStatus;
  let linkTab = data.OINCloseTab;

  let expression = "(https:\/\/www\.notion\.so\/).+";
  
  var notionRegex = new RegExp(expression);
  let match = notionRegex.exec(tabUrl);

  // Get extension status
    if (statusExt || statusExt == undefined) {
      if (match != null) {
        chrome.runtime.sendMessage({action: "OIN Redirect"});
        loc.replace(tabUrl.replace(match[1], appURI));
        if (linkTab) {
          setTimeout(() => {
            closeTab();
          }, 1000);
        }
      }
    }
});

// Send a message to the background script
function closeTab() {
  chrome.runtime.sendMessage("closeTab");
}
