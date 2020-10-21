const showDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month <= 9 ? `0${month}` : month;
  day = day <= 9 ? `0${day}` : day;

  const dateFormat = `${year}-${month}-${day}`;
  document.querySelector("#date").innerHTML = `<p>${dateFormat}</p>`;
};

const showTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  document.querySelector("#clock").innerHTML = `<p>${time}</p>`;
};

showDate();
setInterval(showTime, 1000);
