//SUPERHERO TRIVIA TIME GAME
//The user will be asked a series of questions with 4 possible answers
//A timer will count down from 20 seconds.
//The user will have to pick the correct answer before the timer reaches 00:00
//If the user answers correctly within the time limit, an image appears and the correct answer is logged.
//If the user answers wrong, an image appears and the wrong answer is logged
//At the end of the game, the board is cleared and the number of correct and incorrect answers is shown.
//Give a reset button at the end of the game to reset the game without refreshing the browser.


//THINGS I'LL NEED...
	//Randomly select the questions from an array(?).
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
	$("#next").click(clock.reset);	
};	

	var intervalId;
	var clockRunning = false;
	var right = 0;
	var wrong = 0;
	
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

	var nighCrawler = {
		question: "This superhero is able to teleport and speaks fluent German. Who is he?",
		answer: "Nightcrawler",
		options: ["The Red Baron", "Dr. Strange", "Vision"],
	}

	// var answer1Options = ["Wonder Woman", "Storm", "Batgirl", "Catwoman"];

	var clock = {
			time: 20,

			reset: function() {
				clock.time = 20;
				$("#timer").html(20);
			}, // closes reset function

			count: function() {
				clock.time--; //reduces counter by 1
				var currentTime = clock.time;
				$("#timer").html(currentTime);
			}, //closes count function

			start: function() {
				if(!clockRunning) {
					intervalId = setInterval(clock.count, 1000);
					clockRunning = true;
				}
			},

	} // closes var timer


//***********************************************************************************************************
//***********************************************************************************************************

//FUNCTIONS

	function questionOne() {
		$("#question").text(wonderWoman.question);
		$("#answer1").text(wonderWoman.options[0]);
		$("#answer2").text(wonderWoman.answer);
		$("#answer3").text(wonderWoman.options[1]);
		$("#answer4").text(wonderWoman.options[2]);

	}
	questionOne();


// ON CLICK FOR EACH QUESTION
	$(".list-group-item").on("click", function () {

	});