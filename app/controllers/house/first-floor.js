import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HouseFirstFloorController extends Controller {
  queryParams = ['begonias'];

  @tracked begonias;

  @action
  toFirstFloor() {
    this.transitionToRoute('house.first-floor', { queryParams: { begonias: null } });
  }
}
