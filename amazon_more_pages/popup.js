console.log('popupJs')
// function getCurrentTabId(callback) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         if (callback) callback(tabs.length ? tabs[0].id : null);
//     });
// }

$(document).ready(function () {




    //edit element
    $('#start').on('click', function (e) {
        const keyword = $("#keywords").val() ? $("#keywords").val() : ''
        getCurrentTabId(tabId => {
            chrome.tabs.update(tabId, { url: `https://www.amazon.com/s?k=${keyword}&ref=nb_sb_noss_1` });
        });
    })
});