const gblocklink = document.querySelector('.game-block');
const barrierlink = document.querySelector('.barrier');
const finishlink = document.querySelector('.finish');

const buttonlink = document.querySelector('.arrow');
const arrUpLink = document.querySelector('button[name="arrow-up"]');
const arrDownLink = document.querySelector('button[name="arrow-down"]');
const arrLeftLink = document.querySelector('button[name="arrow-left"]');
const arrRightLink = document.querySelector('button[name="arrow-right"]');

let coordY, coordX, barrX, barrY, finishX, finishY;
let poleHeight, poleWidth;

const numRowLnk = document.querySelector('input[name="numberRow"]');
const numColLnk = document.querySelector('input[name="numberColumn"]');

const startBtnLink = document.querySelector('button[name="startBtn"]');

const poleLnk = document.querySelector('.pole');

//добавить ограничение на количество строк и столбцов

startBtnLink.addEventListener('click', (ev) => {
    const row = numRowLnk.value; 
    const col = numColLnk.value;
    const barrierNumber = barrierlink.value;
    console.log(barrierNumber);
    poleHeight = row*100;
    poleWidth = col*100;
    poleLnk.style.height = `${poleHeight}px`;
    poleLnk.style.width = `${poleWidth}px`;
    
    
    
    //плохо работает с нечетным количеством строк
    gblocklink.style.top = `${row*100/2}px`;
    gblocklink.style.left = `${col*100/2}px`;

    //сюда добавить генерацию преград
    barrierlink.style.top = '300px';
    barrierlink.style.left = '200px';
    finishlink.style.top = '400px';
    finishlink.style.left = '300px';
})

let coordXY = () => {
    barrY = parseInt(barrierlink.style.top);
    barrX = parseInt(barrierlink.style.left);
    coordY = parseInt(gblocklink.style.top);
    coordX = parseInt(gblocklink.style.left);
    finishX = parseInt(finishlink.style.left);
    finishY = parseInt(finishlink.style.top);
}

let finishXY = () => {
    if ((coordY === finishY) && (coordX === finishX)) {
        poleLnk.innerHTML = 'You are WIN';
        return;
    }
}



arrUpLink.addEventListener('click', (ev) => {
    coordXY();
    coordY = coordY - 100;
    finishXY();
    if (coordY>=0)  
        {if ((coordY === barrY) && (coordX === barrX)) {
            barrY = barrY - 100;
            if (barrY>=0) {
                barrierlink.style.top = `${barrY}px`;
                gblocklink.style.top = `${coordY}px`}
            else return;    
        } 
        else {gblocklink.style.top = `${coordY}px`;}}
    return;
})

arrDownLink.addEventListener('click', (ev) => {
    coordXY();
    coordY = coordY + 100;
    finishXY();
    if (coordY<=poleHeight-100)
            {if ((coordY === barrY) && (coordX === barrX)) {
                barrY = barrY+100;
                if (barrY<=poleHeight-100) {
                    barrierlink.style.top = `${barrY}px`;
                    gblocklink.style.top = `${coordY}px`}
                else return;    
            } 
            else {gblocklink.style.top = `${coordY}px`;}}
        return;
})

arrLeftLink.addEventListener('click', (ev) => {
    coordXY();
    coordX = coordX - 100;
    finishXY();
    if (coordX>=0)  
        {if ((coordY === barrY) && (coordX === barrX)) {
            barrX = barrX - 100;
            if (barrX>=0) {
                barrierlink.style.left = `${barrX}px`;
                gblocklink.style.left = `${coordX}px`}
            else return;    
        } 
        else {gblocklink.style.left = `${coordX}px`;}}
    return;
})

arrRightLink.addEventListener('click', (ev) => {
    coordXY();
    coordX = coordX + 100;
    finishXY();
    if (coordX<=poleWidth-100)
        {if ((coordY === barrY) && (coordX === barrX)) {
            barrX = barrX + 100;
            if (barrX<=poleWidth-100) {
                barrierlink.style.left = `${barrX}px`;
                gblocklink.style.left = `${coordX}px`}
            else return;    
        } 
        else {gblocklink.style.left = `${coordX}px`;}}
    return;
})

//добавить управление стрелками с клавиатуры



    