// return the time-ago/time-until given a date.
const timeAgoUntil = (date) => {
  const now = new Date();
  let future = now < date;
  let msg = future ? 'from now' : 'ago';

  const diffMs = Math.abs(now - date);
  const diffSec = ((diffMs % 60000) / 1000).toFixed(0);
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const diffDay = Math.floor(diffMs / (24*60*60*1000));
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffMonth / 12);

  if (diffSec < 5) {
    return 'just now';
  }
  
  if (diffYear > 0) {
    return `${diffYear} year${diffYear != 1 ? 's' : ''} ${msg}`
  } else if (diffMonth > 0) {
    return `${diffMonth} month${diffMonth != 1 ? 's' : ''} ${msg}`
  } else if (diffWeek > 0) {
    return `${diffWeek} week${diffWeek != 1 ? 's' : ''} ${msg}`
  } else if (diffDay > 0) {
    return diffDay > 1 
      ? `${diffDay} day${diffDay != 1 ? 's' : ''} ${msg}`
      : future
      ? 'tomorrow'
      : 'yesterday';
  } else if (diffHr > 0) {
    return `${diffHr} hour${diffHr != 1 ? 's' : ''} ${msg}`;
  } else if (diffMin > 0) {
    return `${diffMin} minute${diffMin != 1 ? 's' : ''} ${msg}`;
  } else if (diffSec > 0) {
    return `${diffSec} second${diffSec != 1 ? 's' : ''} ${msg}`;
  }

}


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
  timeAgoUntil,
  consecutiveDates,
  orderDates,
  pastPresentFuture
}