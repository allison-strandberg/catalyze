import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | house/basement', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:house/basement');
    assert.ok(route);
  });
});
