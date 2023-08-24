let hr=document.querySelector("#hour");
let min=document.getElementById("minutes");
let sec=document.querySelector("#seconds");
let ampm=document.getElementById("ampm");
function func(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let a="AM";
    if(h>12){
        h-=12;
        a="PM";
    }

    hr.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    ampm.innerText=a;
    setTimeout(() => {
        func()
    }, 1000);
}

func();