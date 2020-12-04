# strings-plus
Do more with dates!

![alt text](https://img.shields.io/npm/v/nice-dates)
![alt text](https://img.shields.io/github/issues/ikejs/nice-dates)
![alt text](https://img.shields.io/github/forks/ikejs/nice-dates)


## Installation

```bash
npm i nice-dates --save
```

## Date Formatting
```
const { timeAgoUntil } = require('nice-dates');

timeAgoUntil(new Date('2020-11-08T07:00:00.000Z')) // just now
timeAgoUntil(new Date('2020-11-08T06:59:32.000Z')) // 28 seconds ago
timeAgoUntil(new Date('2020-11-07T04:23:15.000Z')) // yesterday
timeAgoUntil(new Date('2020-11-11T02:15:07.000Z')) // 3 days from now
timeAgoUntil(new Date('2020-11-09T04:23:15.000Z')) // tomorrow
timeAgoUntil(new Date('2018-10-08T04:23:15.000Z')) // 2 years ago
```

## Methods
- `timeAgoUntil(<date>)` Returns the time ago/until the date.

- `consecutiveDates(<date>, <repeat>, <offset>)` Returns an array of consecutive dates with an offset for each day.

- `orderDates([<dates>])` Puts a list of dates in order.

- `pastPresentFuture([<dates>])` Returns an object with arrays for past, present and future dates.