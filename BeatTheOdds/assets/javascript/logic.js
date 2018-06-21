//Global variables
var timeLeft = 60;
var intervalId;
var currentBet = 0;
var payout = 1;
var multiplier = 3;

//Initialize function
function startGame() {
    var timeLeft = 60;
    timer();
    run();
}

//Timer functions
function timer() {
    timeLeft--;
    $("#timeleft").html("Time Left: "+ timeLeft + " seconds");   

    if (timeLeft === 0) {
      stop();
    }
  }

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalId);
}
//End timer functions

//Payout mechanics
function payoutMath() {
    payout = currentBet * multiplier;
    $('#payout').text(payout);
}

function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

$(document).ready(function(){
//Begin betting mechanics
$('#twentychipbtn').on('click', function() {
    currentBet = currentBet + 20;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      twentychipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) clearInterval(timer);

    }, 20);

})
$('#fiftychipbtn').on('click', function() {
    currentBet = currentBet + 50;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      fiftychipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) clearInterval(timer);

    }, 20);
})
$('#hundredchipbtn').on('click', function() {
    currentBet = currentBet + 100;
    console.log(currentBet);
    $('#current-bet').text(currentBet);
    payoutMath();

    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      hundredchipbtn.style.left = timePassed / 5 + 'px';

      if (timePassed > 1000) clearInterval(timer);

    }, 20);
})

$('#footballtracker').on('click', function() {
    //Animation
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      footballtracker.style.left = timePassed / 5 + 'px';

      if (timePassed > 3250) clearInterval(timer);

    }, 20);
  })
  });


