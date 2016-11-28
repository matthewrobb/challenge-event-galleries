import {observable, computed, action} from "mobx";

export class Model {
  id;

  constructor(props, id) {
    this.id = id;
    this.setProps(props);
  }

  @action setProp(key, value) {
    if (key in this) {
      this[key] = value;
    }
    return this;
  }

  @action setProps(props) {
    for(let key in props) {
      this.setProp(key, props[key]);
    }
    return this;
  }
}

export default Model;
