import test from 'node:test';
import assert from 'node:assert/strict';
import { capWorkers } from '../src/problems/problem-48.js';

test('Problem 48: capWorkers', () => {
  assert.deepStrictEqual(capWorkers(10), 8);
  assert.deepStrictEqual(capWorkers(4), 4);
});
