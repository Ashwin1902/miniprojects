let startbtn=document.querySelector('.start');

startbtn.addEventListener("click",(e)=>{
    //console.log("hhh");
    let score=document.querySelector('.span');
    let scorecount=document.querySelector('.score');

    score.classList.remove('score2');
    e.target.classList.remove('btn2');
    score.innerText=0;
    startbtn.innerText='Restart';
    document.querySelector('.choose').classList.remove('hidden');
    let rock="rock-paper-scissors-296854_1280.png";
    let paper="rock-paper-scissors-296855_1280.png";
    let scissors="rock-paper-scissors-296853_1280.png";
    
    let computer=document.querySelector('.comp');
    let player=document.querySelector('.played');
    computer.classList.add('hidden');
    player.classList.add('hidden');

    let select=document.querySelectorAll('.sel');
    select.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        let b=e.target.value;
        e.target.classList.add('btn2');
        //console.log(e.target.classList);
        //console.log(e.target);
        let a=Math.floor(Math.random() * (3)) + 1;
        console.log(a);
        computer.classList.add('hidden');
        player.classList.add('hidden');
        setTimeout(()=>{
        if(a==1) computer.src=rock;
        if(a==2) computer.src=paper;
        if(a==3) computer.src=scissors;

        if(b==1) player.src=rock;
        if(b==2) player.src=paper;
        if(b==3) player.src=scissors;
        e.target.classList.remove('btn2');

    computer.classList.remove('hidden');
    player.classList.remove('hidden');

    score.classList.remove('score2');
   // score.classList.add('score');
        
        if(a==1 && b==2){ 
          //  score.classList.remove('score');
            score.classList.add('score2');
            score.innerText++;
        } 
        if(a==2 && b==3){
            score.classList.add('score2');
            score.innerText++;
        }
       if(a==3 && b==1){
        score.classList.add('score2');
            score.innerText++;
       }
        },1000)
     })
    })
})