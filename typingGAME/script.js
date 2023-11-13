const quoteApi= "https://api.quotable.io/random";
const quoteDisplay=document.querySelector("#quoteDisplay");
const quoteInput=document.querySelector('#quoteInput');
//console.log(quoteDisplay.innerText);
const timer=document.querySelector('#timer');



let getquote= () => {
return fetch(quoteApi)
.then(res=>res.json())
//.then(data=> console.log(data))
.then(data=>data.content);
}

async function renderQuote(){
     const quote= await getquote();
     quoteDisplay.innerHTML='';
     quote.split('').forEach(Character => {
        const characterSpan= document.createElement('span');
        characterSpan.innerText=Character;
        quoteDisplay.appendChild(characterSpan)
     })
    quoteInput.value=null;
    clock();

}


quoteInput.addEventListener('input', ()=>{
  // console.log('hello');
  let text=quoteInput.value.split('');
  let q=quoteDisplay.querySelectorAll('span');
  let correct=true;
  q.forEach((elem,i)=>{
   if(text[i]==null){
      elem.classList.remove('correct');
      elem.classList.remove('incorrect')
      correct=false;
   }
   else if(text[i]===elem.innerText){
      elem.classList.add('correct');
      elem.classList.remove('incorrect')
   }
   else if(text[i]!==elem.innerText){
      elem.classList.add('incorrect');
      elem.classList.remove('correct');
      correct=false;
   }
  })
  if(correct) renderQuote();
})

// function clock(){
//    for(let i=60;i>0;i--){
//        timer.innerText=i;
//    }
// }
let startTime;
function clock(){
   startTime=new Date();
   setInterval(()=>{
      timer.innerText=getTime();
   },1000)
}

function getTime(){
   return Math.floor((new Date()-startTime)/1000);
}


renderQuote();
//quoteIP();