function GetWeather(event) {
  event.preventDefault();
  let data = document.querySelector('#location');
  let loc = data.value;
  console.log(loc);

  fetch(
    `https://api.tomorrow.io/v4/weather/forecast?location=${loc}&apikey=KT0yQn7nM105Fc9AUpgmsBhB4YOLSNmn`,
    // `https://api.tomorrow.io/v4/weather/forecast?location=${loc}&apikey=RDB8GjXOrtz044fIYdfRDL8GDnl7BRdr'`,
  )
    .then((resolve) => {
      if (!resolve.ok) {
        console.error(`Error has occured bro : ${resolve.status}`);
      }
      return resolve.json();
    })
    .then((resolve) => {
      console.log(resolve);
      console.log(resolve.timelines.minutely[0].values.temperatureApparent);
      let temp = resolve.timelines.minutely[0].values.temperatureApparent;
      let el = document.createElement('h2');
      el.textContent = `Temprature : ${temp} celcius`;
      document.querySelector('.weatherdata').appendChild(el);
    })
    .catch((error) => console.log(error));
}
