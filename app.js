// Guessing Game :
// Ask an user for an range , as he enter the range our code will generate the 1 to 10 random numbers
// if the user guess the right number then he will won the game otherwise again and again
// <------------------------------------------------------------------------------------------------->

// const maxNum = prompt("Enter a max Number to Guess");
// const randNum = Math.floor(Math.random() * maxNum) + 1;
// console.log(`random num is = ${randNum}`);
// let userGuess = prompt("Guess the random number");
// while (true) {
//   if (userGuess == "quit") {
//     console.log("we are quiting the game");
//     break;
//   }

//   if (userGuess == randNum) {
//     console.log(
//       `congrats ! you guess the correct number , Guess No is = ${randNum}`,
//     );
//     break;
//   } else if (userGuess != randNum) {
//     userGuess = prompt("wrong! please try again");
//   }
// }

// <--------------------------------------------->
// let make it moree easy for user .............

const maxNum = prompt("Enter a max Number to Guess");
const randNum = Math.floor(Math.random() * maxNum) + 1;

let userGuess = prompt("Guess the random number");
while (true) {
  if (userGuess == "quit") {
    console.log("we are quiting the game");
    break;
  }

  if (userGuess == randNum) {
    console.log(
      "congrats ! you enter the correct value , GuessNum = ",
      randNum,
    );
    break;
  } else if (userGuess < randNum) {
    userGuess = prompt("Hint :Your guess was small, please try again");
  } else {
    userGuess = prompt("Hint :Your guess was large, please try again");
  }
}
