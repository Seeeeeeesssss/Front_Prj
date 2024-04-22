var advertise;
var delayImg;
const cfImgs = [
    "./img/simmons.jpg",
    "./img/advertise/cf1.jpg"
];
function cfInit(){
    document.getElementById("sideCF").style.display = "none";
}
function advertise(){
    advertise = document.querySelector("#advertise img");
    advertise.src = cfImgs[0];
    let idx = 1;
    // setInterval(algorithm, millSec)
    // 밀리초 뒤에 밀리초마다 알고리즘 실행
    setInterval(() => {
        advertise.src = cfImgs[idx];
        idx++;
        if(idx == cfImgs.length){
            idx = 0;
        }
    }, 5000)
}

function sideCFShow(){
    // 광고 최소 범위 : 1550
    //document.querySelector("article .title").innerHTML = innerWidth;
    // innerWidth : 윈도우의 크기 반환
    // onresize 이벤트로 윈도우 크기가 변경될때마다 반환
    if(window.innerWidth <= 1550){
        document.getElementById("sideCF").style.display = "none";
    }
    if(window.innerWidth > 1550 && document.documentElement.scrollTop > 200){
        document.getElementById("sideCF").style.display = "block";
    }
}
function scrollCF(){
    if(document.documentElement.scrollTop <= 200){
        // 도큐먼트의 스크롤의 위치가 위에서부터 200 이하면
        document.getElementById("sideCF").style.display = "none";
    }
    if(window.innerWidth > 1550 && document.documentElement.scrollTop > 200){
        document.getElementById("sideCF").style.display = "block";
    }
}