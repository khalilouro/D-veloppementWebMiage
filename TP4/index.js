const btn1 = document.getElementById("btn");
console.log(btn1);
const result1 = document.getElementById("result");
console.log(result1);
const btn2 = document.getElementById("btn2");
console.log(btn2);
const result2 = document.getElementById("result2");
console.log(result2);


btn1.addEventListener("click", () => {
    result1.textContent = "JavaScript côté client";
});

btn2.addEventListener("click", () => {
   result2.innerHTML = "<strong>JavaScript côté client</strong>";
});

const col = document.getElementById("color");

const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lightpink"];

col.addEventListener("click", () => {
    col.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const box = document.getElementById("box");
const point = document.getElementById("point");
const xText = document.getElementById("X");
const YText = document.getElementById("Y");

console.log(box);
console.log(point);
console.log(xText);
console.log(YText);

box.addEventListener("mousemove" , (event) => {

    console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    xText.textContent = "X: " + x;
    YText.textContent = "Y: " + y;
    point.style.left = x + "px";
    point.style.top = y + "px";
    console.log(`X: ${x}, Y: ${y}`);

});

const header = document.querySelector("header");
const scrollLevel = document.getElementById("scrollLevel");

console.log(header);
console.log(scrollLevel);

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    header.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    scrollLevel.textContent = ":" + Math.floor(window.scrollY) + "px";
});

const form = document.getElementById("form");
const inputText = document.getElementById("inputText");
const displayText = document.getElementById("displayText");
const formResult = document.getElementById("formResult");

console.log(form);
console.log(inputText);
console.log(displayText);
console.log(formResult);

form.addEventListener( "submit", (e) => {
    e.preventDefault();
    if(inputText.value.trim() !== "") {
        formResult.textContent = inputText.value;
    }
});