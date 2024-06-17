const h1 = document.querySelector('h1');
const button = document.querySelector("button");
const body = document.body;

function generateRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    console.log(r, g, b);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = rgb;
    h1.innerText = rgb;

}

button.addEventListener('click', generateRandomColor);