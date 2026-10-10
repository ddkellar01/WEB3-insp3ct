// WEB3-insp3ct Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  console.log("WEB3-insp3ct extension initialized successfully.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "log_rpc") {
    console.log("[WEB3 RPC Captured]:", request.payload);
    sendResponse({ status: "logged" });
  }
});
