paragraph = document.getElementById("paragraph")    
function p_mouseOver(){
    paragraph.style.border = "5px solid blue"
    paragraph.style.backgroundColor = "black"
    paragraph.style.color = "white"
}
function p_mouseOut(){
    paragraph.style.border = "5px solid black"
    paragraph.style.backgroundColor = "white"
    paragraph.style.color = "black"
}
paragraph.addEventListener("mouseover",p_mouseOver)
paragraph.addEventListener("mouseout",p_mouseOut)

name1 = document.getElementById("h2")
function name_mouseOver(){
    name1.style.borderTop = "2px solid black"
    name1.style.borderBottom = "2px solid black"
}
function name_mouseOut(){
    name1.style.border = "0"
}
name1.addEventListener("mousedown",name_mouseOver)
name1.addEventListener("mouseup",name_mouseOut)

function textFocus(id){
    id.style.border = "5px solid blue"
}

function ageFocus(id){
    value = id.value;
    id.style.backgroundColor = "gray"
    id.style.color = "white"
}
function textFocusOut(id){
    id.style.border = "1px solid black"
}

function ageFocusOut(id){
    id.style.backgroundColor = "white"
}
function keyboard(id,event){
    id.innerHTML = event.key
}
keyboard1 = document.getElementById("keyboard")
document.addEventListener("keypress", function(event) {
    let keyPressed = event.key;
    keyboard1.innerHTML=  keyPressed
});
thanks = document.getElementById("thanks")
function okButton(){
    thanks.style.display = "block"
    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
title = document.getElementById("h1")
function changeColor(){
    colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "gray"]
    title.style.color = colors[getRandomInt(10)]
}
let interval = setInterval(changeColor,1000)

