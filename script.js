function getCurrentWeek() {
  let days  = moment(moment().toDate(), "MM-DD-YYYY").isoWeek()
  let weekNumber = days - 24
  document.getElementById("date").innerHTML = `Week ${weekNumber}`
}

getCurrentWeek()
