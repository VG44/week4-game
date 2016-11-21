$(document).ready(function(){
   

    var score = 0;
    var wins = 0;
    var losses = 0;
    
    newCrystals();
    newGame();

    function newCrystals () {
      red = (Math.floor(Math.random()*12)+1);
      blue = (Math.floor(Math.random()*12)+1);
      yellow = (Math.floor(Math.random()*12)+1);
      green = (Math.floor(Math.random()*12)+1);
    }; 
            
    function newGame() {

        score = 0;
        $('#num').html(score);

        var randomguess = (Math.floor(Math.random()*101)+19);

        $('#random').html(randomguess);


        $('.btn').on('click', function(){
            var id = $(this).attr('id');
            if (id ==="red"){
                score += red;
            } else if (id === "blue"){
                score += blue;
            } else if (id === "yellow"){
                score += yellow;
            } else if (id === "green"){
                score += green;
            }

        
            // score = score + red + blue + yellow + green;
            $('#num').html(score);

            if (score === randomguess){
              $('#status').html('You won!!!!');
              wins ++;
              $('#wins').html("Wins: " + wins);
              console.log(wins)
              newCrystals();
              newGame();
                
            } else if ( score > randomguess){
                $('#status').html('You lost!')
                losses ++;
                $('#loss').html("Loss: " + losses);
                console.log(losses)
                newCrystals();
                newGame();
            }
        });
    };

    



});