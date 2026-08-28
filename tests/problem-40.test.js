import test from 'node:test';
import assert from 'node:assert/strict';
import { getUsername } from '../src/problems/problem-40.js';

test('Problem 40: getUsername', () => {
  assert.deepStrictEqual(getUsername('qa@example.com'), 'qa');
  assert.deepStrictEqual(getUsername('bot@test.org'), 'bot');
});
