const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === "clear") {
            display.innerText = "";
        } else if (item.id === "backspace") {
            let string = display.innerText;
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== "" && item.id === "equal") {
            
            display.innerText = eval(display.innerText);
        } else if (display.innerText === "" && item.id === "equal") {
            display.innerText = "null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});
const themetogglebtn =document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleicon = document.querySelector("toggler-icon");
let isdark=true;
themetogglebtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themetogglebtn.classList.toggle("active")
    isdark = !isdark;
};