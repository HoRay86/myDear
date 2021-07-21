let sayHi = document.querySelector(".sayHi");
//立即函式 導入畫面即呈現

(function show() {

    //URL中文會變亂碼  用decodeURI()將亂碼轉為中文
    var url = decodeURI(location.href);

    //取得問號之後的值
    var temp = url.split("?");

    //將值再度分開
    var vars = temp[1].split("&");

    //一一顯示出來
    for (var i = 0; i < vars.length; i++) {
        console.log(vars[i]);
        // 把HTML內容補上 Hi,名字
        sayHi.innerHTML = `Hi,${vars[i]}`;

    };

})();