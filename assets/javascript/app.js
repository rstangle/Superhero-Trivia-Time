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

//********************************************************************************************************
//********************************************************************************************************

// VARIABLES
window.onload = function() {

	$("#next").click(reset);	// This needs to change to be hidden until the last screen with scores is shown
};	

	var number = 20;
	var intervalId;  // Not sure how to correctly use this.  I know I have to use it with the setInterval, but how...
	// var clockRunning = false;  // Don't think I need this anymore since I changed the countdown timer.
	var right = 0;
	var wrong = 0;
	// var userGuess = .click();  // This isn't even a real thing... SERENITY NOW!!!!!
	
	// Possibly use this to cycle through the questions with a for loop to know when game is over?
	var questionBank = []; 

	// var answerBank = [];

	// questionNumber is the same as round 1, round 2, round 3... Increments with the questionBank array index values.
	// the mechanism to change questions.
	var questionNumber = 0; 

	// QUESTION SUBJECT OBJECTS
	// Thought this would be the most efficient way of declaring and passing in the varible to the var question object. Don't know how to do that though
	var wonderWoman = {
		question: "My supertools included bullet-proof bracelets and a magic lasso. Who am I?",
		answer: "Wonder Woman",
		options: ["Wonder Woman","Batgirl", "Catwoman", "Mystique"],
	}
	questionBank.push(wonderWoman);

	var spiderMan = {
		question: "How did Spider-Man get his superpowers?",
		answer: "He was bitten by a radioactive spider",
		options: ["He was bitten by a radioactive spider","He was bombarded by cosmic rays", "He was born with his powers", "He was caught in a chemical explosion"],
	}
	questionBank.push(spiderMan);

	var nightCrawler = {
		question: "I am able to teleport and I have a prehensile tail. Wer bin ich?",
		answer: "Nightcrawler",
		options: ["Nightcrawler","The Red Baron", "Dr. Strange", "Vision"],
	}
	questionBank.push(nightCrawler);

	var professorX = {
		question: "I am the world's most powerful telepath and opened a school for other Gifted Individuals. Who am I?",
		answer: "Charles Xavier",
		options: ["Charles Xavier","Jean Grey", "Adam Warlock", "Emma Frost"],
	}
	questionBank.push(professorX);
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

	// TIMER FUNCTIONS***************************************************************************************
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
	// LOOP to randomize the answers
	// for(var i = 0; i < spiderMan.options.length; i++) {
	// 	var random = Math.floor(Math.random() * 4);
	// }


//**********************************************************************************************************

// within in function need conditional to check if current counter number is equal to questionBank.length, 
//no more questions available 

	function questionOne() {
		// console.log(this.questionBank);
		$("#question").text(questionBank[questionNumber].question);
		$("#answer1").text(questionBank[questionNumber].options[0]);
		$("#answer2").text(questionBank[questionNumber].options[1]);
		$("#answer3").text(questionBank[questionNumber].options[2]);
		$("#answer4").text(questionBank[questionNumber].options[3]);
		// $("#question").text(spiderMan.question);
		// $("#answer1").text(spiderMan.options[0]);
		// $("#answer2").text(spiderMan.options[1]);
		// $("#answer3").text(spiderMan.options[2]);
		// $("#answer4").text(spiderMan.options[3]);
		// if ("#answer2") === spiderMan.answer) {
		// 	alert("You Win");
		// }
		reset();
	}

	// Used these to check onscreen functionality, but not the right solution for the game since it will have
	// to be hard coded into the end of each question to move on... it think.  Feel like a dog chasing my tail...
	questionOne();
	// run();

//**************************************************************************************************************
//**************************************************************************************************************
	
	// ON CLICK FOR EACH QUESTION
	// This seems to be working... for now. The clicks register the answer choices for the varying objects.
	$(".list-group-item").on("click", function () {
		var answer1 = $("#answer1");
		answer1.attr("data-answer", questionBank[questionNumber].answer);
    	
    	var answer2 = $("#answer2");
    	answer2.attr("data-answer", questionBank[questionNumber].options[1]);

    	var answer3 = $("#answer3");
    	answer3.attr("data-answer", questionBank[questionNumber].options[2]);

    	var answer4 = $("#answer4");
    	answer4.attr("data-answer", questionBank[questionNumber].options[3]);

		var answerValue = ($(this).attr("data-answer"));
		console.log("Answer: " + answerValue)

		// I think this is where my image code will need to go

		// Currently registering every pick as the wrong answer.  From Stack Overflow so not sure if I used it right.
		// answer1 = false;
		// $("#answer1").click(function () {
		// 	answer1 = true;
		// });

		// if(answer1 = true) {
		// 	console.log("You're Right Web Head!");
		// 	right++;
		// 	console.log("Right: " + right); 
		// 	stop();
		// } else {
		// 	console.log("Better Luck Next Time");
		// 	wrong++;
		// 	console.log("Wrong: " + wrong);
		// 	stop();
		// }

		// FINALLY FIGURED THIS OUT... DAN HELPED ME TO MAKE IT UNIVERSAL TO ALL OBJECTS
		if(answerValue === questionBank[questionNumber].answer) {
			console.log("You're Right!");
			right++;
			console.log("Right: " + right); 
			questionNumber++;
			stop();
			if(questionNumber < questionBank.length ) {
				questionOne();
			} else {
				// gameover code that needs to be written
			}
		} else if(number === 0) {
			console.log("Better Luck Next Time");
			wrong++;
			console.log("Wrong: " + wrong);
			questionNumber++;
			stop();
			if(questionNumber < questionBank.length ) {
				questionOne();
			} else {
				// gameover code that needs to be written
			}
		} else {
			console.log("Better Luck Next Time");
			wrong++;
			console.log("Wrong: " + wrong);
			questionNumber++;
			stop();
			if(questionNumber < questionBank.length) {
				questionOne();
			} else {
				// gameover code that needs to be written
			}
			// stop();
		}
	});
//************************************************************************************************************
//************************************************************************************************************
	// Found on Stack Overflow... might be helpful

	//Simply if an element isn't being clicked on, do a setInterval to continue the process until clicked.

	// var checkClick = setInterval(function()
	// {
	//     // do something when the element hasn't been clicked yet
	// }, 2000); // every 2 seconds

	// jQuery('#id').click(function()
	// {
	//     clearInterval(checkClick); // this is optional, but it will
	//                                // clear the interval once the element
	//                                // has been clicked on

	//     // do something else
	// })