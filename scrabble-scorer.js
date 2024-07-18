// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word to score: ");
      
      let score = oldScrabbleScorer(word);
   
   console.log(`Points for '${word}' : ${score}`);
};

function simpleScorer(word) {

   return word.length;
}

function vowelBonusScorer(word) {
   const vowels = 'aeiouAEIOU';
   let score = 0;

   for (let letter of word) {
       if (vowels.includes(letter)) {
           score += 3;
       } else {
           score += 1;
       }
   }

   return score;
}

const scoringAlgorithms = [
   {
       name: 'Scrabble',
       description: 'The traditional scoring algorithm',
       scorerFunction: oldScrabbleScorer
   },
   {
       name: 'Simple Score',
       description: 'Each letter is worth 1 point',
       scorerFunction: simpleScorer
   },
   {
       name: 'Bonus Vowels',
       description: 'Vowels are worth 3 pts, and consonants are 1 pt',
       scorerFunction: vowelBonusScorer
   }
];



let newPointStructure;

let simpleScorer;

let vowelBonusScorer;

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
