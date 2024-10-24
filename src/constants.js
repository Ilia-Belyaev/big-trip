export const ROUTE_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];
export const DESTINATIONS = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Berlin',
  'Tokio',
  'France',
];
export const MAX_PRICE = 10000;
export const MAX_POINTS = 6;
export const TIME = {
  start: [
    '2020-04-02 02:17',
    '2020-04-04 03:05',
    '2020-02-06 03:22',
    '2020-04-08 11:56',
    '2020-03-12 22:22',
    '2020-03-12 21:00'
  ],
  end: [
    '2020-04-02 02:19',
    '2020-04-04 03:17',
    '2020-02-08 04:17',
    '2020-04-08 12:00',
    '2020-03-14 22:30',
    '2020-04-12 21:05',
  ],
};
export const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];
export const FAVORITE = [true, false];
export const FilterType = {
  PAST: 'past',
  EVERTHING: 'everthing',
  PRESENT: 'present',
  FUTURE: 'future',
};
export const SortTypes = {
  PRICE: 'price',
  DAY: 'day',
  TIME: 'time',
};
export const EmptyListText = {
  EVERTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now',
};
