let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

function changeColor(){
    document.querySelector('body').style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`
    css.innerHTML = `<span>Color1: ${color1.value}</span>  <span>Color2: ${color2.value}</span>`
}
console.log()
color1.addEventListener('input', changeColor)
color2.addEventListener('input', changeColor)