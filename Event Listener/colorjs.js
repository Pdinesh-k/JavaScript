const red = document.querySelector(".color_red");
const cyan = document.querySelector(".color_cyan");
const pink = document.querySelector(".color_pink");
const violet = document.querySelector(".color_violet");
const orange = document.querySelector(".color_orange");

const center = document.querySelector(".center");


//console.log(window.getComputedStyle(red).backgroundColor);

// console.log(window.getComputedStyle(orange).backgroundColor);

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var orangeElementColor = getBGcolor(orange);

// orange.addEventListener("mouseenter" , () => {
//     center.style.background = orangeElementColor;
// });

var pinkElementColor = getBGcolor(pink);

pink.addEventListener("mouseenter" , () => {
    center.style.background = pinkElementColor;
});
