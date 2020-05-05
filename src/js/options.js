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