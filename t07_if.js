/************************************* 
task 7 if.js 
sahasra 
29/4/25 
**************************************/
console.log("maths.js");

//variables
let name ="Sahasra"
let age=100
let pocketMoney= 40
let year=2025
let birthYear= year-age

/******** 
main code
********/

console.log("hi" , name)
console.log("as of" , year , "you are" , age , "years old")
console.log("you were born in" , birthYear )
console.log("you have" , pocketMoney, "dollars")
console.log("in 10 years you will be" , age + 10 , "years old")
console.log("you have" , pocketMoney, "dollars" )
console.log("half of you money is" , pocketMoney/2 )
alert("welcome to the program!")
var username=prompt("what is your name?")
var money=prompt("how much pocketMoney do you have?")
var choice =prompt("on a scale of 0-3 how much do you chocolate? ")
let classArray =["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"]
alert("person "+choice+ " is " +classArray[choice]);






console.log("hi", name ,) 
console.log("i predict you were born in", birthYear, )
console.log("your pocketMoney is", pocketMoney, "dollars")

if( pocketMoney < 4){
    console.log (" you cant afford a chocolate bar ")
}
if( pocketMoney == 4){
    console.log (" just enough money ")
}
if( pocketMoney > 4){
    console.log ("you can afford a chocolate bar")
}
/******** 
functions
********/