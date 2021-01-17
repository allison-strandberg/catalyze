import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseBasementIndexController extends Controller {
  queryParams = [
    'clipboard',
  ];

  @tracked clipboard;

  @action
  toBasement() {
    this.transitionToRoute('house.basement.index', { queryParams: { 
      clipboard: null,
    }});
  }
}
