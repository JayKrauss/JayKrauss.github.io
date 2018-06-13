var timeLeft = 60;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var currentQ;
var checkedValue;
var radioObj;
var intervalId;
var totalQuestions = 0;

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

var startGame = function() {
    q1();
    currentQ = 1;
    timeLeft = 120;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalQuestions = 0;
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

    if (correctAnswers <= 5) {
       character();
       $('#charactername').text('You are a Ralph!')
       $('#characterpicture').html(
           "<img src=assets/images/ralphend.png>"
       )
    }
     else if (correctAnswers > 5 && correctAnswers <= 10) {

       character();
       $('#charactername').text('You are a Nelson!')
       $('#characterpicture').html(
           "<img src=assets/images/nelsonend.png>"
       )
    
    }
    else if (correctAnswers > 10 && correctAnswers <= 12) {
        character();
       $('#charactername').text('You are a Milhouse!')
       $('#characterpicture').html(
           "<img src=assets/images/milhouseend.png>"
       )
    }
    else if (correctAnswers > 12 && correctAnswers <= 15) {
        character();
       $('#charactername').text('You are a Homer!')
       $('#characterpicture').html(
           "<img src=assets/images/homerend.png>"
       )
    }
    else if (correctAnswers > 15 && correctAnswers <= 17) {
        character();
       $('#charactername').text('You are a Bart!')
       $('#characterpicture').html(
           "<img src=assets/images/bartend.png>"
       )
    }

    else if (correctAnswers > 17 && correctAnswers <= 19) {
        character();
       $('#charactername').text('You are a Comicbook Guy!')
       $('#characterpicture').html(
           "<img src=assets/images/comicend.png>"
       )
    }
    
    else if (correctAnswers = 20) {
        character();
        $('#charactername').text('You are a Frink!')
        $('#characterpicture').html(
            "<img src=assets/images/frinkend.png>"
        )
    }
    
    $('#anykey').trigger('play');
    $('#homer').text("Any key? Which one's the any key?");
    $('#homerface').html("<img src='assets/images/homerthink2.jpg'>");
    stop();
    
}

function character() {
    $('#questions').html(
        "<br><br><center>" +
        "<div class='container centered'> <div class='row'>" +
        "<div class='col-6 col-sm-6'>" +
        "<h4>You scored: " + correctAnswers + "</h4>" +
        "<h4 id='charactername'></h4><br>" +
        "<h4>Press Start to Try Again!</h4>" +
        "</div>" +
        "<div class='col-6 col-sm-6' id='characterpicture'></div>" +
        "</div></div><br>" 
    )
}

function questionForm() {
    $('#questions').html(
        "<br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h3 id='questionLine'></h3>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer1radio'> <span id='answer1text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer2radio'> <span id='answer2text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer3radio'> <span id='answer3text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer4radio'> <span id='answer4text'></span> " +
        "</label><br>" +
    "</div>" +
    "</div>" 
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
        q16();
    }
    else if (totalQuestions === 16) {
        q17();
    }
    else if (totalQuestions === 17) {
        q18();
    }
    else if (totalQuestions === 18) {
        q19();
    }
    else if (totalQuestions === 19) {
        q20();
    }
    else if (totalQuestions === 20) {
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
    questionForm();
    $('#questionLine').text('What is Homer Simpsons middle name?')
    $('#answer1text').html('Bartholomew');
    $('#answer1radio').val(1);
    $('#answer2text').html('Abraham');
    $('#answer2radio').val(1);
    $('#answer3text').html('Jay');
    $('#answer3radio').val(0);
    $('#answer4text').html('Jessica');
    $('#answer4radio').val(1);
   
}
function q2(){
    questionForm();
    $('#questionLine').text('Who founded Springfield?')
    $('#answer1text').html('Abraham Simpson');
    $('#answer1radio').val(1);
    $('#answer2text').html('Jebediah Springfield');
    $('#answer2radio').val(0);
    $('#answer3text').html('Hans Springfield');
    $('#answer3radio').val(1);
    $('#answer4text').html('Mr. Burns');
    $('#answer4radio').val(1);
}
function q3(){
    questionForm();
    $('#questionLine').text('Which of the following is not a Bart catchphrase?')
    $('#answer1text').html('Ay, Caramba!');
    $('#answer1radio').val(1);
    $('#answer2text').html('Dont have a cow, man!');
    $('#answer2radio').val(1);
    $('#answer3text').html('Did I do that?');
    $('#answer3radio').val(0);
    $('#answer4text').html('Eat my shorts!');
    $('#answer4radio').val(1);
}

function q4(){
    questionForm();
    $('#questionLine').text('What is the name of Ned Flanders store at the Springfield Mall?')
    $('#answer1text').html('Southpaw Central');
    $('#answer1radio').val(1);
    $('#answer2text').html('The Leftorium');
    $('#answer2radio').val(0);
    $('#answer3text').html('Holy Lefties');
    $('#answer3radio').val(1);
    $('#answer4text').html('The Hi-Diddly-Ho Mart');
    $('#answer4radio').val(1);
}

function q5(){
    questionForm();
    $('#questionLine').text('What number is the current Snowball owned by the Simpson family?')
    $('#answer1text').html('I');
    $('#answer1radio').val(1);
    $('#answer2text').html('III');
    $('#answer2radio').val(1);
    $('#answer3text').html('V');
    $('#answer3radio').val(0);
    $('#answer4text').html('VIII');
    $('#answer4radio').val(1);
}

function q6(){
    questionForm();
    $('#questionLine').text('Who won the Springfield Marathon?')
    $('#answer1text').html('Bart');
    $('#answer1radio').val(0);
    $('#answer2text').html('Apu');
    $('#answer2radio').val(1);
    $('#answer3text').html('Homer');
    $('#answer3radio').val(1);
    $('#answer4text').html('Milhouse');
    $('#answer4radio').val(1);
}
function q7(){
    questionForm();
    $('#questionLine').text('Who shot Mr.Burns?')
    $('#answer1text').html('Maggie');
    $('#answer1radio').val(0);
    $('#answer2text').html('Bart');
    $('#answer2radio').val(1);
    $('#answer3text').html('Smithers');
    $('#answer3radio').val(1);
    $('#answer4text').html('Snake');
    $('#answer4radio').val(1);
}

function q8(){
    questionForm();
    $('#questionLine').text('What was Maggie Simpsons first word?')
    $('#answer1text').html('Mama');
    $('#answer1radio').val(1);
    $('#answer2text').html('Daddy');
    $('#answer2radio').val(0);
    $('#answer3text').html('Doh!');
    $('#answer3radio').val(1);
    $('#answer4text').html('Liza');
    $('#answer4radio').val(1);
}

function q9(){
    questionForm();
    $('#questionLine').text('How many points does Barts hair have?')
    $('#answer1text').html('Eleven');
    $('#answer1radio').val(1);
    $('#answer2text').html('Six');
    $('#answer2radio').val(1);
    $('#answer3text').html('Twenty Three');
    $('#answer3radio').val(1);
    $('#answer4text').html('Nine');
    $('#answer4radio').val(0);
}

function q10(){
    questionForm();
    $('#questionLine').text('What is Comic Book Guys real name?')
    $('#answer1text').html('Jeff Albertson');
    $('#answer1radio').val(0);
    $('#answer2text').html('Marv Springsteen');
    $('#answer2radio').val(1);
    $('#answer3text').html('Jack Black');
    $('#answer3radio').val(1);
    $('#answer4text').html('John Winters');
    $('#answer4radio').val(1);
}

function q11(){
    questionForm();
    $('#questionLine').text('Who co-wrote the song Do The Bartman?')
    $('#answer1text').html('Mike Perry');
    $('#answer1radio').val(1);
    $('#answer2text').html('John Williams');
    $('#answer2radio').val(1);
    $('#answer3text').html('Michael Jackson');
    $('#answer3radio').val(0);
    $('#answer4text').html('Matt Groenig');
    $('#answer4radio').val(1);
}

function q12(){
    questionForm();
    $('#questionLine').text('How many children do Cleetus and Brandine have?')
    $('#answer1text').html('23');
    $('#answer1radio').val(1);
    $('#answer2text').html('12');
    $('#answer2radio').val(1);
    $('#answer3text').html('44');
    $('#answer3radio').val(0);
    $('#answer4text').html('6');
    $('#answer4radio').val(1);
}

function q13(){
    questionForm();
    $('#questionLine').text('Which character has dialog in every episode?')
    $('#answer1text').html('Marge');
    $('#answer1radio').val(1);
    $('#answer2text').html('Homer');
    $('#answer2radio').val(0);
    $('#answer3text').html('Apu');
    $('#answer3radio').val(1);
    $('#answer4text').html('Bart');
    $('#answer4radio').val(1);
}

function q14(){
    questionForm();
    $('#questionLine').text('Who was the first Beatle to appear on the show?')
    $('#answer1text').html('Ringo');
    $('#answer1radio').val(0);
    $('#answer2text').html('John');
    $('#answer2radio').val(1);
    $('#answer3text').html('Paul');
    $('#answer3radio').val(1);
    $('#answer4text').html('George');
    $('#answer4radio').val(1);
}

function q15(){
    questionForm();
    $('#questionLine').text('How many episodes are there currently?')
    $('#answer1text').html('634');
    $('#answer1radio').val(1);
    $('#answer2text').html('754');
    $('#answer2radio').val(1);
    $('#answer3text').html('574');
    $('#answer3radio').val(0);
    $('#answer4text').html('475');
    $('#answer4radio').val(1);
}

function q16(){
    questionForm();
    $('#questionLine').text('Who called the show "the dumbest thing Ive ever seen?"')
    $('#answer1text').html('Louis Theroux');
    $('#answer1radio').val(1);
    $('#answer2text').html('Barbara Bush');
    $('#answer2radio').val(0);
    $('#answer3text').html('Seth McFarlane');
    $('#answer3radio').val(1);
    $('#answer4text').html('Hillary Duff');
    $('#answer4radio').val(1);
}

function q17(){
    questionForm();
    $('#questionLine').text('Many characters last names are street names in what city?')
    $('#answer1text').html('Portland, OR');
    $('#answer1radio').val(0);
    $('#answer2text').html('Dallas, TX');
    $('#answer2radio').val(1);
    $('#answer3text').html('Washington, DC');
    $('#answer3radio').val(1);
    $('#answer4text').html('San Diego, CA');
    $('#answer4radio').val(1);
}

function q18(){
    questionForm();
    $('#questionLine').text('How long did it take Danny Elfman to write the theme?')
    $('#answer1text').html('Two Weeks');
    $('#answer1radio').val(1);
    $('#answer2text').html('Thirteen Hours');
    $('#answer2radio').val(0);
    $('#answer3text').html('Two Days');
    $('#answer3radio').val(1);
    $('#answer4text').html('Twenty Minutes');
    $('#answer4radio').val(1);
}

function q19(){
    questionForm();
    $('#questionLine').text('Where do  Kang and Kodos get their names?')
    $('#answer1text').html('A Crichton novel');
    $('#answer1radio').val(1);
    $('#answer2text').html('A marvel comic');
    $('#answer2radio').val(1);
    $('#answer3text').html('A song popularized in the 1930s');
    $('#answer3radio').val(1);
    $('#answer4text').html('Star Trek');
    $('#answer4radio').val(0);
}

function q20(){
    questionForm();
    $('#questionLine').text('How old is Ned Flanders?')
    $('#answer1text').html('46');
    $('#answer1radio').val(1);
    $('#answer2text').html('32');
    $('#answer2radio').val(0);
    $('#answer3text').html('60');
    $('#answer3radio').val(1);
    $('#answer4text').html('55');
    $('#answer4radio').val(1);
}