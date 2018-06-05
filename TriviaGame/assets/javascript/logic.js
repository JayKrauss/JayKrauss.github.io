var timeLeft = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var currentQ;
var checkedValue;
var radioObj;
var intervalId;
var totalQuestions = 0;

var questions = [q1, q2, q3, q4, q5, q6]

var startGame = function() {
    q1();
    currentQ = 1;
    timeLeft = 60;
    correctAnswers = 0;
    wrongAnswers = 0;
    $('#numbercorrect').text(correctAnswers);
    $('#numberincorrect').text(wrongAnswers);
    $('#homer').text("Any key? Which one's the any key?");
    $('#homerface').html("<img src='assets/images/homerthink2.jpg'>");
    $('#start').trigger('play');
    timer();
    run();
}

function endGame() {
    $('#homer').text("Game over, man! Game over!");
    $('#homerface').html("<img src='assets/images/gameover.jpg'>");
    $('#questions').html(
        "<br><br><br>" +
        "<center>" +
        "<h1>Well, I'm, sure you tried your best.</h1>" +
        "<h4>Press Start to Try Again!</h4>" +
        "</center>"
    )
}

function timer() {
    timeLeft--;
    $("#timeleft").html("Time Left: "+ timeLeft + " seconds");   
    
    if (timeLeft === 0) {
      stop();
      endGame();
    }
  }

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalId);
}

var nextQ = function() {
    check();
    totalQuestions = totalQuestions + 1;
    console.log(totalQuestions);
    cycle();
    }

function cycle() {
    if (totalQuestions === 1) {
        q2();
    }
    else if (totalQuestions === 2) {
        q3();
    }
    else if (totalQuestions === 3) {
        q4();
    }
    else if (totalQuestions === 4) {
        q5();
    }
    else if (totalQuestions === 5) {
        q6();
    }
    else if (totalQuestions === 6) {
        q7();
    }
    else if (totalQuestions === 7) {
        q8();
    }
    else if (totalQuestions === 8) {
        q9();
    }
    else if (totalQuestions === 9) {
        q10();
    }
    else if (totalQuestions === 10) {
        q11();
    }
    else if (totalQuestions === 11) {
        q12();
    }
    else if (totalQuestions === 12) {
        q13();
    }
    else if (totalQuestions === 13) {
        q14();
    }
    else if (totalQuestions === 14) {
        q15();
    }
    else if (totalQuestions === 15) {
        endGame();
    }

}

function check() {
    getCheckedValue();
    console.log(checkedValue);

 if (checkedValue == 0) {
     win();
     $('#woohoo').trigger('play');
 }
 else if (checkedValue == 1) {
     loss();
     $('#doh').trigger('play');
 }
}

function getCheckedValue() {
    var choice = document.getElementsByName('choice');
    if(choice[0].checked){
        checkedValue = choice[0].value;
    }
    if(choice[1].checked){
        checkedValue = choice[1].value;
    }
    if(choice[2].checked){
        checkedValue = choice[2].value;
    }
    if(choice[3].checked){
        checkedValue = choice[3].value;
    }
}

function win(){
    $('#homer').text('Woohoo!')
    $('#homerface').html("<img src='assets/images/woohoowin.jpg'>")
    correctAnswers = correctAnswers + 1;
    $('#numbercorrect').text(correctAnswers);
}

function loss(){
    $('#homer').text("D'oh!")
    $('#homerface').html("<img src='assets/images/dohloss.jpg'>")
    wrongAnswers = wrongAnswers + 1;
    $('#numberincorrect').text(wrongAnswers);
}

function q1(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>What is Homer Simpson's middle name?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Bartholomew" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Abraham" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Jay" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Jessica" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q2(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Who founded Springfield?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Abraham Simpson" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Jebediah Springfield" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Hans Springfield" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1''> Mr. Burns" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q3(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Which of the following is not a Bart catchphrase?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Ay, Caramba!" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Don't have a cow, man!" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Did I do that?" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Eat my shorts!" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q4(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>What is the name of Ned Flander's store at the Springfield Mall?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Southpaw Central" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> The Leftorium" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Holy Lefties" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> The Hi-Diddly-Ho Mart" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q5(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>What number is the current Snowball owned by the Simpson family?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> I" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> III" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> V" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> VIII" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q6(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Who won the Springfield Marathon?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Bart" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Apu" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Homer" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Milhouse" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q7(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Who shot Mr. Burns?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Maggie" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Bart" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Smithers" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Snake" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q8(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>What was Maggie Simpsons first word?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Mama" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Daddy" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> D'oh!" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Liza" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q9(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>How many points does Bart's hair have?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Eleven" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Six" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Twenty Three" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Nine" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q10(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>What is Comic Book Guy's real name?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Jeff Albertson" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Marv Springsteen" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Jack Black" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> John Winters" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q11(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Who co-wrote the song Do The Bartman?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Mike Perry" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> John Williams" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Michael Jackson" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Matt Groenig" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q12(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>How many children do Cleetus and Brandine have?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 23" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 12" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> 44" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 6" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q13(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Which character has dialog in every episode?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Marge" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Homer" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Apu" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Bart" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q14(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>Who was the first Beatle to appear on the show?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> Ringo" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> Paul" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> John" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> George" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}
function q15(){
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3>How many episodes are there currently?</h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 634" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 754" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='0'> 574" +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1'> 475" +
        "</label><br>" +
    "</div>" +
    "</div>" 
    )
}