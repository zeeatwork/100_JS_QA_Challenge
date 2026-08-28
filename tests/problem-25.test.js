import test from 'node:test';
import assert from 'node:assert/strict';
import { containsSmoke } from '../src/problems/problem-25.js';

test('Problem 25: containsSmoke', () => {
  assert.deepStrictEqual(containsSmoke('daily-smoke'), true);
  assert.deepStrictEqual(containsSmoke('daily-regression'), false);
});
