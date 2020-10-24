import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseFirstFloorController extends Controller {
  queryParams = [
    'begonias',
    'lemongrass',
    'snake_plant',
    'pothos',
    'begonia_sketch',
    'bookshelf',
    'wine_bottle',
    'kitchen_clock',
    'living_room_clock',
  ];

  @tracked begonias;

  @tracked lemongrass;

  @tracked snake_plant;

  @tracked pothos;

  @tracked begonia_sketch;

  @tracked bookshelf;

  @tracked wine_bottle;

  @tracked kitchen_clock;

  @tracked living_room_clock;

  @action
  toFirstFloor() {
    this.transitionToRoute('house.first-floor', { queryParams: { 
      begonias: null,
      lemongrass: null,
      snake_plant: null,
      pothos: null,
      begonia_sketch: null,
      bookshelf: null,
      wine_bottle: null,
      kitchen_clock: null,
      living_room_clock: null,
    }});
  }
}
