  var answers = ["d","b","c","a","b","b"];

$(document).ready(function(){

   $("#start-button").ready(function(){
        $("#quiz").hide();
        $("#resultScore").hide();
     });
      $("#start-button").click(function(){
        $("#quiz").show();
     });

     var startNumber = 30;

     var intervalId;

    $("#start-button").on("click", run);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    // //  The decrement function.Decreases startNumber by one.
    //   //  Show the number in the #number-display tag
    function decrement() {
      startNumber--;
      $(".number-display").html("<h2>" + "Time Remaining: " + startNumber + "</h2>");
  }

// GET RESULTS FROM SELECTED ANSWERS //


  $("#done").on("click", function(){
    r = getScore();
    console.log("correct: " + r[0]);
    console.log("incorrect: " + r[1]);
    console.log("unanswered: " + r[2]);
    $("#quiz").hide();
    $("#resultScore").show();
    var resultText = "Correct: " + r[0] + "<br>Incorrect: " + r[1] + "<br>Unanswered: " + r[2];
    document.querySelector('#resultScore').innerHTML = resultText;


  });

    function getScore(){
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var numberUnanswered = 6;
    for (var i=1; i<7; i++) {
      question = "q"+i;
      radios = document.getElementsByName(question);
      for (var j=0; j<radios.length; j++) {
      if(radios[j].checked === true) {
        numberUnanswered--;
        if(radios[j].value == answers[i-1]) {numberCorrect++;} else {numberIncorrect++;}
        console.log(i);
        console.log(j);
      }

      }
    }
    return [numberCorrect, numberIncorrect, numberUnanswered];
  }


  });

