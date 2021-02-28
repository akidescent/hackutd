function check(){
  //alert("window notif");
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var susPoint = 0;

  if(question1 == "1A"){
    susPoint++;
  }
  if(question2 == "2B"||question2 == "2A" ){
    susPoint++;
  }
  if(question3 == "3B" || question3 == "3C"){
    susPoint++;
  }
  if(question4 == "4A"){
    susPoint++;
  }

  var messages = ["Maybe you can take a look at how you can change your lifestyle habits in order to save the environment.",
  "Wow, you have made a lot of good decisions! Continue to make better choices that help the environment and the people around you."];
  var range;

  if(susPoint <= 2){
    range = 0;
  }
  if(susPoint > 2 ){
    range = 1
  }




  document.getElementById("after_submit").style.visibility = "visible";


  document.getElementById("num_correct").innerHTML = "Thanks for completing the quiz!\nYou have made " + susPoint +" sustainable decisions!";
  document.getElementById("message").innerHTML = messages[range];
}
