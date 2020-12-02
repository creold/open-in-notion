var storage = chrome.storage.local;

let toggle = document.querySelector(".toggle");
let time = document.querySelector('input[name="closeTime"]');
let workspaces = document.querySelector('input[name="workspaces"]');
let tabClose = document.querySelector("#tabClose");

// Read settings
storage.get(["OINCloseTab", "OINCloseTime", "OINWorkspaces"], function(obj) {
  tabClose.checked = obj.OINCloseTab;
  time.value = obj.OINCloseTime;
  workspaces.value = obj.OINWorkspaces || '';
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

time.addEventListener("change", function(e) {
  if (time.value > 5) time.value = 5;
  if (time.value < 1) time.value = 1;
  let settings = {
    OINCloseTime: time.value
  };
  storage.set(settings);
});

workspaces.addEventListener("change", function(e) {
  let settings = {
    OINWorkspaces: workspaces.value
  };
  storage.set(settings);
});