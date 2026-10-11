let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText.trim();

        if (value === "C") {
            expression = "";
            display.innerText = "0";
        } else if (value === "=") {
            if (expression === "") {
                return;
            }
            try {
                let result = eval(expression);
                display.innerText = result;
                expression = result.toString();
            } catch (err) {
                display.innerText = "Error";
                expression = "";
            }
        } else {
            if (display.innerText === "0" && !isNaN(value)) {
                expression = value;
            } else {
                expression += value;
            }
            display.innerText = expression;
        }
    });
});
