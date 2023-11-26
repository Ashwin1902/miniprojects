let box=[...document.querySelectorAll('.box')];
let container=document.querySelector('.container');
let last=null;
let first;
box.forEach(boxx=>{
boxx.addEventListener("dragstart",(event)=>{
    first=event.target.textContent;
    console.log('hi');
})
boxx.addEventListener("dragenter",(event)=>{
    if(last!=null && event.target.classList.contains('box')){
    event.preventDefault();
    let a=event.target.textContent;
    last.textContent=a;
    event.target.classList.add('hidden');
    }
})
boxx.addEventListener("drop",(event)=>{
    event.target.textContent=first;
   event.target.classList.remove('hidden');
   last=null;

})
 boxx.addEventListener("dragover",(event)=>{
     event.preventDefault();
 })
boxx.addEventListener("dragleave",(event)=>{
   event.preventDefault();
   last=event.target;
   event.target.classList.remove('hidden');
})

})

