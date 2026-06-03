const storage = chrome.storage.local;
const loc = document.location;
const tabUrl = loc.href;

// Reserved sections of the Notion website
// Last update June 03, 2026
const reservedList = ["about","affiliates","ai","api-beta","blog","careers","confluence","contact-sales",
  "connections","customers","desktop","docs","download","educators","enterprise","events","evernote",
  "explore","explore-consultants","guides","help","integrations","login","mobile","nonprofits","notes",
  "pages","personal","pricing","product","projects","pseudo","releases","remote","resources","security","signup",
  "sitemap","startups","students","teams","templates","tools-and-craft","trust","unsubscribe","upgraded-account","use-case",
  "web-clipper","webinars","wikis","da-dk","de-de","en-us","es-es","es-la","fi-fi","fr-fr","ja-jp","ko-kr","nb-no","nl-nl","pt-br","zh-cn","zh-tw"];

// Get extension options from local storage
storage.get(["OINStatus", "OINCloseTab", "OINCloseTime", "OINWorkspaces"], function (data) {
  const statusExt = data.OINStatus;
  const linkTab = data.OINCloseTab;
  const time = data.OINCloseTime;
  const workspaces = data.OINWorkspaces;

  // Extension is disabled, do nothing
  if (statusExt === false) return;

  // Regex to match Notion domains: www.notion.so, notion.so, app.notion.com, notion.com, etc.
  const domainRegexStr = "^https://(?:[a-z0-9-]+\\.)?notion\\.(?:so|com)/";

  // Check if the URL belongs to a reserved section
  const reservedRegexStr = reservedList.join("|");
  const reservedExpression = domainRegexStr + "(?!" + reservedRegexStr + ")(.+)";
  const notionReservedRegex = new RegExp(reservedExpression, "i");
  const reservedMatch = notionReservedRegex.exec(tabUrl);

  // If it's a reserved page, stop execution immediately
  if (!reservedMatch) return;

  // Parse user's custom workspaces list
  const workspacesList = (workspaces || '').trim().split(/[ ,]+/).filter(Boolean);
  let isMatch = false;

  if (workspacesList.length > 0) {
    // If specific workspaces are defined, check if the URL matches any of them
    const workspacesRegexStr = "(" + workspacesList.join("|") + ")";
    const expression = domainRegexStr + "(?:native/)?(p/)?" + workspacesRegexStr + "(.+)";
    const notionRegex = new RegExp(expression, "i");
    isMatch = notionRegex.test(tabUrl);
  } else {
    // If no workspaces defined, any non-reserved Notion URL is a match
    isMatch = true;
  }

  // Perform redirect and handle tab closing if it's a valid match
  if (isMatch) {
    // Prevent infinite loops if already in native mode
    if (tabUrl.indexOf("/native/") === -1) {
      const appUrl = tabUrl.replace(/^https?:\/\//i, 'notion://');
      loc.replace(appUrl);
    }
    
    // Close the browser tab if the option is enabled
    if (linkTab) {
      setTimeout(() => {
        closeTab();
      }, time * 1000);
    }
  }
});

// Send a message to the background script to close current tab
function closeTab() {
  chrome.runtime.sendMessage("closeTab");
}