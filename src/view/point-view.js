import AbstractView from '../framework/view/abstract-view.js';
import {getDate, getDifferenceDate} from '../utils.js';

const getOffersMarkup = (offers) => {
  let markup = '';

  offers.forEach((offer) => {
    markup += (`<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
      </li> `);
  });

  return markup;
};

function createRoutePointTemplate(point, destination, offer) {
  const {type, timeStart, timeEnd, isFavorite, price} = point;
  const {townName} = destination;
  const {offers} = offer;

  const favorite = isFavorite ? 'event__favorite-btn--active' : '';
  const date = getDate(timeStart, 'MMM D');
  const fullDate = getDate(timeStart, 'YYYY-MM-DD');
  const startingTime = getDate(timeStart, 'HH:mm');
  const endingTime = getDate(timeEnd, 'HH:mm');
  const difTime = getDifferenceDate(timeStart, timeEnd);

  return (`<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${fullDate}">${date}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${townName}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${startingTime}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${endingTime}</time>
                  </p>
                  <p class="event__duration">${difTime}M</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${getOffersMarkup(offers)}
                </ul>
                <button class="event__favorite-btn ${favorite}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`);
}

export default class RoutePoint extends AbstractView{
  #point = null;
  #destination = null;
  #offer = null;
  #handleClick = null;

  constructor({point, destination, offer, onClick}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offer = offer;
    this.#handleClick = onClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };

  get template() {
    return createRoutePointTemplate(this.#point, this.#destination, this.#offer);
  }
}
