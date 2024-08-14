function currentTime() {
  var date = new Date();

  var now = date.toLocaleString('en-US', { hour12: false });

  document.getElementById('currentTime').innerHTML = now;
}

setInterval(currentTime, 1);

var alarmSound = new Audio('alarm.mp3');

function setAlarm() {
  var alarmTime = document.getElementById('alarmTime').value;
  var now = new Date();
  var alarm = new Date(now.toDateString() + ' ' + alarmTime);

  var timeRemaining = alarm - now;

  setTimeout(() => {
    setTimeout(() => {
      document.querySelector('img').style.display = 'block';
    }, 1000);
    alarmSound.play();
    document.getElementById('alarmTime').disabled = false;
  }, timeRemaining);

  document.getElementById('alarmTime').disabled = true;
}
