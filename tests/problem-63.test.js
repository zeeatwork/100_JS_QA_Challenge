import test from 'node:test';
import assert from 'node:assert/strict';
import { containsLogin } from '../src/problems/problem-63.js';

test('Problem 63: containsLogin', () => {
  assert.deepStrictEqual(containsLogin('valid login'), true);
  assert.deepStrictEqual(containsLogin('valid logout'), false);
});
