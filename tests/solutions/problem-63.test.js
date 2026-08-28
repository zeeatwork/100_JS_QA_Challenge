import test from 'node:test';
import assert from 'node:assert/strict';
import { containsLogin } from '../../solutions/problem-63.js';

test('Reference solution 63: containsLogin', () => {
  assert.deepStrictEqual(containsLogin('valid login'), true);
  assert.deepStrictEqual(containsLogin('valid logout'), false);
});
