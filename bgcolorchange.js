let input=document.getElementById("input")
console.log(input.value);

function colorChange(event){
    if(event.key === "Enter"){
        document.body.style.backgroundColor=input.value
    }else{
        document.body.style.backgroundColor="white" 
    }
}

let cutradius=document.getElementById("radius");
   console.log(cutradius.value);
let image=document.getElementById("image");
   
function cutradius(event){
    if(event.key === "Enter"){
        image.style.borderRadius=cutradius.value;
    }else{
        image.style.borderRadius="white"; 
    }
}




// let password=document.querySelector("input")
// let icon=document.getElementById("icon")

// icon.onclick=function (){
//    if(password.type === "password"){
//      password.type="text"
//     icon.className="fa-solid fa-eye"
//    }else{
//      password.type="password"
//     icon.className="fa-solid fa-eye-slash"
//    }
// }