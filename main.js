window.onload = game();

var turn = document.getElementById("turn");
var boxes = document.querySelectorAll(".box");

// Jogo
function game() {

  // Evento onclick
  var boxes = document.querySelectorAll(".box");
  var play = 0;

  for(var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
      if(this.innerHTML !== "X" && this.innerHTML !== "O") {
        if(play%2 === 0) {
          this.innerHTML = "X";
          turn.innerHTML = "It's O Turn.";
          play += 1;
        } else {
          this.innerHTML = "O";
          turn.innerHTML = "It's X Turn.";
          play += 1;
        }
        checkWinner();
      }
    };
  }
}

// Checa ao final de cada jogada
function checkWinner() {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");
  var box5 = document.getElementById("box5");
  var box6 = document.getElementById("box6");
  var box7 = document.getElementById("box7");
  var box8 = document.getElementById("box8");
  var box9 = document.getElementById("box9");

  // Pega todas as possibilidades (Horizontais, Verticais e Diagonais)
  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
    selectWinnerBoxes(box1, box2, box3);
  } else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
    selectWinnerBoxes(box4, box5, box6);
  } else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box7, box8, box9);
  } else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box1, box4, box7);
  } else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    selectWinnerBoxes(box2, box5, box8);
  } else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box3, box6, box9);
  } else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box1, box5, box9);
  } else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box3, box5, box7);
  }

}

function selectWinnerBoxes(b1, b2, b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML = b1.innerHTML + " Is the Winner!";
}

// Restart
function replay() {
  for(var i = 0; i < boxes.length; i++) {

    boxes[i].classList.remove("win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Let's play!";

  }
}
