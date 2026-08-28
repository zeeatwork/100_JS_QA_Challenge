import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDuration } from '../src/problems/problem-45.js';

test('Problem 45: parseDuration', () => {
  assert.deepStrictEqual(parseDuration('12.5'), 12.5);
  assert.deepStrictEqual(parseDuration('3.2s'), 3.2);
});
