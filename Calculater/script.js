let display = document.querySelector('#display');

function Calculation() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = '🖕 calculate things in proper way';
  }
}

function appendNumber(inp) {
  display.value += inp;
}

function Clear() {
  document.querySelector('#display').value = '';
}
