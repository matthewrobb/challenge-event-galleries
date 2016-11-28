import EventsStore from './events-store';

export default new class Stores {
  constructor() {
    this.eventsStore = new EventsStore();
  }
}
