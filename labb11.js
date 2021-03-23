const showDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month <= 9 ? `0${month}` : month;
  day = day <= 9 ? `0${day}` : day;

  const dateFormat = `${year}-${month}-${day}`;
  document.querySelector('#date').innerHTML = `<p>${dateFormat}</p>`;
};

const showTime = (date) => {
  const time = date.toLocaleTimeString();
  document.querySelector('#clock').innerHTML = `<p>${time}</p>`;
};

const displayInfo = () => {
  const date = new Date();

  showDate(date);
  showTime(date);

  setTimeout(displayInfo, 500);
};

displayInfo();
