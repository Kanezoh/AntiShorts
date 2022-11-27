chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.indexOf("https://www.youtube.com/shorts/") > -1) {
    console.log(`updated: ${tab.url}`);
    chrome.tabs.update(tabId, {
      url: "https://www.youtube.com/"
    });
  }
});