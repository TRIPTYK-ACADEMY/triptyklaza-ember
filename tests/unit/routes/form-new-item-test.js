import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | form-new-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:form-new-item');
    assert.ok(route);
  });
});
