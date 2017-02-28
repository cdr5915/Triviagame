$(document).ready(function(){
	 $("#start-button").ready(function(){
        $("#quiz").hide();
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

  });


