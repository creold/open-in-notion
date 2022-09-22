var storage = chrome.storage.local;
var loc = document.location;
var tabUrl = loc.href;

// Reserved sections of the Notion website
// Last update September 20, 2022
var reservedList = [
  "about",
  "affiliates",
  "api-beta",
  "blog",
  "careers",
  "confluence",
  "contact-sales",
  "customers",
  "desktop",
  "educators",
  "enterprise",
  "events",
  "evernote",
  "guides",
  "help",
  "integrations",
  "login",
  "mobile",
  "nonprofits",
  "notes",
  "pages",
  "personal",
  "pricing",
  "product",
  "projects",
  "releases",
  "remote",
  "resources",
  "security",
  "signup",
  "startups",
  "students",
  "teams",
  "templates",
  "tools-and-craft",
  "unsubscribe",
  "upgraded-account",
  "web-clipper",
  "wikis"
];

// Get extension options
storage.get(["OINStatus", "OINCloseTab", "OINCloseTime", "OINWorkspaces"], function (data) {
  let statusExt = data.OINStatus;
  let linkTab = data.OINCloseTab;
  let time = data.OINCloseTime;
  let workspaces = data.OINWorkspaces;
  
  // Collect a list of reserved words
  let reservedRegex = reservedList.join("|");

  // Collect a list of user's workspaces
  let workspacesList = (workspaces || '').trim().split(/[ ,]+/);
  let workspacesRegex = "(" + workspacesList.join("|") + ")";
  
  // Accumulated expression
  let reservedExpression = "(https:\/\/www\.notion\.so\/)(?!" + reservedRegex + ").+";
  let expression = "((https:\/\/www\.notion\.so\/)(native\/)?" + workspacesRegex + ").+";
  
  var notionReservedRegex = new RegExp(reservedExpression);
  let reservedMatch = notionReservedRegex.exec(tabUrl);

  var notionRegex = new RegExp(expression);
  let match = notionRegex.exec(tabUrl);
  
  // Get extension status
    if ((statusExt || statusExt == undefined) && reservedMatch != null) {
      if (match != null) {
        if (tabUrl.indexOf("/native/") == -1) {
          loc.replace(tabUrl.replace(/^https?\:\/\//i, 'notion://'));
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
