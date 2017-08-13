$(document).ready(function(){

	//create the objective random number between 30-100

	var Random = Math.floor(Math.random()*70+30)

	//append number to html

	$("#objectiveNumber").text(Random);

	//create random numbers for each crystal

	var crystal1 = Math.floor(Math.random()*16+1)
	var crystal2 = Math.floor(Math.random()*16+1)
	var crystal3 = Math.floor(Math.random()*16+1)
	var crystal4 = Math.floor(Math.random()*16+1)

    //create variables to keep track/score

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //append wins/losses to html

    $("#Wins").text(wins);
    $("#Losses").text(losses);


    //reset game function

    function reset(){
    	Random = Math.floor(Math.random()*70+30);
    	$("#objectiveNumber").text(Random);
    	crystal1 = Math.floor(Math.random()*16+1);
    	crystal2 = Math.floor(Math.random()*16+1);
    	crystal3 = Math.floor(Math.random()*16+1);
    	crystal4 = Math.floor(Math.random()*16+1);
    	userScore = 0;
    	$("#Score").text(userNumber);
    }

    //when user wins

    function victory(){
    	alert ("Victory!");
    	wins++;
    	$("#Wins").text(wins);
    	reset();
    }

    //when user losses

    function lost(){
    	alert ("EPIC FAIL!!!");
    	losses++;
    	$("#Losses").text(losses);
    	reset();
    }
    
    
    //when crystals are clicked

    $("#one").on("click", function(){
    	userScore = userScore + crystal1;
    	$("#Score").text(userScore);
    	//creates win/lose conditions
    	if (userScore == Random){
    		victory();
    	}
    	else if (userScore > Random){
    		lost();
    	}
    })

    $("#two").on("click", function(){
    	userScore = userScore + crystal2;
    	$("#Score").text(userScore);
    	if (userScore == Random){
    		victory();
    	}
    	else if (userScore > Random){
    		lost();
    	}
    })

    $("#three").on("click", function(){
    	userScore = userScore + crystal3;
    	$("#Score").text(userScore);
    	if (userScore == Random){
    		victory();
    	}
    	else if (userScore > Random){
    		lost();
    	}
    })

    $("#four").on("click", function(){
    	userScore = userScore + crystal4;
    	$("#Score").text(userScore);
    	if (userScore == Random){
    		victory();
    	}
    	else if (userScore > Random){
    		lost();
    	}
    });
});	