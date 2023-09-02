
let a=document.querySelector('.main');
a.addEventListener("click",func);
function func(event){
    let b=event.target.tagName;
    if(b!='IMG') return;
    let d=event.target.src;
    let c=document.querySelector('#picc').src;
    event.target.src=c;
    document.querySelector('#picc').src=d;
    
}
