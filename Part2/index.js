console.log('It\'s working');

const cardID = document.getElementById('id-card');
const styleAttribute = document.getElementById('style-attribute');

console.log(cardID);
console.log(styleAttribute);

const setCard = () => {
    const cardValue = document.getElementById(cardID.value);
    cardValue.style.color = styleAttribute.value;
}

const resetColors = () => {
    const cardElements = document.querySelectorAll('section');
    for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].style.color = 'grey';
    }
}