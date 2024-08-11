let quotedisplay = document.getElementById('hhh');

let quotes = [
  'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.',
  'You cannot believe in God until you believe in yourself.',
  'You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.',
  'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
  'Truth can be stated in a thousand different ways, yet each one can be true.',
  'Arise! Awake! And stop not until the goal is reached.',
  'Books are infinite in number and time is short. The secret of knowledge is to take what is essential. Take that and try to live up to it.',
];

function QuoteGenerator() {
  let number = Math.floor(Math.random() * (quotes.length - 0) + 0);
  quotedisplay.innerHTML = quotes[number];
}
