import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | house/first-floor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:house/first-floor');
    assert.ok(route);
  });
});
