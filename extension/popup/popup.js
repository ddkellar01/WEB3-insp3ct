document.getElementById("inspect-btn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => alert("WEB3-insp3ct inspection overlay triggered.")
  });
});
