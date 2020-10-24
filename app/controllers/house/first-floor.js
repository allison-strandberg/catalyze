import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseFirstFloorController extends Controller {
  queryParams = ['begonias', 'lemongrass', 'snake_plant', 'pothos', 'begonia_sketch'];

  @tracked begonias;

  @tracked lemongrass;

  @tracked snake_plant;

  @tracked pothos;

  @action
  toFirstFloor() {
    this.transitionToRoute('house.first-floor', { queryParams: { 
      begonias: null,
      lemongrass: null,
      snake_plant: null,
      pothos: null,
      begonia_sketch: null,
    }});
  }
}
