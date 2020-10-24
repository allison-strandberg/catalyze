import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseAtticController extends Controller {
  queryParams = ['magnifying_glass'];

  @tracked magnifying_glass;

  @action
  toAttic() {
    this.transitionToRoute('house.attic', { queryParams: { 
      magnifying_glass: null,
    }});
  }
}
