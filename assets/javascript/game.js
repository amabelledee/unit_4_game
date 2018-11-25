// Global Variables

//Crystals
var crystal = {
    pink:
    {
      name: "t1",
      value: 0
    },
    yellow:
    {
      name: "t2",
      value: 0
    },
    green:
    {
      name: "t3",
      value: 0
    },
    blue:
    {
      name: "t4",
      value: 0
    }
  };
  
// counters
var winners = 0;
var loser = 0;
var userSum = 0;
var targetNum = 0;

// ai chooses random number for crystals and target
var randNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

// function to start and reset the game
var startGame = function() {
    userSum = 0;

    // ai random number min and max
    targetNum = randNum(19, 120);

    // each crystal will get a random number with a min and max
    crystal.pink.value = randNum (1, 12);
    crystal.yellow.value = randNum (1, 12);
    crystal.green.value = randNum (1, 12);
    crystal.blue.value = randNum (1,12);

    // shows target number and user number on page
    $("#targetNumber").html("<h3>Target:</h3> " + targetNum);
    $("#userSum").text(userSum);
};

// Winner restarts the game
var winner = function() {

    // User sum is greater than target number
    if (userSum > targetNum) {
      alert("YOU LOSE! Try again!");
  
      // add loss to counter
      loser++;
  
      // update lost count on page
      $("#losses").text(loser);
  
      // Restart the game
      startGame();
    }
  
    else if (userSum === targetNum) {
      alert("WINNER WINNER!");
  
      // add win to counter
      winners++;
  
      // update win count to page
      $("#wins").text(winner);
  
      // Restart the game
      startGame();
    }
  
  };
  
  // adding the crystal values together
  var addCrystals = function(randCrystal) {
  
    // update userSum
    userSum += randCrystal.value;
  
    // Updates userSum on page
    $("#userSum").text(userSum);
  
    // make sure to CALL winner funcion after adding crystals process has completed
    winner();
  };
  
  // First start to the game
  startGame();
  
  $("#t1").click(function() {
    addCrystals(crystal.pink);
  });
  
  $("#t2").click(function() {
    addCrystals(crystal.yellow);
  });
  
  $("#t3").click(function() {
    addCrystals(crystal.green);
  });
  
  $("#t4").click(function() {
    addCrystals(crystal.blue);
  });