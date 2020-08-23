import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BurgerMenuComponent extends Component {
  @tracked open = false;
}
