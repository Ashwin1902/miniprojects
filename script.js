let box=document.querySelector('#center');

box.addEventListener("mousemove",function(details){
    // console.log("Hey");
     let location=box.getBoundingClientRect();
     let left= (location.x);
     let MouseX=details.screenX;
     let Rmx=MouseX-left;
     let middle=location.width/2;
     
     if(Rmx<middle){
        let red=gsap.utils.mapRange(0,middle,252,0,Rmx); 

        box.style.backgroundColor=`rgb(${red},0,0)`;
     }
     if(Rmx>middle){
        let blue=gsap.utils.mapRange(middle,2*middle,0,255,Rmx); 
        
        box.style.backgroundColor=`rgb(0,0,${blue})`;
     }
})
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor="white";
})
