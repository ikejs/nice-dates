# strings-plus
Do more with dates!

![alt text](https://img.shields.io/npm/v/nice-dates)
![alt text](https://img.shields.io/github/issues/ikejs/nice-dates)
![alt text](https://img.shields.io/github/forks/ikejs/nice-dates)


## Installation

```bash
npm i nice-dates --save
```

## Usage

```
const { consecutiveDates } = require('nice-dates');


// Let's get 4 consecutive dates starting November 5th, each 3 days apart.

console.log(
   consecutiveDates(new Date(2020, 10, 5), 4, 3)
);


// OUTPUT:
   [
      new Date('2020-11-05T07:00:00.000Z'),
      new Date('2020-11-08T07:00:00.000Z'),
      new Date('2020-11-11T07:00:00.000Z'),
      new Date('2020-11-14T07:00:00.000Z')
   ]
```

## Methods
- `consecutiveDates(<date>, <repeat>, <offset>)` Returns an array of consecutive dates.

- `orderDates([<dates>])` Returns an array of dates in order.

- `pastPresentFuture([<dates>])` Returns an array of 