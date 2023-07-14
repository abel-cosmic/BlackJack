//declarations from index.html
let messageEl = document.querySelector("#message");
let cards = document.querySelector("#cards");
let result = document.querySelector("#sum");
let priceEl = document.querySelector("#price");

//declrations
let sum = 0;
let cardRender = [];
let isAlive = false;
let hasBlackJack = false;
let message = ["You have blackjack!!","Do you want to draw another card?","You are out of the game!"];

let player = {
     Name :"Per",
     Chips: 145
}

priceEl.textContent = player.Name + ": $"+ player.Chips; 

function start(){
    isAlive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard(); 
    cardRender.push(card1);
    cardRender.push(card2);
    sum = card1 + card2;
    render();
}
function getRandomCard(){
    let randomNumber = Math.floor((Math.random()*13 )+1);
    if(randomNumber === 1){
        return 11;
    }else if(randomNumber>10){
        return 10;
    }
    return  randomNumber;
}
function render(){
    cards.textContent = "Cards: ";
    for(let i=0; i<cardRender.length;i++){
        cards.textContent += cardRender[i]+ "";
    }
    result.textContent = "Sum: "+ sum;
    if(sum === 21){
        messageEl.textContent = message[0] +"";
        isAlive = false;
    }else if( sum < 21){
        messageEl.textContent =message[1]+"";
        hasBlackJack = true;
    }else{
        messageEl.textContent =message[2]+"";
        isAlive = false;
    }
}
function newGame(){
   if(isAlive === true && hasBlackJack === true){
    let card  = getRandomCard();
    sum += card;
    cardRender.push(card);
    card.textContent  = "Cards: ";
    render();
   }
}