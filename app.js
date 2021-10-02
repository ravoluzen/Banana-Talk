const inputText = document.querySelector("#text-input");
const outputText = document.querySelector("#text-output");
const translateButton = document.querySelector("#submit");

let apiURL = "https://api.funtranslations.com/translate/minion.json";

function translationURL(url){
    return apiURL + "?" + "text=" + url;
}

function clickHandler(){
    let urlText = inputText.value;

    fetch(translationURL(urlText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
}

translateButton.addEventListener("click", clickHandler);