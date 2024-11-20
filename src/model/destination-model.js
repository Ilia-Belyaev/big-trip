import {UpdateType} from '../constants.js';
import Observable from '../framework/observable.js';

export default class DestinationModel extends Observable{
  #destinationCards = [];
  #destinationApiService = null;

  constructor ({destinationApiService}) {
    super();
    this.#destinationApiService = destinationApiService;
  }

  get destination() {
    return this.#destinationCards;
  }

  async init() {
    try {
      const destination = await this.#destinationApiService.destinations;

      this.#destinationCards = destination.map(this.#adaptToClient);
      this._notify(UpdateType.INIT);
    } catch(err) {
      this.#destinationCards = [];
    }
  }

  #adaptToClient(destination) {
    const adaptedPoint = {
      ...destination,
      photos: destination['pictures'],
      townName: destination['name'],
    };

    delete adaptedPoint['name'];
    delete adaptedPoint['pictures'];

    return adaptedPoint;
  }


  getDestinationById(id) {
    return this.#destinationCards.find((destination) => destination.id === id);
  }
}
