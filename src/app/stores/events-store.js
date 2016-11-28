import {observable, computed, action} from "mobx";
import {ModelList, Model} from '../lib/model-list';

import {fetchEvents} from '../lib/api';

export class Event extends Model {
  @observable name;
  @observable description;
}

export class EventStore extends ModelList {
  static ModelClass = Event;
  static idKey = 'name';

  @action async loadEvents() {
    for(let event of await fetchEvents()) {
      this.findOrCreate(event);
    }
  }
}

export default EventStore;
