const screen = document.getElementById('screen');
const logo = document.getElementById('logo');

const FPS = 30;
let xPosition = 0;
let yPosition = 0;
const xSpeed = 4;
const ySpeed = 4;
let direction = {
    horizontal: 1,
    vertical: 1
}

const randomColor = () =>{
    return Math.floor(Math.random()*16777215).toString(16);
}

const updatePos = (elm, x, y) => {
    elm.style.left = `${x}px`;
    elm.style.top = `${y}px`;
}

const changeDirection = (innerEl, outerEl, onbounce) => {
    let innerRect = innerEl.getBoundingClientRect();
    let outerRect = outerEl.getBoundingClientRect();

    if(innerRect.right >= outerRect.right){
        direction.horizontal = -1;
        onbounce();
    }

    if(innerRect.left <= outerRect.left){
        direction.horizontal = 1;
        onbounce();
    }

    if(innerRect.bottom >= outerRect.bottom){
        direction.vertical = -1;
        onbounce();
    }

    if(innerRect.top <= outerRect.top){
        direction.vertical = 1;
        onbounce();
    }
}

xPosition = (screen.clientWidth - logo.clientWidth) / 2;
yPosition = (screen.clientHeight- logo.clientHeight) / 2;
updatePos(logo, xPosition, yPosition);

setInterval(() => {
    changeDirection(logo, screen, () => {
        let color = randomColor();
        screen.style.backgroundColor = `#${color}`;
    });
    xPosition += (xSpeed * direction.horizontal);
    yPosition += (ySpeed * direction.vertical);
    updatePos(logo, xPosition, yPosition);
}, 1000 / FPS);