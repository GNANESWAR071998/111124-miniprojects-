// let n = document.getElementById("result");

// let count = 0;

// function validate(z){
//     if(count===0){
//         n.innerHTML = z
//         count++
//     }else{
//         n.innerHTML += z
//     }

// }
// function ClearResult(){
//     n.textContent=0
//     count = 0;
// }

// function EqualsTo(){
//     n.textContent=eval(n.textContent)
// }







let n=document.getElementById("result");

function validation(z){
    n.textContent = n.textContent ==="0" ? z: n.textContent + z;

}

function ClearResult(){
    n.textContent=0;
}

function total(){
    n.textContent=eval(n.textContent)
}