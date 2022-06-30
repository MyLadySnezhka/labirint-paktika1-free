const gblocklink = document.querySelector('.game-block');
const buttonlink = document.querySelector('.arrow');
const arrUpLink = document.querySelector('button[name="arrow-up"]');
const arrDownLink = document.querySelector('button[name="arrow-down"]');
const arrLeftLink = document.querySelector('button[name="arrow-left"]');
const arrRightLink = document.querySelector('button[name="arrow-right"]');

let coordY, coordX;
let poleHeight, poleWidth;

const numRowLnk = document.querySelector('input[name="numberRow"]');
const numColLnk = document.querySelector('input[name="numberColumn"]');

const startBtnLink = document.querySelector('button[name="startBtn"]');

const poleLnk = document.querySelector('.pole');

//добавить ограничение на количество строк и столбцов

startBtnLink.addEventListener('click', (ev) => {
    const row = numRowLnk.value; 
    const col = numColLnk.value;
    poleHeight = row*100;
    poleWidth = col*100;
    poleLnk.style.height = `${poleHeight}px`;
    poleLnk.style.width = `${poleWidth}px`;
    
    
    //плохо работает с нечетным количеством строк
    gblocklink.style.top = `${row*100/2}px`;
    gblocklink.style.left = `${col*100/2}px`;  
    
})

arrUpLink.addEventListener('click', (ev) => {
    coordY = parseInt(gblocklink.style.top);
    coordY = coordY - 100;
    if (coordY>=0)  
        {gblocklink.style.top = `${coordY}px`;}
    return;
})

arrDownLink.addEventListener('click', (ev) => {
    coordY = parseInt(gblocklink.style.top);
    coordY = coordY + 100;
    if (coordY<=poleHeight-100)
        {gblocklink.style.top = `${coordY}px`;}
    return;
})

arrLeftLink.addEventListener('click', (ev) => {
    coordX = parseInt(gblocklink.style.left);
    coordX = coordX - 100;
    if (coordX>=0)
        {gblocklink.style.left = `${coordX}px`;}
    return;
})

arrRightLink.addEventListener('click', (ev) => {
    coordX = parseInt(gblocklink.style.left);
    coordX = coordX + 100;
    if (coordX<=poleWidth-100)
        {gblocklink.style.left = `${coordX}px`;}
    return;
})

//добавить управление стрелками с клавиатуры



    