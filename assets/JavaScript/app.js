(document).ready(function(){
    $("#start-button").click(function(){

        
        var number = 50;
        alert("BEGIN!");
      $("#start-button").on("click", start);  // starts the games 
      $("#submit").on("click", finish);  // submits answers and finishes the game
      $("#restart").on("click", restart);  // restarts the games 
  