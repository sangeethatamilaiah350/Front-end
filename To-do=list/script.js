let input=document.getElementById("input");
let adding=document.getElementById("add");
let display=document.getElementById("inside");
let value
adding.addEventListener("click",function(){
    var lists=document.createElement('p');
    var l=document.createElement('hr');
    l.classList.add("line")
    lists.classList.add("paragraph-styling");
    value=input.value;
    lists.innerText=input.value;
    display.appendChild(lists);
    display.appendChild(l)
    input.value="";
    hitt("http://127.0.0.1:5000/"+value)
    lists.addEventListener("click",function(){
        lists.style.textDecoration="line-through";
    });
    lists.addEventListener("dblclick",function(){
        display.removeChild(lists);
        display.removeChild(l)
        hitt("http://127.0.0.1:5000/del/"+value)
    });
});
async function hitt(a){
    const response=await fetch(a)
    var data=await response.json()
}


