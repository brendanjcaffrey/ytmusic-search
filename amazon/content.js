chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getMetadata") {
    const meta = navigator.mediaSession?.metadata;
    if (meta && meta.title && meta.artist) {
      sendResponse({
        title: meta.title,
        artist: meta.artist,
      });
    } else {
      sendResponse(null);
    }
  }
  return true; // to allow async sendResponse
});
