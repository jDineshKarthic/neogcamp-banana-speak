// const promp = alert("hello");
const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
 
// var serverURl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// function getTranslationURL(text){
//     return serverURL + "?"+"text=" + text
// }
// function clickHandler(){
//     var inputText =txtInput.value;

//     fetch(getTranslationURL(inputText))
//     .then(response => response.json())
//     .then(json => console.log(json))
// }










var serverURL="https://api.funtranslations.com/translate/minion.json"

// var serverURL ="https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(text){
    return serverURL+ "?" +"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
}


function clickHandler(){
    var inputText =txtInput.value;

    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText= translatedText;
    })
    .catch(errorHandler);
};
btnTranslate.addEventListener("click",clickHandler);




//function errorHandler(error){
//     console.log("error occured",error);
//     alert("something wrong with the server! try again after some time")
// }
// {
    //         var translatedText = json.contents.translated;
    //         outputDiv.innerText = translatedText;
    //     }

//     .catch(errorHandler)
