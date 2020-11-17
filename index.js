// return array of consecutive dates with repeat and offset specified
const consecutiveDates = (date, repeat, offset) => {
  let i = 0;
  const dates = [];
  while(i<repeat) {
    const offsetDays = (i * offset) * 86400000;
    dates.push(new Date(date.valueOf() + offsetDays));
    i += 1;
  }
  return dates;
}


// return array of ordered dates
const orderDates = (dates) => {
  const orderedDates = dates.sort((a, b) => a - b);
  return orderedDates;
}


// turn array of dates into an object { past: [...] present: [...], future: [...] }
const pastPresentFuture = (dates) => {
  const past = [];
  const present = [];
  const future = [];

  const now = new Date();

  dates.map(date => {
    date == now
    ? present.push(date)
    : date < now 
      ? past.push(date)
      : future.push(date)
  });
  return { past, present, future }
}



module.exports = { 
  consecutiveDates,
  orderDates,
  pastPresentFuture
}