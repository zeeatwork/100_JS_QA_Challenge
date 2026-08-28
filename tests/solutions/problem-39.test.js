import test from 'node:test';
import assert from 'node:assert/strict';
import { getDomain } from '../../solutions/problem-39.js';

test('Reference solution 39: getDomain', () => {
  assert.deepStrictEqual(getDomain('qa@example.com'), 'example.com');
  assert.deepStrictEqual(getDomain('bot@test.org'), 'test.org');
});
