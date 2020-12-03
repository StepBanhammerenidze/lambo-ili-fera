const button = document.querySelector(`.btn`);
const mainbox = document.querySelector(`.main-box`);
const text = document.querySelector('.text');
const colors = [`red`,`green`, `blue`, `yellow`];


button.addEventListener("click", (event)=> {
let rnd = Math.floor(Math.random() * colors.length);
let randomcolor = colors[rnd];
mainbox.style.backgroundColor = randomcolor;
text.textContent = randomcolor;

    event.preventDefault();
});