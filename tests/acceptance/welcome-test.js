import { test } from 'qunit';
import moduleForAcceptance from 'ember-browserstack-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | welcome');

test('visiting /', function(assert) {
  visit('/');
  andThen(() => assert.equal(find('#title').text(), 'Congratulations, you made it!'));
});


test('taking a detour', function(assert) {
  visit('/detour');
  click('.continue');
  andThen(() => assert.equal(currentRouteName(), 'index'));
});
