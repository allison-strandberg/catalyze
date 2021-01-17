import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DiaryComponent extends Component {
  @tracked page = 0;

  totalPages = 4;

  get first() {
    return this.page === 0;
  }

  get second() {
    return this.page === 1;
  }

  get third() {
    return this.page === 2;
  }

  get fourth() {
    return this.page === 3;
  }

  @action
  nextPage() {
    this.page = (this.page + 1) % this.totalPages;
  }

  @action
  previousPage() {
    this.page = this.page ? this.page - 1 : this.totalPages - 1;
  }
}
