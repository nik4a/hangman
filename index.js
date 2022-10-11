const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  const wordsListarr = [
    {
      id: 0,
      word: "horse",
      hint: "our ancestors It was the best transport",
    },
    {
      id: 1,
      word: "dog",
      hint: "people best friend",
    },
    {
      id: 2,
      word: "travel",
      hint: "best relaxation",
    },
    {
      id: 3,
      word: "queen",
      hint: "England 2022",
    },
  ];
  
  const btnCotainer = document.getElementById("alphabets-cotainer");
  const hints = document.getElementById("hints");
  const answer = document.getElementById("answers");
  const winBaner = document.getElementById("win-container");
  const loseBaner = document.getElementById("lose-container");
  const losescrore = document.getElementById("losescore");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  
  let noletterarr = [];
  let choseeachletter = [];
  let eachletter = [];
  let life = "5";
  let indices = [];
  let gameSelect;
  
  alphabets.forEach((alphabet) => {
    const newBtn = document.createElement("button");
    newBtn.innerText = alphabet;
    btnCotainer.appendChild(newBtn);
  });
  
  btnCotainer.addEventListener("click", (e) => {
    choseeachletter.push(e.target.innerHTML);
    e.target.disabled = true;
    if (choseeachletter.length == 0) {
      console.log("it`s emty");
    } else if (choseeachletter.length == 1) {
      if (booleanAnswer() === true) {
        findletterInWord();
  
        for (let i = 0; i < indices.length; i++) {
          noletterarr.splice(indices[i], 1, choseeachletter[0]);
        }
  
        answer.innerHTML = noletterarr.join(" ");
        chosenAndword();
        choseeachletter = [];
        indices = [];
      } else {
        life--;
        loseScore();
        switch (life--) {
          case (life = 4):
            canvasOne();
            break;
          case (life = 3):
            canvasTwo();
            break;
          case (life = 2):
            canvasThree();
            break;
          case (life = 1):
            canvasFoure();
            break;
          default:
            break;
        }
      }
      choseeachletter = [];
    } else {
      console.log("err");
    }
  });
  
  function startGame() {
    let genRandomNum = Math.floor(Math.random() * wordsListarr.length);
  
    gameSelect = wordsListarr.find((item) => item.id === genRandomNum);
    console.log(gameSelect);
  
    hints.innerHTML = gameSelect.hint;
  
    for (let i = 0; i < gameSelect.word.length; i++) {
      noletterarr.push("-");
      eachletter.push(gameSelect.word.charAt(i));
    }
  
    answer.innerHTML = noletterarr.join(" ");
    canvas.height = 514;
    canvas.width = 324;
    context.strokeStyle = "white";
  }
  
  function booleanAnswer() {
    return eachletter.some((item) => {
      return item == choseeachletter[0];
    });
  }
  
  function findletterInWord() {
    for (var i = 0; i < gameSelect.word.length; i++) {
      if (gameSelect.word[i] === choseeachletter[0]) indices.push(i);
    }
  }
  
  function chosenAndword() {
    if (JSON.stringify(noletterarr) == JSON.stringify(eachletter)) {
      winBaner.classList.add("active");
    }
  }
  
  function loseScore() {
    losescrore.innerHTML = life;
    if (losescrore.textContent === "0") {
      console.log("You loose");
      loseBaner.classList.add("active");
    }
  }
  
  function canvasOne() {
    context.beginPath();
    context.moveTo(58, 427);
    context.lineTo(52, 170);
    context.stroke();
    context.closePath();
  }
  function canvasTwo() {
    context.beginPath();
    context.moveTo(51, 173);
    context.lineTo(151, 173);
    context.stroke();
    context.closePath();
  }
  function canvasThree() {
    context.beginPath();
    context.moveTo(149, 173);
    context.lineTo(149, 230);
    context.stroke();
    context.closePath();
  }
  function canvasFoure() {
    context.save();
    context.translate(148, 262);
    context.scale(0.9090909090909091, 1);
    context.beginPath();
    context.arc(0, 0, 30, 0, 6.283185307179586, false);
    context.stroke();
    context.closePath();
    context.restore();
    context.beginPath();
    context.moveTo(148, 293);
    context.lineTo(151, 354);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(147, 305);
    context.lineTo(116, 326);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(147, 306);
    context.lineTo(200, 321);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(151, 350);
    context.lineTo(123, 382);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(152, 351);
    context.lineTo(198, 382);
    context.stroke();
    context.closePath();
  }
  function canvasFive() {}
  
  startGame();