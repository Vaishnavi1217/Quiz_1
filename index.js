var readlineSync = require('readline-sync');
var name = readlineSync.question("What is your name?")
console.log("Welcome "  +name);
console.log("Let's see how much you know me!")
var score=0;
var city = readlineSync.question("Where do I live?");
if(city=="Pune" || city=="pune"){
  score=score+1;
}
var color = readlineSync.question("What is my favourite color?")
if(color=="Blue" || color=="blue"){
  score=score+1;
}
var game = readlineSync.question("Which game do I love to play?")
if(game=="Badminton" || game=="badminton"){
  score=score+1
}
var language = readlineSync.question("Which programming language I like the most?")
if(language=="Python" || language=="python"){
  score=score+1
}
var fav_city = readlineSync.question("Which is my favourite city?")
if(fav_city=="Bangalore" || fav_city=="bangalore"){
  score=score+1;
}
console.log("Taadaa!Your score is:" +score);
