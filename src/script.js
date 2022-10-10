let button = document.querySelector(".button");
let hide = document.querySelector(".hide");
const changeHandler = e => {
    let value = e.value;  //для латиницы
    e.value = value.replace(/[^\d.]/g,"") // заменить все не цифры кроме номера и точки.
        .replace(/^\./g,"") // необходимо убедиться, что первым является число, а не точка
        .replace(/\.{2,}/g,".") // убедитесь, что есть только одина точка
        .replace(".","$#$") // только один раз, не более двух раз
        .replace(/\./g,"")
        .replace("$#$",".");
}
function showModalWindow(){
    let modalWindow = document.querySelector(".mask");
    modalWindow.classList.remove("hidden");
    let inputOne = document.querySelector(".input-one");
    let inputTwo = document.querySelector(".input-two");
    let valueInputOne =  +inputOne.value;
    let valueInputTwo =  +inputTwo.value;
    let mainPart = document.querySelector(".main-part");
    let select = document.querySelector(".select");
    let operation = select.value;
    switch (operation) {
        case "+" :
            mainPart.innerHTML = valueInputOne + valueInputTwo;
            break;
        case "-":
            mainPart.innerHTML = valueInputOne - valueInputTwo;
            break;
        case "*":
            mainPart.innerHTML = valueInputOne * valueInputTwo;
            break;
        default:
            mainPart.innerHTML = valueInputOne / valueInputTwo;
    }
}
function hideModalWindow(){
    let element_window = document.querySelector(".mask");
    element_window.classList.add("hidden");
    let inputOne = document.querySelector(".input-one");
    inputOne.value = "";
    let inputTwo = document.querySelector(".input-two");
    inputTwo.value = "";
    let select = document.querySelector(".select");
    select.value = "";
}
// button.addEventListener("click", showModalWindow)
// hide.addEventListener("click", hideModalWindow)

if(button ){
    button.addEventListener('click', showModalWindow);
}
if(hide ){
    hide.addEventListener("click", hideModalWindow)
}
