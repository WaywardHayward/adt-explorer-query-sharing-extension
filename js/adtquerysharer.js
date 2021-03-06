chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      id:"shareAdtQuery",
      title: "Copy Azure Digital Twins Query Link to clipboard",
      contexts: ["selection"]      
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info,tab) {
    if(info.menuItemId != "shareAdtQuery") return;
    var query = info.selectionText;
    var url = "https://explorer.digitaltwins.azure.net/?";
    url += "query=" + encodeURIComponent(query);    
    return chrome.tabs.sendMessage(tab.id, { sharableUrl: url });
}
