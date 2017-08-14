//SUPERHERO TRIVIA TIME GAME
//The user will be asked a series of questions with 4 possible answers
//A timer will count down from 20 seconds.
//The user will have to pick the correct answer before the timer reaches 00:00
//If the user answers correctly within the time limit, an image appears and the correct answer is logged.
//If the user answers wrong, an image appears and the wrong answer is logged
//At the end of the game, the board is cleared and the number of correct and incorrect answers is shown.
//Give a reset button at the end of the game to reset the game without refreshing the browser.


//THINGS I'LL NEED...
	//Randomly select the questions from an array(?) or empty string(?) or empty object(?).
	//Cross reference the random questions so no question is duplicated during the current game
	//Right answer counter
	//Wrong answer counter
	//Countdown clock
	//Time out equal to the countdown timer
	//Cancel time out option once user picks an answer
	//Click event to choose and answer

//********************************************************************************************************
//********************************************************************************************************

// VARIABLES
window.onload = function() {
	// $("#answer1").click(xxxxxxxxx);
	// $("#answer2").click(xxxxxxxxx);
	// $("#answer3").click(xxxxxxxxx);
	// $("#answer4").click(xxxxxxxxx);
	$("#next").click(reset);	// This needs to change be hidden until the last screen with scores is shown
};	

	var number = 20;
	var intervalId;  // Not sure how to correctly use this.  I know I have to use it with the setInterval, but how...
	// var clockRunning = false;  // Don't think I need this anymore since I changed the countdown timer.
	var right = 0;
	var wrong = 0;
	// var userGuess = .click();  // This isn't even a real thing... SERENITY NOW!!!!!
	var questions = [wonderWoman, spiderMan, nightCrawler]; // Possibly use this to cycle through the questions with a for loop to know when game is over?

	var question = {} // Thought making an empty object for the question would be a good idea, just not sure how to use.

	// QUESTION SUBJECT OBJECTS
	// Thought this would be the most efficient way of declaring and passing in the varible to the var question object. Don't know how to do that though
	var wonderWoman = {
		question: "This superhero's supertools included bullet-proof bracelets and a magic lasso. Who is she?",
		answer: "Wonder Woman",
		options: ["Batgirl", "Catwoman", "Mystique"],
	}

	var spiderMan = {
		question: "How did Spider-Man get his superpowers?",
		answer: "He was bitten by a radioactive spider",
		options: ["He was bombarded by cosmic rays", "He was born with his powers", "He was caught in a chemical explosion"],
	}

	var nightCrawler = {
		question: "This superhero is able to teleport and speaks fluent German. Who is he?",
		answer: "Nightcrawler",
		options: ["The Red Baron", "Dr. Strange", "Vision"],
	}

	// var answer1Options = ["Wonder Woman", "Storm", "Batgirl", "Catwoman"];

	// var clock = {
	// 		time: 5,

	// 		reset: function() {
	// 			clock.time = 5;
	// 			$("#timer").html(5);
	// 		}, // closes reset function

	// 		count: function() {
	// 			clock.time--; //reduces counter by 1
	// 			var currentTime = clock.time;
	// 			$("#timer").html(currentTime);
	// 		}, //closes count function

	// 		start: function() {
	// 			if(!clockRunning) {
	// 				intervalId = setInterval(clock.count, 1000);
	// 				clockRunning = true;
	// 				alert("timer started");
	// 			} else if(clock.time === 0) {
	// 				clock.stop();
	// 			}
	// 			// if (clock.time === 0) {
	// 			// 	clearInterval(intervalId);
	// 		},

	// 		stop: function() {
	// 			clearInterval(intervalId);
	// 		}
	// } // closes var timer


//***********************************************************************************************************
//***********************************************************************************************************

//FUNCTIONS
//***********************************************************************************************************
//***********************************************************************************************************
	// Had to take from In-Class activity #9 from 8/10/2017 because I couldn't get the above clock object to 
	// stop at zero. I don't think this is right, but I don't know what else to do. I think these should all
	// go in an object, but unsure how to do it to keep it working.  Works now, but have to call individual 
	// functions at the bottom.

	 function run() {
      intervalId = setInterval(decrement, 1000);
      $("#timer").css("color", "white").html("<h1>" + number + "</h1>");
    }

    function decrement() {
      number--;
      $("#timer").html("<h1>" + number + "</h1>");
      if(number <= 15) {
      	$("#timer").css("color", "yellow").html("<h1>" + number + "</h1>");
      }

      if(number <= 10) {
      	$("#timer").css("color", "red").html("<h1>" + number + "</h1>");
      }

      if(number === 0) {
        stop();
        $("#timer").css("color", "red").html("<h1>Time Up!</h1>");
        wrong++;
      }
    }

    function stop() {
      clearInterval(intervalId);
    }

    function reset() {
    	number = 20;
		$("#timer").html(20);
		run();
    }
//**********************************************************************************************************
//**********************************************************************************************************
	function questionOne() {
		$("#question").text(spiderMan.question);
		$("#answer1").text(spiderMan.options[0]);
		$("#answer2").text(spiderMan.answer);
		$("#answer3").text(spiderMan.options[1]);
		$("#answer4").text(spiderMan.options[2]);
		// if ("#answer2") === spiderMan.answer) {
		// 	alert("You Win");
		// }
	}

	// Used these to check onscreen functionality, but not the right solution for the game since it will have
	// to be hard coded into the end of each question to move on... it think.  Feel like a dog chasing my tail...
	questionOne();
	run();


	// ON CLICK FOR EACH QUESTION
	// Don't even remember what I was trying to do here... register a click maybe?  
	$(".list-group-item").on("click", function () {

	});