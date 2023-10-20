let buttons=document.querySelector('p');
let k=document.querySelector('.keys');

k.addEventListener('click',function(e){
  let val=e.target.innerText;
  //console.log(e.target.closest);
  if(e.target.closest('#key')){
  let dis=document.querySelector('.screen');
  let ans=0;
  if(!(val=='=' || val=='C')){
  dis.innerText+=val;
  }
  if(val=='C'){
    dis.innerText='';
  }

  if(val=='='){
    ans=eval(dis.innerText);
    dis.innerText=ans;
  }
}
});