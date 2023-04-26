function generateColor() {
    let block = event.currentTarget;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    block.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
