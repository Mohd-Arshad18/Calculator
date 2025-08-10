let string = "";
let buttons = document.querySelectorAll('.button');

// Prevent typing letters in the input box
const inputField = document.querySelector('input');
inputField.addEventListener('keydown', function (e) {
    // Allow: Backspace, Delete, Tab, Escape, Enter, and .
    if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "Escape" ||
        e.key === "Enter" ||
        e.key === "."
    ) {
        return;
    }

    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if ((e.ctrlKey || e.metaKey) && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) {
        return;
    }

    // Block anything that's not a number
    if (e.key < "0" || e.key > "9") {
        e.preventDefault();
    }
});

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});