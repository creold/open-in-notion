/*  
    options.js - Open in Notion module

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

let toggle = document.querySelector('.toggle');
let tabClose = document.querySelector('#tabClose');

// Read settings
storage.get(["OINCloseTab"], function(obj) {
  tabClose.checked = obj.OINCloseTab;
});

// Inspect state
function stateCheck(element) {
  if (element.checked === true) return true;
  return false;
}

toggle.addEventListener("click", function(e) {
  tabClose.checked = !tabClose.checked;
  let settings = {
    OINCloseTab: tabClose.checked ? true : false
  };
  storage.set(settings);
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

function trackSettingsClick(e) {
  _gaq.push(["_trackEvent", "OIN Change Settings", "clicked"]);
}

document.addEventListener("DOMContentLoaded", function () {
  tabClose.addEventListener("click", trackSettingsClick);
});