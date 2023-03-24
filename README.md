Open in Notion - Chrome Extension
======================

![Users](https://img.shields.io/badge/Users-14k+-27CF7D.svg) ![Rating](https://img.shields.io/badge/Rating-4.5%20of%205-27CF7D.svg) ![Version](https://img.shields.io/badge/Version-0.1.5.6-34A9E1.svg)

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

### Testimonials
* *I've been using your Open in Notion - Chrome Extension and I'm fascinated* - Victoria
* *I love the extension* - Asia Hoe
* *Huge help* - Tal Binder
* *Yes! Works perfect* - Tom Wood
* *This extension is fire! I haven't found anything wrong with it yet* — Ryan Creel
* *Works exactly as expected! Thank you* — Muhammad Usman
* *Great extension, does the job perfectly. Thanks!* — Melvyn Hills
* *Very helpful plugin for Chrome users* — Oleg Kostrikin

### Donate (optional)
If you find this extension helpful, you can buy me a coffee ☕️ via [Buymeacoffee], [FanTalks], [Tinkoff], [ЮMoney], [Donatty], [DonatePay].   

[Buymeacoffee]: https://www.buymeacoffee.com/osokin
[FanTalks]: https://fantalks.io/r/sergey
[Tinkoff]: https://www.tinkoff.ru/rm/osokin.sergey127/SN67U9405/
[ЮMoney]: https://yoomoney.ru/to/410011149615582
[Donatty]: https://donatty.com/sergosokin
[DonatePay]: https://new.donatepay.ru/@osokin

<a href="https://www.buymeacoffee.com/osokin">
  <img width="111" height="40" src="https://i.ibb.co/0ssTJQ1/bmc-badge.png">
</a>

<a href="https://fantalks.io/r/sergey">
  <img width="111" height="40" src="https://i.ibb.co/vcds3vF/fantalks-badge.png">
</a>

<a href="https://yoomoney.ru/to/410011149615582">
  <img width="111" height="40" src="https://i.ibb.co/wwrYWJ5/yoomoney-badge.png">
</a>

<a href="https://donatty.com/sergosokin">
  <img width="111" height="40" src="https://i.ibb.co/s61FGCn/donatty-badge.png">
</a>

<a href="https://new.donatepay.ru/@osokin">
  <img width="111" height="40" src="https://i.ibb.co/0KJ94ND/donatepay-badge.png">
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
| v.0.1.5.1 | Added "Help" to the list of reserved web links|
| v.0.1.5.2 | Added "Templates" to the list of reserved web links|
| v.0.1.5.3 | Added "Blog" to the list of reserved web links|
| v.0.1.5.4 | The list of reserved web links is parsed from sitemap.xml|
| v.0.1.5.5 | Added "Ai", "Docs" and "Sitemap" from sitemap.xml|
| v.0.1.5.6 | Migrated to Manifest V3. Updated url's from sitemap.xml.|

### Contribute

Found a bug? Please submit a new issues on GitHub.