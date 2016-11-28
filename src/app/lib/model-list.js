import {observable, computed, action} from "mobx";

import Model from './model';

export class ModelList {
  static ModelClass = Model;
  static idKey = 'id';

  @observable items = [];
  itemId = 0;

  @action findOrCreate(data) {
    const { ModelClass, idKey } = this.constructor;

    let item = this.items.find(item => item[idKey] === data[idKey]);
    if (!item) {
      this.items.push(item = new ModelClass(data, ++this.itemId));
    }

    return item;
  }
}

export Model from './model';
export default ModelList;
