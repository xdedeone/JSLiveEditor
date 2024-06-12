//
let htmlCode = document.getElementById("html-code");
let cssCode = document.getElementById("css-code");
let jsCode = document.getElementById("js-code");
let outputCode = document.getElementById("output");

function compileCode() {
    outputCode.contentDocument.body.innerHTML = 
        htmlCode.value + 
        "<style>" + cssCode.value + "</style>";
    try {
        outputCode.contentWindow.eval(jsCode.value);
    } catch (error) {
        
    }
}

function syntaxHighlight(code) {

}