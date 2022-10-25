# Fix "`Copy` doesn't work on Jira" issue

On some linux machines, copy function doesn't work on Jira.

This script is an equally nasty solutions to Jira's nasty navigator.clipBoard override.

You can inject the js code from solution.js to Jira web pages with the help of an extension like [JS Injector](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) or [Resource Override](https://chrome.google.com/webstore/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii) for Chrome.

Script basically overrides `document.oncopy` so when you use ctrl+c or Copy command from the context menu, it memorizes selected text, opens a new window, runs `navigator`'s `writeText` method with the memorized text and closes the window.

Only tested in Chrome v102 on Ubuntu machine.

If you use Resource Override extension, https://`companyname`.atlassian.net/browse/* should be sufficient as the Tab Url (Don't forget the asterix).
