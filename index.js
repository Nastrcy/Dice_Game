var randomNumber1 = Math.floor(Math.random()*6);
var diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];

var imgSource1= diceImages[randomNumber1];

var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src", imgSource1);

var randomNumber2 = Math.floor(Math.random()*6);

var imgSource2=diceImages[randomNumber2];

document.querySelectorAll("img")[1].setAttribute("src", imgSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
   }
 else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
   }
 else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="It is a Draw"
 };