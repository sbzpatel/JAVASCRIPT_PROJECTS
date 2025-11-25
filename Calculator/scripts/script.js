const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if(value === "C") {
            expression = "";
            display.value = "";
            return;
        }

        if(value === "=") {
            try {
                display.value = eval(expression);
                expression = display.value;
            } catch {
                display.value = "Error";
                expression = "";
            }
            return;
        }

        expression += value;
        display.value = expression;
    });
});