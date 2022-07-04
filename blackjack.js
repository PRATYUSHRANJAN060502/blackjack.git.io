let firstCard=10
let secondCard=7
let sum=firstCard+secondCard
let hasBlackjack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){
    renderGame()
}
function renderGame(){
cardsEl.textContent="Cards:"+firstCard+" "+secondCard
sumEl.textContent="sum: "+sum
if(sum<21){
message="Do you want to draw a new card! "
}
else if(sum===21){
message="wohoo! You have got blackjack "
hasBlackjack="true"
}
else{
message="you are out of game "
isAliive="false"
}

messageEl.textContent=message
}
function newCard(){
console.log("draw a new card")
let newCard=7
sum=sum+newCard
renderGame()
}
