let data1 = [{
        id: "01",
        img1: "img/newGraduate/joke01.jpg",
        img2: "img/newGraduate/joke01-1.jpg"
    },
    {
        id: "02",
        img1: "img/newGraduate/positive03.jpg",
        img2: "img/newGraduate/positive03-1.jpg",
        img2: "img/newGraduate/positive03-2.jpg",
        img2: "img/newGraduate/positive03-3.jpg",
        img2: "img/newGraduate/positive03-4.jpg",
        img2: "img/newGraduate/positive03-5.jpg"
    },
    {
        id: "03",
        img1: "img/newGraduate/positive02.jpg",
        img2: "img/newGraduate/positive02-1.jpg",
        img2: "img/newGraduate/positive02-2.jpg"
    }
    // ,{
    //     id: "04",
    //     img1: "img/newGraduate/joke04.jpg",
    //     img2: "img/newGraduate/joke04-1.jpg"
    // }, {
    //     id: "05",
    //     img1: "img/newGraduate/joke05.jpg",
    //     img2: "img/newGraduate/joke05-1.jpg"
    // }, {
    //     id: "06",
    //     img1: "img/newGraduate/positive01.jpg",
    //     img2: "img/newGraduate/positive01-1.jpg"
    // }, {
    //     id: "07",
    //     img1: "img/newGraduate/positive02.jpg",
    //     img2: "img/newGraduate/positive02-1.jpg",
    //     img2: "img/newGraduate/positive02-2.jpg"
    // }, {
    //     id: "08",
    //     img1: "img/newGraduate/positive03.jpg",
    //     img2: "img/newGraduate/positive03-1.jpg",
    //     img2: "img/newGraduate/positive03-2.jpg",
    //     img2: "img/newGraduate/positive03-3.jpg",
    //     img2: "img/newGraduate/positive03-4.jpg",
    //     img2: "img/newGraduate/positive03-5.jpg"
    // }, {
    //     id: "09",
    //     img1: "img/newGraduate/joke09.jpg",
    //     img2: "img/newGraduate/joke09-1.jpg"
    // }, {
    //     id: "10",
    //     img1: "img/newGraduate/joke10.jpg",
    //     img2: "img/newGraduate/joke10-1.jpg"
    // }, {
    //     id: "11",
    //     img1: "img/newGraduate/joke11.jpg",
    //     img2: "img/newGraduate/joke11-1.jpg"
    // }, {
    //     id: "12",
    //     img1: "img/newGraduate/joke12.jpg",
    //     img2: "img/newGraduate/joke12-1.jpg"
    // }
];

//Ajax
// function getData() {
//     //XMLHttpRequest物件 專門用來和伺服器做連線
//     let req = new XMLHttpRequest();
//     // req先用open方法做"設定" ("連線方法:get取得" ,"連線的網址")
//     req.open("get", "http://127.0.0.1:5500/%E4%BD%A0%E9%82%84%E6%9C%89%E6%A2%97%E5%97%8E.html");
//     //load事件 偵測連線狀態-結束
//     req.onload = function() {
//         //連線完成 做事情
//         let content = document.querySelector(".ajaxpage");
//         content.innerHTML = this.responseText;
//         let str = ""
//         data.forEach(function(item, index) {
//             let content = `<div class="col-md jokeImg">
//         <div id="carousel${item.id}" class="carousel slide" data-bs-interval="false">
//             <div class="carousel-inner">
//                 <div class="pic1 carousel-item active">
//                     <img src="${item.Charge}" class="d-block w-100" alt="...">
//                 </div>
//                 <div class="pic2 carousel-item">
//                     <img src="${item.name}" class="d-block w-100" alt="...">
//                 </div>

//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//                 </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>
//     </div> `
//             console.log(content);
//             str += content;
//             console.log(str)
//         });
//         list.innerHTML = str;
//         // alert(this.responseText)
//     };

//     req.send(); //送出"連線"

// }
const list = document.querySelector(".list");

function positiveImg() {

    let str = ""
    data1.forEach(function(item, index) {
        let content = `<div class="col-md jokeImg">
        <div id="carousel${item.id}" class="carousel slide" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="pic1 carousel-item active">
                    <img src="${item.img1}" class="d-block w-100" alt="...">
                </div>
                <div class="pic2 carousel-item">
                    <img src="${item.img2}" class="d-block w-100" alt="...">
                </div>
                <div class="pic3 carousel-item">
                    <img src="${item.img3}" class="d-block w-100" alt="...">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div> `
        console.log(content);
        str += content;
        console.log(str)
    });
    list.innerHTML = str;
}

// info();

const menuList = document.querySelector(".menuList");
console.log(menuList);
// box.addEventListener("click", function(e) {

//     if (e.target.value == undefined) {
//         console.log("請點擊按紐");
//         return
//     };
//     console.log(e.target.value);

//     let str = ""
//     data.forEach(function(item, index) {
//         if (e.target.value == "全部") {
//             str += `<li>${item.name},${item.Charge}</li>`
//         }
//         if (e.target.value == item.Charge) {
//             str += `<li>${item.name},${item.Charge}</li>`
//         }
//     })

//     list.innerHTML = str;

// });

// const addStation = document.querySelector(".addStation");
// const stationCharge = document.querySelector(".stationCharge");
// const stationName = document.querySelector(".stationName");
// const addBtn = document.querySelector(".addBtn");

// addBtn.addEventListener("click", function(e) {
//     // console.log(stationCharge.value);
//     // console.log(stationName.value);
//     let obj = {};
//     obj.Charge = stationCharge.value;
//     obj.name = stationName.value + "充電站";
//     data.unshift(obj);
//     console.log(data);
//     info();
//     stationCharge.value = "免費";
//     stationName.value = "";
// })

// //想設計箭頭 還沒成功
// let prev = document.querySelector(".carousel-control-prev")
// let next = document.querySelector(".carousel-control-next")

// console.log(next)
// next.addEventListener("click", myFunction);

// function myFunction(e) {
//     next.style = "display:none"
//         // prev.style = " display:block"
//     console.log(e.target, this)
// }

// prev.addEventListener("click", function() {
//     prev.style = "display:none"
//     next.style = " display:block"
// })