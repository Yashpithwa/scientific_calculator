
    let buttons = document.querySelectorAll(".button");
    let string = "";

    Array.from(buttons).forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch (error) {
                    document.querySelector('input').value = "Error";
                    string = "";
                }
            }
            else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'DEL') {
                string = string.slice(0, -1); // Remove the last character from the string
                document.querySelector('input').value = string; 
            }
            else {
                string += e.target.textContent;
                document.querySelector('input').value = string;
            }
        });
    });

    let redcolor = document.getElementById("red");
let yellowcolor = document.getElementById("yellow");
let bluecolor = document.getElementById("blue");
let mainbox = document.getElementsByClassName("mainbox")[0]; // Access the first element with class 'mainbox'

redcolor.addEventListener("click", (e) => {
    mainbox.style.backgroundColor = "red"; // Change background color to red
});

yellowcolor.addEventListener("click", (e) => {
    mainbox.style.backgroundColor = "yellow"; // Change background color to yellow
});

bluecolor.addEventListener("click", (e) => {
    mainbox.style.backgroundColor = "blue"; // Change background color to blue
});
