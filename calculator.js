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
});