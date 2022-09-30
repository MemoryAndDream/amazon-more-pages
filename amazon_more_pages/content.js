console.log('content script');

setTimeout(() => {
    var pagenation = $("ul.a-pagination");
    pagenation.append('<li><a href="/best-sellers-video-games/zgbs/videogames/ref=zg_bs_pg_2?_encoding=UTF8&pg=3">3</a></li>');
    console.log(pagenation);
    getTotalPages();
} , 5000);


function genPageUrl(firstUrl,pageNum) {
    //根据正则匹配替换
    var newUrl = firstUrl.replace(/&pg=(\d+)/g,'&pg='+pageNum)
    return newUrl
}

function getTotalPages() {
    var lis = $("ul.a-pagination li").length; //chrome console测试有问题
    console.log(lis);
}

var url = 'https://www.amazon.com/Best-Sellers-Our-Brands/zgbs/private-brands/ref=zg_bs_pg_2?_encoding=UTF8&pg=2';
var page3 = genPageUrl(url,3)
//nth:child
//需要加元素检测 url设置
// 页码判断
// 变成1 2 3 4 ...的情况