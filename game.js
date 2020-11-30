//Html elements

const statusvar=document.querySelector(".status");
const resetvar=document.querySelector(".reset");
const cellsvar=document.querySelectorAll(".game-cell");

//game variable
let gameisalive=true;
let xisnext=true;
let winner=null;

//functions
function winner_disp(symbol){
    if(symbol==='x'){
      return 'X';
    }
    else{
      return 'O';
    }
}

function checkgamestatus(){
    const topleft=cellsvar[0].classList[2];
    const topmiddle=cellsvar[1].classList[2];
    const topright=cellsvar[2].classList[2];
    const middleleft=cellsvar[3].classList[2];
    const middleMiddle=cellsvar[4].classList[2];
    const middleright=cellsvar[5].classList[2];
    const bottomleft=cellsvar[6].classList[2];
    const bottomMiddle=cellsvar[7].classList[2];
    const bottonright=cellsvar[8 ].classList[2];

//is there a winner

    if(topleft && topleft===topmiddle && topleft===topright){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topleft) +" has Won!";
        cellsvar[0].classList.add("won");
        cellsvar[1].classList.add("won");
        cellsvar[2].classList.add("won");
    }
    else if(middleleft && middleleft===middleMiddle && middleleft===middleright){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(middleleft) +" has Won!";
        cellsvar[3].classList.add("won");
        cellsvar[4].classList.add("won");
        cellsvar[5].classList.add("won");
    }
    else if(bottomleft && bottomleft===bottomMiddle && bottomleft===bottonright){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(bottomleft) +" has Won!";
        cellsvar[6].classList.add("won");
        cellsvar[7].classList.add("won");
        cellsvar[8].classList.add("won");
    }
    else if(topleft && topleft===middleleft && topleft===bottomleft){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topleft) +" has Won!";
        cellsvar[0].classList.add("won");
        cellsvar[3].classList.add("won");
        cellsvar[6].classList.add("won");
    }
    else if(topmiddle && topmiddle===middleMiddle && topmiddle===bottomMiddle){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topmiddle) +" has Won!";
        cellsvar[1].classList.add("won");
        cellsvar[4].classList.add("won");
        cellsvar[7].classList.add("won");
    }
    else if(topright && topright===middleright && topright===bottonright){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topright ) +" has Won!";
        cellsvar[2].classList.add("won");
        cellsvar[5].classList.add("won");
        cellsvar[8].classList.add("won");
    }
    else if(topleft && topleft===middleMiddle && topleft===bottonright){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topleft) +" has Won!";
        cellsvar[0].classList.add("won");
        cellsvar[4].classList.add("won");
        cellsvar[8].classList.add("won");
    }
    else if(topright && topright===middleMiddle && topright===bottomleft ){
        gameisalive=false;
        winner=topleft;
        statusvar.innerHTML = winner_disp(topright ) +" has Won!";
        cellsvar[2].classList.add("won");
        cellsvar[4].classList.add("won");
        cellsvar[6].classList.add("won");
    }
    else if(topleft && topright && topmiddle && middleleft && middleright && middleMiddle && bottomleft && bottonright && bottomMiddle){
      gameisalive=false;
      statusvar.innerHTML = "Game is Tied!";
    }
};

//event handlers

function handlereset(){
    xisnext=true;
    statusvar.innerHTML="X is next";
    winner=null;
    gameisalive=true;

    for(cells of cellsvar){
      cells.classList.remove('x');
      cells.classList.remove('o');
      cells.classList.remove('won');
    }

};

function handlecellclick(){

    const classList=this.classList;
    const location=classList[1];

    if(!gameisalive || classList[2]==='x' || classList[2]==='o'){
      return;
    }
    if(xisnext){
      classList.add("x");
      checkgamestatus();
      xisnext=!xisnext;
    }
    else{
      classList.add("o");
      checkgamestatus();
      xisnext=!xisnext;
    }
};
//listeners

resetvar.addEventListener('click',handlereset);

for(cells of cellsvar){
  cells.addEventListener('click',handlecellclick);
}
