Open in Notion - Chrome Extension
======================

[![Behance](https://img.shields.io/badge/Behance-%40creold-0055FF.svg)](https://behance.net/creold) [![Dribbble](https://img.shields.io/badge/Dribbble-%40creold-DF3A7A.svg)](https://dribbble.com/creold) [![Instagram](https://img.shields.io/badge/Instagram-%40serg_osokin-8034B2.svg)](https://www.instagram.com/serg_osokin/)

### This Chrome extension intercepts Notion pages links and redirects them to the [Notion desktop app](https://www.notion.so/desktop).   

## Preview

![](https://i.ibb.co/88V5pPJ/notion-preview.gif)   

### Install
1. Download and install [Notion desktop app](https://www.notion.so/desktop).
2. [Install extension](https://chrome.google.com/webstore/detail/open-in-notion/kjemindnkfgkkfdekkinfamjahhlemca) from Chrome Web Store.

### How to Manually Install
1. Launch Chrome
2. Go to Extensions (`chrome://extensions/`)
3. Toggle `Developer mode`
4. Click `Load unpacked extension`
5. Select `src` folder from this repository

### Usage
1. Paste a Notion link into a Chrome address bar.
2. Press `Enter`.
3. If you see a confirmation dialog in Chrome, select "Always open these links associated with this app" option and then click "Open Notion" button.   
	**Notice:** [Restore the "Always open these types of links in the associated app"](https://superuser.com/questions/1481851/disable-chrome-to-ask-for-confirmation-to-open-external-application-everytime)
4. If you need to open a pages link in Chrome tab instead of Notion desktop app, you can switch the extension off by clicking on the extension icon.

### Custom option
Right-clicking on the extension icon shows you preferences popup.   
![options](https://i.ibb.co/0GCJBgH/notion-options.png)

### Donate (optional)
If you find this extension helpful, you can buy me a coffee ☕️ via [PayPal], [ЮMoney] or [Donatty] 🙂  

[PayPal]: https://paypal.me/osokin/3usd
[ЮMoney]: https://yoomoney.ru/to/410011149615582
[Donatty]: https://donatty.com/sergosokin

<a href="https://paypal.me/osokin/3usd">
  <img width="147" height="40" src="https://i.ibb.co/Z8Wd8Sn/paypal-badge.png" >
</a>

<a href="https://yoomoney.ru/to/410011149615582">
  <img width="147" height="40" src="https://i.ibb.co/448NHjM/yoomoney-badge.png" >
</a>

<a href="https://donatty.com/sergosokin">
  <img width="147" height="40" src="https://i.ibb.co/p2Qj9Fr/donatty-badge.png" >
</a>

### Release notes 

| Version | Notes |
| --- | --- |
| v.0.1 | Initial version. |
| v.0.1.2 | Fix issues. Update options page |
| v.0.1.3 | The code is adapted to the requirements of Google |
| v.0.1.4 | Added an option to open links from the specified workspaces in the app |
| v.0.1.4.1 | Excluded reserved web links. E.g.: notion.so/about|
| v.0.1.5 | Replace /native redirect with support for new notion:// protocol|
| v.0.1.5.1 | The list of reserved web links has been updated|
| v.0.1.5.2 | The list of reserved web links has been updated|

### Contribute

Found a bug? Please submit a new issues on GitHub.