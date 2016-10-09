$(document).ready(function() {
    
    var calcTokens = [];
    
    $(".number").click(function() {
        var value = $(this).text();
        console.log(value);
        calcTokens.push(value);
        updateScreen();
    });

    $(".operator").click(function() {
        var operator = $(this).text();
        if (isNaN(calcTokens[calcTokens.length - 1])) {
            calcTokens.pop();
        }
        switch(operator) {
            case "+":
                calcTokens.push("+");
                break;
            case "-":
                calcTokens.push("-");
                break;
            case "x":
                calcTokens.push("*");
                break;
            case "÷":
                calcTokens.push("/");
                break;
        }
        updateScreen();
    });

    function updateScreen() {
        console.log(calcTokens);
        screenValues = calcTokens.join('');
        $("#screen").val(screenValues);
    }
});



/*
document.addEventListener('DOMContentLoaded', function() {
    let screen = '';
    let buttons = document.querySelectorAll("button");
    for (let i = 0, length = buttons.length; i < length; i++) {
        buttons[i].addEventListener('click', calculate(event, this));
    }
    function calculate(a) {
        let button = a;
        let value = button.value;
        console.log(value);
    }
}); */