// Creates a custom "WEB3-insp3ct" tab inside Chrome Developer Tools
chrome.devtools.panels.create(
  "WEB3-insp3ct",
  "../icons/icon-48.png",
  "../panel/panel.html",
  (panel) => {
    console.log("WEB3-insp3ct DevTools panel loaded.");
  }
);
