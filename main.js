
const VARIANTS = [
    'scissors',
    'paper',
    'stone',
];

document.getElementById('scissors').addEventListener('click', () => {
    let result;
    let myVariant = 'scissors';
    let opponentVariant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

    if (opponentVariant === 'stone') {
        result = 'You lose';
    } else if (opponentVariant === myVariant) {
        result = 'Draw';
    } else {
        result = 'You win';
    }
    console.log('You chose ' + myVariant);
    console.log('Opponent chose ' + opponentVariant);
    console.log(result);
});

document.getElementById('paper').addEventListener('click', () => {
    let result;
    let myVariant = 'paper';
    let opponentVariant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

    if (opponentVariant === 'scissors') {
        result = 'You lose';
    } else if (opponentVariant === myVariant) {
        result = 'Draw';
    } else {
        result = 'You win';
    }
    console.log('You chose ' + myVariant);
    console.log('Opponent chose ' + opponentVariant);
    console.log(result);
});
document.getElementById('stone').addEventListener('click', () => {
    let result;
    let myVariant = 'stone';
    let opponentVariant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

    if (opponentVariant === 'stone') {
        result = 'You lose';
    } else if (opponentVariant === myVariant) {
        result = 'Draw';
    } else {
        result = 'You win';
    }
    console.log('You chose ' + myVariant);
    console.log('Opponent chose ' + opponentVariant);
    console.log(result);
});
