// !sezione mail

//inizializzo array email approvate

var approvedMails = [
  "matteofattorini@gmail.com",
  "mailapprovata@gmail.com",
  "provamail@gmail.com",
  "mailmail@gmail.com",
];

//!variabili

// bottone di verifica mail
var btnEl = document.getElementById("verify");

//resultbox
var resultBoxEl = document.getElementById("result");

//result-text
var resultTextEl = document.getElementById("result-text");

// aggiungo il click del bottone

btnEl.addEventListener("click", function () {
  // prendo la mail inserita dall utente

  var customerMail = document.getElementById("mail").value;

  //confronto la mail con quelle approvate

  for (i = 0; i < approvedMails.length; i++) {
    if (customerMail == approvedMails[i]) {
      resultBoxEl.style.display = "block";
      resultBoxEl.style.backgroundColor = "green";
      resultTextEl.innerHTML = "Accesso Approvato";

      // fermati se la trovi
      i = approvedMails.length;
    } else {
      resultBoxEl.style.display = "block";
      resultBoxEl.style.backgroundColor = "red";
      resultTextEl.innerHTML = "Accesso Negato";
    }
  }
});

// !sezione dadi

//!variabili

//tiro del giocatore uno
var rollOne = document.getElementById("rollOne");

//tiro del giocatore due
var rollTwo = document.getElementById("rollTwo");

// bottone
var dicesBtnEl = document.getElementById("throw");

//box con il vincitore
var resultDice = document.getElementById("higher");

//riquadro giocatore uno
var boxPlayerOne = document.getElementById("boxOne");

//riquadro giocatore due
var boxPlayerTwo = document.getElementById("boxTwo");

//aggiungo click
dicesBtnEl.addEventListener("click", function () {
  //tiro i dadi giocatore 1
  rollOne.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);

  //tiro i dadi giocatore 2
  rollTwo.innerHTML = Math.floor(Math.random() * (6 - 1) + 1);

  // confronto i risultati

  //?se vince il giocatore Uno
  if (parseInt(rollOne.innerHTML) > parseInt(rollTwo.innerHTML)) {
    resultDice.innerHTML = "Ha vinto il giocatore Uno!";
    boxPlayerOne.style.backgroundColor = "lightgreen";
    boxPlayerTwo.style.backgroundColor = "tomato";

    //?vince il giocatore Due
  } else if (parseInt(rollTwo.innerHTML) > parseInt(rollOne.innerHTML)) {
    resultDice.innerHTML = "Ha vinto il giocatore Due!";
    boxPlayerTwo.style.backgroundColor = "lightgreen";
    boxPlayerOne.style.backgroundColor = "tomato";

    //?pareggio
  } else {
    resultDice.innerHTML = "Pareggio!";
    boxPlayerTwo.style.backgroundColor = "lightblue";
    boxPlayerOne.style.backgroundColor = "lightblue";
  }
});
