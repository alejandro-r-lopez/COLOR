const resetButton = document.getElementById('reset');

const blocks = document.getElementsByClassName('block');

const rgbForm = document.getElementById('rgbForm');
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const createButton = document.getElementById('createButton');
const newColorBlock = document.getElementById('newColorBlock');
const newColor = document.getElementById('newColor');

for (let i = 0; i < blocks.length; ++i) {
    generateColors(blocks[i]);
}

resetButton.addEventListener('click', () => {
    location.reload();
});

function generateColors(block) {
    block.addEventListener('click', function (event) {
        let block = event.target;
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        block.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
}

createButton.addEventListener('click', () => {
    redInput.value;
    newColorBlock.style.backgroundColor = `rgb(${redInput.value},${greenInput.value},${blueInput.value})`;
    newColor.innerHTML = `${redInput.value} ${greenInput.value} ${blueInput.value}`;
    redInput.value = '';
    greenInput.value = '';
    blueInput.value = '';
});
