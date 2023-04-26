let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
let randomIndex = Math.floor(Math.random() * letters.length);

// let randomNumber = Math.floor(Math.random() * 10);

// let randomLetter = letters[randomIndex];

let hexNumber = [];

const chooseValue = function () {
    let value = Math.floor(Math.random() * 2) === 0;
    if (value) {
        return letters[Math.floor(Math.random() * letters.length)];
    } else {
        return Math.floor(Math.random() * 10);
    }
};

for (let i = 0; i < 6; i++) {
    hexNumber.push(chooseValue());
}

document.addEventListener('click', function (event) {
    const block = event.target;

    block.style.backgroundColor = 'rgb(20,300,40)';

    // block.classList.toggle('color');
});

console.log(hexNumber);

// function createHex() {
//     let value = Math.floor(Math.random() * 2) === 0;
//     if (value) {
//         hexNumber.push(randomLetter);
//     } else {
//         hexNumber.push(randomNumber);
//     }
// }
