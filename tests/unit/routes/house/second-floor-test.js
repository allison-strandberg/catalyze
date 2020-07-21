import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | house/second-floor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:house/second-floor');
    assert.ok(route);
  });
});
