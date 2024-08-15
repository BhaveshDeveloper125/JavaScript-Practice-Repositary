const buttons = document.querySelectorAll('.gameButton');

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    disableButtons();
  });
});

function Rock() {
  let computer = Math.floor(Math.random() * (3 - 1) + 1);
  console.log(computer);
  if (computer == 1) {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose Paper and Computer Wins😔😔😔`;
    //     console.log(`Computer : ${computer} Paper and computer wins`);
  } else {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose scissor and you Win🥳🥳🥳`;
    //     console.log(`Computer : ${computer} scissor and User Wins`);
  }
  let resetButton = document.querySelector('#reset');
  resetButton.style.display = 'block';
}

function Paper() {
  let computer = Math.floor(Math.random() * (3 - 1) + 1);
  //   console.log(computer);
  if (computer == 1) {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose scissor and Computer Wins😔😔😔`;
    //     console.log(`Computer : ${computer} Paper and computer wins`);
  } else {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose rock and you Win🥳🥳🥳`;
    //     console.log(`Computer : ${computer} scissor and User Wins`);
  }
  let resetButton = document.querySelector('#reset');
  resetButton.style.display = 'block';
}

function Scissor() {
  let computer = Math.floor(Math.random() * (3 - 1) + 1);
  //   console.log(computer);
  if (computer == 1) {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose rock and Computer Wins😔😔😔`;
    //     console.log(`Computer : ${computer} Paper and computer wins`);
  } else {
    document.querySelector(
      '#results',
    ).textContent = `Computer chose paper and you Win🥳🥳🥳`;
    //     console.log(`Computer : ${computer} scissor and User Wins`);
  }
  let resetButton = document.querySelector('#reset');
  resetButton.style.display = 'block';
}
