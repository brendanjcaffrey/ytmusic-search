chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: "getMetadata" }, (response) => {
    if (chrome.runtime.lastError || !response) {
      alert(
        "Could not get song metadata. Make sure you're on YouTube Music and a song is playing.",
      );
      return;
    }

    const query = encodeURIComponent(`${response.artist} - ${response.title}`);
    const beatportURL = `https://www.beatport.com/search?q=${query}`;
    chrome.tabs.create({ url: beatportURL });
  });
});
