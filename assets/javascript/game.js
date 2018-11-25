// declare variables
var wins = 0;
var losses = 0;
var userSum = [];
// ai chooses random number at start of game between 19 & 120
var targetNum = Math.floor((Math.random() * 120) + 19);
    $("#randNum").html("TARGET NUMBER: " + targetNum);
// on click event for 4 crystals. 
// each crystal represents a random number between 1-12, on click will calculate a sum
// if the sum of the crystal === random number, calculate wins
// if sum of crystal does not exceed the random number, keep adding
// if sum of cyrstals exceeds the random number, calculate loss
// restart game when player loses or wins. ai generates new random number