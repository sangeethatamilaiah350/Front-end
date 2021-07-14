let input=document.getElementById("input");
let adding=document.getElementById("add");
let display=document.getElementById("inside");

adding.addEventListener("click",function(){
    var lists=document.createElement('p');
    var l=document.createElement('hr');
    l.classList.add("line")
    lists.classList.add("paragraph-styling");
    lists.innerText=input.value;
    display.appendChild(lists);
    display.appendChild(l)
    input.value="";
    lists.addEventListener("click",function(){
        lists.style.textDecoration="line-through";
    });
    lists.addEventListener("dblclick",function(){
        display.removeChild(lists);
        display.removeChild(l)
    });
});



