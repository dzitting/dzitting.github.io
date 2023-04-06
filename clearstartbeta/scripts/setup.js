function setKey() {
  // Store data in chrome.storage
  console.log("Get weather was called");
  chrome.storage.local.set({'WEATHER_KEY': 'c6b654bc9b5d40b554412631311ed079'}, function() {
  console.log('Weather key is stored');
  });
};

chrome.runtime.onInstalled.addListener(function(details) { //Listens for installation and calls weather setKey function
  if (details.reason === "install") {
    setKey();
    console.log("onInstall was called");
    chrome.browserAction.setPopup({popup: "setup.html"});
    
  } else if (details.reason === "update") {
    // Code to handle updates
  }
});
