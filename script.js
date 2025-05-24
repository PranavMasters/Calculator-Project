document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let lastAnswer = "";

    window.appendOnToDisplay = function(val) {
        display.value += val;
    };

    window.appendANSToDisplay = function() {
        display.value += lastAnswer;
    };

    window.clearDisplay = function() {
        display.value = "";
    };

    window.calculateDisplay = function() {
        try {
            lastAnswer = eval(display.value);
            display.value = lastAnswer;
        } catch (e) {
            display.value = "Error";
        }
    };
});