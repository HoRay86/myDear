let data = [{
        id: "01",
        Charge: "img/newGraduate/joke01.jpg",
        name: "img/newGraduate/joke01-1.jpg"
    },
    {
        id: "02",
        Charge: "img/newGraduate/joke02.jpg",
        name: "img/newGraduate/joke02-1.jpg"
    },
    {
        id: "03",
        Charge: "img/newGraduate/joke03.jpg",
        name: "img/newGraduate/joke03-1.jpg"
    },
    {
        id: "04",
        Charge: "img/newGraduate/joke04.jpg",
        name: "img/newGraduate/joke04-1.jpg"
    }, {
        id: "05",
        Charge: "img/newGraduate/joke05.jpg",
        name: "img/newGraduate/joke05-1.jpg"
    }, {
        id: "06",
        Charge: "img/newGraduate/joke06.jpg",
        name: "img/newGraduate/joke06-1.jpg"
    }, {
        id: "07",
        Charge: "img/newGraduate/joke07.jpg",
        name: "img/newGraduate/joke07-1.jpg"
    }, {
        id: "08",
        Charge: "img/newGraduate/joke08.jpg",
        name: "img/newGraduate/joke08-1.jpg"
    }, {
        id: "09",
        Charge: "img/newGraduate/joke09.jpg",
        name: "img/newGraduate/joke09-1.jpg"
    }, {
        id: "10",
        Charge: "img/newGraduate/joke10.jpg",
        name: "img/newGraduate/joke10-1.jpg"
    }, {
        id: "11",
        Charge: "img/newGraduate/joke11.jpg",
        name: "img/newGraduate/joke11-1.jpg"
    }, {
        id: "12",
        Charge: "img/newGraduate/joke12.jpg",
        name: "img/newGraduate/joke12-1.jpg"
    }
];
let data1 = [{
        id: "01",
        img1: "img/newGraduate/positive01.jpg",
        img2: "img/newGraduate/positive01-1.jpg"
    },
    {
        id: "02",
        img1: "img/newGraduate/positive03.jpg",
        img2: "img/newGraduate/positive03-1.jpg",
        img3: "img/newGraduate/positive03-2.jpg",
        img4: "img/newGraduate/positive03-3.jpg",
        img5: "img/newGraduate/positive03-4.jpg",
        img6: "img/newGraduate/positive03-5.jpg"
    },
    {
        id: "03",
        img1: "img/newGraduate/positive02.jpg",
        img2: "img/newGraduate/positive02-1.jpg",
        img3: "img/newGraduate/positive02-2.jpg"
    }

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

function info() {

    let str = ""
    data.forEach(function(item, index) {
        let content = `<div class="col-md jokeImg">
        <div id="carousel${item.id}" class="carousel slide" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="pic1 carousel-item active">
                    <img src="${item.Charge}" class="d-block w-100" alt="...">
                </div>
                <div class="pic2 carousel-item">
                    <img src="${item.name}" class="d-block w-100" alt="...">
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