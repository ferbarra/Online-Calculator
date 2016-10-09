$(document).ready(function() {
    
    var calcTokens = [];
    
    $(".number").click(function() {
        var value = $(this).text();
        console.log(value);
        //If the previous elem in the array is a numberconcatenate the value to the previous elem.
        //This works despite that the elements are string JS tries to turn it to interger.
        //(Don't know how safe this is - I'll get back to it later')
        if (isNaN(calcTokens[calcTokens.length - 1])) {
            calcTokens.push(value);
        } else {
            calcTokens[calcTokens.length - 1] += value;
        }
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

    $("#CE").click(function() {
        calcTokens.pop();
        updateScreen();
    })

    $("#AC").click(function() {
        calcTokens.splice(0, calcTokens.length);
        updateScreen()
    })

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