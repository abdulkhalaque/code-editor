function run(){
    let htmlcode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outputCode = document.getElementById("output");


    outputCode.contentDocument.body.innerHTML = htmlcode + "<style>" + cssCode + "</style>";
    outputCode.contentWindow.eval(jsCode);
}