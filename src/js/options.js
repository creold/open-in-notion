const storage = chrome.storage.local;

// DOM Elements
const tabCloseCheckbox = document.querySelector("#tabClose");
const closeTimeInput = document.querySelector('input[name="closeTime"]');
const workspacesInput = document.querySelector('input[name="workspaces"]');

// Load saved settings and populate the UI
storage.get(["OINCloseTab", "OINCloseTime", "OINWorkspaces"], (obj) => {
  tabCloseCheckbox.checked = !!obj.OINCloseTab;
  closeTimeInput.value = obj.OINCloseTime || 1;
  workspacesInput.value = obj.OINWorkspaces || '';
});

// Save checkbox state on change
tabCloseCheckbox.addEventListener("change", () => {
  storage.set({ OINCloseTab: tabCloseCheckbox.checked });
});

// Validate and save close time instantly on input
closeTimeInput.addEventListener("input", () => {
  let value = parseInt(closeTimeInput.value, 10);
  
  // Fallback if input is empty or NaN
  if (isNaN(value)) value = 1; 
  
  // Enforce min/max constraints
  if (value > 5) value = 5;
  if (value < 1) value = 1;
  
  closeTimeInput.value = value;
  storage.set({ OINCloseTime: value });
});

// Save workspaces list on change (when focus is lost)
workspacesInput.addEventListener("change", () => {
  storage.set({ OINWorkspaces: workspacesInput.value });
});