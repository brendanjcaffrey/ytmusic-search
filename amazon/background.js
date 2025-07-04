chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "getMetadata" }, (response) => {
    if (chrome.runtime.lastError || !response) {
      alert(
        "Could not get song metadata. Make sure you're on YouTube Music and a song is playing.",
      );
      return;
    }

    const query = encodeURIComponent(`${response.artist} - ${response.title}`);
    const amazonURL = `https://www.amazon.com/s?k=${query}&i=digital-music`;
    chrome.tabs.create({ url: amazonURL });
  });
});
