/* let allows you to declare variables that are limited to the scope
 of a block statement, or expression on which it is used, unlike 
 the var keyword, which declares a variable globally, 
 or locally to an entire function regardless of block scope */

let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
 
taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "60px"
    }
})
 
