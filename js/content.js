chrome.runtime.onMessage.addListener(
    function(request, sender) {
        let clipboardData = request.sharableUrl;
        if (clipboardData)copyToClipboard(clipboardData);
    }
);

function copyToClipboard(data) {
    // https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
    const copySource = document.createElement('textarea');
    copySource.textContent = data;
    document.body.appendChild(copySource);
    copySource.select();
    document.execCommand('copy');
    document.body.removeChild(copySource);
}
