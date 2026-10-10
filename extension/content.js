// Injected into web pages to detect Web3 providers and DOM structure
window.addEventListener("message", (event) => {
  if (event.source === window && event.data.type && event.data.type === "WEB3_INSP3CT_PROVIDER") {
    chrome.runtime.sendMessage({ action: "log_rpc", payload: event.data });
  }
});

console.log("WEB3-insp3ct content script active on page.");
