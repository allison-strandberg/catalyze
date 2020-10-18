import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | house/basement/coffeepot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:house/basement/coffeepot');
    assert.ok(route);
  });
});
