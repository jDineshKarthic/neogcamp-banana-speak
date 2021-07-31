const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
function clickEventHandler(){
    outputDiv.innerText = "ajasjsjsjsjs " + txtInput.value;
};
btnTranslate.addEventListener("click",clickEventHandler);
