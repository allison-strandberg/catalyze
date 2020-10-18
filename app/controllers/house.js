import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class HouseController extends Controller {
  queryParams = ['demo'];

  @tracked demo = false;
}
