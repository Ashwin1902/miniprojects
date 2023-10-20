
function func(){
    let a=0;
    let bill=document.querySelector("#bill").value;
    let tip=document.querySelector("#tip").value;

    if(bill==undefined || tip==undefined){
      a=0;
    }
    else{
      a=((+bill)+(+((tip*bill)/100))).toFixed(2);
    }
    document.querySelector("#res").textContent=a;
}