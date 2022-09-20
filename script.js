function getCurrentWeek() {
  let days = moment(moment().toDate(), "MM-DD-YYYY").isoWeek();
  let weekNumber = days - 24;
  document.getElementById("date").innerHTML = `Week ${weekNumber}`;
}

getCurrentWeek();

function getDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  switch (day) {
    case "Tuesday":
      return "Day 1 (Tuesday)";
    case "Thursday":
      return "Day 2 (Thursday)";
    case "Saturday":
      return "Day 3 (Saturday)";
  }
}

document.getElementById("day").innerHTML = getDay();
