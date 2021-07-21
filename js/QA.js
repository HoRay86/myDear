let yourname = document.querySelector(".yourName")
let nickname = document.querySelector(".nickName")
let btn = document.querySelector(".submitBtn")
let message = document.querySelector(".message")

// 想用網址帶參數 目前失敗 取不到value 不知道為甚麼
function changePage() {
    // console.log(nickname);
    yournamev = yourname.value
    window.location.href = `QAcopy.html?${yournamev}`;
}