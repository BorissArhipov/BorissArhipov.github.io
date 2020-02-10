const purple = document.querySelector('.stats-box__js-purple');
purple.addEventListener('mousemove', rotate);
purple.addEventListener('mouseout', stopRotate);

function rotate(event) {
    const cardItem = this.querySelector('.stats-box__purple');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/10+'deg) rotateY('+-(event.offsetX - halfWidth)/10+'deg)'
}

function stopRotate(event) {
    const cardItem = this.querySelector('.stats-box__purple');
    cardItem.style.transform = 'rotate(0)';
}

const yellow = document.querySelector('.stats-box__js-yellow');
yellow.addEventListener('mousemove', twoRotate);
yellow.addEventListener('mouseout', stopTwoRotate);

function twoRotate(event) {
    const itemCard = this.querySelector('.stats-box__yellow');
    const halfHeight = itemCard.offsetHeight / 2;
    const halfWidth = itemCard.offsetWidth / 2;
    itemCard.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/10+'deg) rotateY('+-(event.offsetX - halfWidth)/10+'deg)'
}

function stopTwoRotate(event) {
    const itemCard = this.querySelector('.stats-box__yellow');
    itemCard.style.transform = 'rotate(0)';
}