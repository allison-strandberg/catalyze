import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseAtticController extends Controller {
  queryParams = [
    'magnifying_glass',
    'bookshelf',
    'northeast_window',
    'northwest_window',
  ];

  @tracked magnifying_glass;

  @tracked bookshelf;

  @tracked northeast_window;

  @tracked northwest_window;

  @action
  toAttic() {
    this.transitionToRoute('house.attic', { queryParams: { 
      magnifying_glass: null,
      bookshelf: null,
      northeast_window: null,
      northwest_window: null,
    }});
  }
}
