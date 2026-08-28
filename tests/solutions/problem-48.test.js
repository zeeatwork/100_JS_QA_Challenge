import test from 'node:test';
import assert from 'node:assert/strict';
import { capWorkers } from '../../solutions/problem-48.js';

test('Reference solution 48: capWorkers', () => {
  assert.deepStrictEqual(capWorkers(10), 8);
  assert.deepStrictEqual(capWorkers(4), 4);
});
