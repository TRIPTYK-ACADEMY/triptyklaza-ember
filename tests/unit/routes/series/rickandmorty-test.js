import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | series/rickandmorty', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:series/rickandmorty');
    assert.ok(route);
  });
});
