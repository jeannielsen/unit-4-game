  // set variables to zero

  var xtalNumber = 0;
  var wins = 0;
  var losses = 0;

  // set variable for crystals to random whole between 1-10

  var purpleCrystal = Math.floor(Math.random() * 10 + 1)
  var greenCrystal = Math.floor(Math.random() * 10 + 1)
  var blueCrystal = Math.floor(Math.random() * 10 + 1)
  var dkpurpleCrystal = Math.floor(Math.random() * 10 + 1)


// generate random whole number for target number between 1-80

$(document).ready(function () {
  var Random = Math.floor(Math.random() * 81 + 1)
  $('#targetNumber').text(Random);



  // set variable to html text
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);


  // reset the target number and crystal numbers to new random number.  Reset crystal total to zero. Send crystal final number to html.

  function reset() {
   // Random === 0;
    Random = Math.floor(Math.random() * 80 + 1);
    $('#targetNumber').text(Random);
    purpleCrystal = Math.floor(Math.random() * 10 + 1);
    greenCrystal = Math.floor(Math.random() * 10 + 1);
    blueCrystal = Math.floor(Math.random() * 10 + 1);
    dkpurpleCrystal = Math.floor(Math.random() * 10 + 1);
    xtalNumber = 0;
    $('.xtalNumber').text(xtalNumber);
  }

  //alert user of win, add 1 to win total

  function won() {
    alert("Winner!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }

  //alert user of loss, add 1 to loss total
  function loss() {
    alert("You lost!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }

  // on click make total crystal number equal to total crystal number plus the crystal value.  Assign value to crystal number total on html.  Repeat for each crystal

  $('#purple').on('click', function () {
    xtalNumber = xtalNumber + purpleCrystal;
    $('.xtalNumber').text(xtalNumber);

    if (xtalNumber === Random) {
      won();
    }
    else if (xtalNumber > Random) {
      loss();
    }
  })
  $('#green').on('click', function () {
    xtalNumber = xtalNumber + greenCrystal;
    $('.xtalNumber').text(xtalNumber);
    if (xtalNumber === Random) {
      won();
    }
    else if (xtalNumber > Random) {
      loss();
    }
  })
  $('#blue').on('click', function () {
    xtalNumber = xtalNumber + blueCrystal;
    $('.xtalNumber').text(xtalNumber);

    if (xtalNumber === Random) {
      won();
    }
    else if (xtalNumber > Random) {
      loss();
    }
  })
  $('#dkpurple').on('click', function () {
    xtalNumber = xtalNumber + dkpurpleCrystal;
    $('.xtalNumber').text(xtalNumber);

    if (xtalNumber === Random) {
      won();
    }
    else if (xtalNumber > Random) {
      loss();
    }
  });
});







