const paper = "paper";
const rock = "rock";
const scissors = "scissors";
const draw = "Draw";
const win = "Win";
const lose = "Lose";
const computer_move_id = "computer_move";
const result_id = 'result';

function game_logic(p, c) {
  let game_decision;
  if (p == c) {
    game_decision = draw;
  } else if (
    (p == rock && c == scissors) ||
    (p == paper && c == rock) ||
    (p == scissors && c == paper)
  ) {
    game_decision = win;
  } else {
    game_decision = lose;
  }
  console.log(game_decision);
  document.getElementById(result_id).innerText = game_decision;
}

function c_choice_generator() {
  let r = Math.random();
  let computer_choice = null;
  if (r < 0.33) {
    computer_choice = paper;
  } else if (r < 0.66) {
    computer_choice = rock;
  } else {
    computer_choice = scissors;
  }
  document.getElementById(computer_move_id).src =
    computer_choice === scissors
      ? `./images/${computer_choice}.jpeg`
      : `./images/${computer_choice}.jpg`;
  return computer_choice;
}


function get_input(event) {
  let c_choice = c_choice_generator();
  console.log(c_choice);
  let p_choice = event.target.parentElement.id;
  console.log(p_choice);
  game_logic(p_choice, c_choice);
}

