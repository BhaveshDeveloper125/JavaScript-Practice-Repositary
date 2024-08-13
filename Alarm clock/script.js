function UpdateTime() {
  let dateobj = new Date();
  let year = dateobj.getFullYear();
  let month = dateobj.getMonth();
  let day = dateobj.getDay();
  let hour = dateobj.getHours();
  let minute = dateobj.getMinutes();
  let second = dateobj.getSeconds();

  hour = hour % 12;
  hour = hour ? hour : 12;
  //   console.clear();
  //   console.log(year);
  //   console.log(month);
  //   console.log(day);
  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);

  let days = document.querySelector('.day');
  let hours = document.querySelector('.hour');

  days.textContent = `Date : ${day} - ${month} - ${year}`;
  hours.textContent = `Time : ${hour} - ${minute} - ${second}`;
  setInterval(UpdateTime, 1000);
}

UpdateTime();

function Alarm(event) {
  event.preventDefault();
  let clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;

  let checking_Time = `${hour}:${minute}`;
  console.log(checking_Time);

  let user_alarmtime = document.querySelector('#alramtime').value;
  console.log(`${user_alarmtime}`);

  if (checking_Time === user_alarmtime) {
    let audio = document.querySelector('#nahneJa');
    let image = document.querySelector('.image');
    setTimeout(() => {
      image.style.display = 'block';
      audio.play();
      alert(`😡Are nah ne ja nah ne ja 😡`);
    }, 1000);
  }
}

// Alarm();

// function updateTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   document.getElementById(
//     'time',
//   ).textContent = `${hours}:${minutes}:${seconds}`;
// }

// function checkAlarm() {
//   const alarmTime = document.getElementById('alarmTime').value;
//   const now = new Date();
//   const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(
//     now.getMinutes(),
//   ).padStart(2, '0')}`;

//   if (alarmTime === currentTime) {
//     document.getElementById('alarmMessage').textContent = 'Wake up!';
//   } else {
//     document.getElementById('alarmMessage').textContent = '';
//   }
// }

// document.getElementById('setAlarm').addEventListener('click', () => {
//   setInterval(checkAlarm, 1000);
// });

// setInterval(updateTime, 1000);
// updateTime();
