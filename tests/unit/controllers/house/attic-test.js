import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | house/attic', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:house/attic');
    assert.ok(controller);
  });
});
