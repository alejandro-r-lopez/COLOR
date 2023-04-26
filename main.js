const resetButton = document.getElementById('reset');

if (resetButton) {
    resetButton.addEventListener('click', () => {
        location.reload();
    });
}

function generateColor() {
    let block = event.currentTarget;

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    block.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
