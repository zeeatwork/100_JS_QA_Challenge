import test from 'node:test';
import assert from 'node:assert/strict';
import { getDomain } from '../src/problems/problem-39.js';

test('Problem 39: getDomain', () => {
  assert.deepStrictEqual(getDomain('qa@example.com'), 'example.com');
  assert.deepStrictEqual(getDomain('bot@test.org'), 'test.org');
});
