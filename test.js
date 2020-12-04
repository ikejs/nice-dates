const {
  timeAgoUntil, 
  consecutiveDates,
  orderDates,
  pastPresentFuture
} = require('./index');


test('get time ago/from now', () => {
  expect(
    timeAgoUntil(new Date()))
    .toEqual('just now');
});

test('get consecutive dates with specified amount and offset', () => {
  expect(consecutiveDates(new Date('2020-11-02T07:00:00.000Z'), 4, 3)).toEqual([
    new Date('2020-11-02T07:00:00.000Z'),
    new Date('2020-11-05T07:00:00.000Z'),
    new Date('2020-11-08T07:00:00.000Z'),
    new Date('2020-11-11T07:00:00.000Z'),
  ]);
});


test('sort dates in order', () => {
  expect(orderDates([
    new Date('2020-11-05T07:00:00.000Z'),
    new Date('2020-11-14T07:00:00.000Z'),
    new Date('2020-11-11T07:00:00.000Z'),
    new Date('2020-11-08T07:00:00.000Z'),
  ])).toEqual([
    new Date('2020-11-05T07:00:00.000Z'),
    new Date('2020-11-08T07:00:00.000Z'),
    new Date('2020-11-11T07:00:00.000Z'),
    new Date('2020-11-14T07:00:00.000Z')
  ])
});


test('organize past, present and future dates', () => {
  expect(pastPresentFuture([
    new Date('2020-11-05T07:00:00.000Z'),
    new Date('2020-11-14T07:00:00.000Z'),
    new Date('2020-11-11T07:00:00.000Z'),
    new Date('2020-11-08T07:00:00.000Z'),
  ])).toEqual({
    past: [
      new Date('2020-11-05T07:00:00.000Z'),
      new Date('2020-11-14T07:00:00.000Z'),
      new Date('2020-11-11T07:00:00.000Z'),
      new Date('2020-11-08T07:00:00.000Z'),
    ],
    present: [],
    future: []
  })
});