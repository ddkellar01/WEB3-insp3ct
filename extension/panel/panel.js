// WEB3-insp3ct Panel Logic
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "log_rpc") {
    const container = document.getElementById("log-container");
    const entry = document.createElement("div");
    entry.style.borderBottom = "1px solid #333";
    entry.style.padding = "4px 0";
    entry.textContent = `[${new Date().toLocaleTimeString()}] Method: ${message.payload.method || 'Unknown'} | Data: ${JSON.stringify(message.payload)}`;
    container.appendChild(entry);
  }
});
