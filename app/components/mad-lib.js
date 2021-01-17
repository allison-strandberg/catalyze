import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MadLibComponent extends Component {
  @tracked showForm = true;

  @tracked recordingMedium;

  @tracked ingVerb1;

  @tracked place;

  @tracked nameOfPerson;

  @tracked animal;

  @tracked nameOfDwelling;

  @tracked adjective1;

  @tracked typeOfDisaster;

  @tracked pluralNoun1;

  @tracked adjective2;

  @tracked noun1;

  @tracked adjective3;

  @tracked hobby;

  @tracked ingVerb2;

  @tracked typeOfLeader;

  @tracked adjective4;

  @tracked noun2;

  @tracked pluralNoun2;

  @tracked ingVerb3;

  @tracked typeOfFurniture;

  @action
  onSubmit() {
    this.showForm = false;
  }

  @action
  onBack() {
    this.showForm = true;
  }
}
