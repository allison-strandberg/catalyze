import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseBasementController extends Controller {
  queryParams = [
    'clipboard',
  ];

  @tracked clipboard;

  @action
  toBasement() {
    this.transitionToRoute('house.basement', { queryParams: { 
      clipboard: null,
    }});
  }
}
