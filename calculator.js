let total = 0
let strbuffer = "0"
let operator = ""

function setListensters(){
    let buttons = document.querySelectorAll(".buttons");
    for (button of buttons) {
        button.addEventListener("click", function(event){
            let value = event.target.innerText;
            buttonClicked(value);
        });
    }
}

setListensters();

function buttonClicked(value) {
    if (!isNaN(parseInt(value))) {
        makesNumber(value);
    } else {
        makesSymbol(value);
    }
    document.querySelector(".result-screen").innerText = strbuffer;
}

function makesNumber(num) {
    if (strbuffer === "0") {
        strbuffer = num.toString();
    } else {
        strbuffer = strbuffer + num.toString();
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        total = 0;
        strbuffer = "0";
        operator = "";
    } else if (symbol === "=") {
        calculations(strbuffer);
        operator = "";
        strbuffer = total.toString();
    } else if (symbol == "←") {
        if (strbuffer.length < 2) {
            strbuffer = "0";
        } else {
            let len = strbuffer.length;
            strbuffer = strbuffer.substring(0, len - 1);
        }
    } else {
        calculations(strbuffer);
        operator = symbol;
        strbuffer = "0";
    }
}

function calculations(strnum) {
    num = parseInt(strnum);
    if (operator === "+") {
        total = total + num;
    } else if (operator === "-") {
        total = total - num;
    } else if (operator === "x") {
        total = total * num;
    } else if (operator === "÷"){
        total = total / num;
    } else {
        total = num;
    }
}