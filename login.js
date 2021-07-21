let logindata = [{
    id: 1,
    account: "jo3",
    password: "a1234"
}, {
    id: 2,
    account: "小魚乾",
    password: "a1235"
}, {
    account: "鮪魚",
    password: "a1235",
    id: 3
}, {
    account: "丞丞",
    password: "a123",
    id: 4
}, {
    account: "何芮",
    password: "a123",
    id: 5
}, {
    account: "蘋蘋",
    password: "a123",
    id: 6
}]
const Response = function() {
    this.success = false;
    this.result = {};
    this.message = '';
}
let response = new Response();
// 登入用
const account = document.querySelector(".account");
const password = document.querySelector(".password");
//按下登入btn跑function
const signin = document.querySelector(".signin");

// bttn監聽事件
signin.addEventListener("click", function(e) {
    callSignin()
})

function clear() {
    password.value = "";
    account.value = "";
}
// 檢測帳號密碼
function callSignin() {
    if (account.value == "" || password.value == "") {
        console.log("請填寫帳號或密碼")
    }
    let accountCheck;
    let passwordCheck;
    logindata.forEach(function(item, index) {
        // console.log("aValue" + account.value, "pValue" + password.value)
        // console.log(account.value, item.account, item.password, index)
        let accountCheck = account.value == item.account;
        let passwordCheck = password.value == item.password;
        console.log(index, "a:" + accountCheck, "p:" + passwordCheck)
            // if (!accountCheck && !passwordCheck) {
            //     alert("帳號密碼輸入錯誤")
            //         // account.value = "";
            //         // password.value = "";
            //     return false;

        // } 
        if (accountCheck) {
            if (passwordCheck) {
                window.location.href = `Blessing.html?${account.value}`;
                return true;

            } else {
                console.log("密碼錯誤");
                password.value = "";
                return false;
            }
        }
        if (!accountCheck) {
            console.log("帳號錯誤")

            return false;

        }

    })
}

//顯示密碼
function myFunction() {
    var x = document.querySelector(".password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}