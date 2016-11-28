import {observable, computed, action} from "mobx";
import {ModelList, Model} from '../lib/model-list';

export class Photo extends Model {
  @observable name;
  @observable description;
}

export class PhotoStore extends ModelList {
  static ModelClass = Photo;
}

export default PhotoStore;
