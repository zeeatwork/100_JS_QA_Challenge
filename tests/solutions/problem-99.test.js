import test from 'node:test';
import assert from 'node:assert/strict';
import { needsRerun } from '../../solutions/problem-99.js';

test('Reference solution 99: needsRerun', () => {
  assert.deepStrictEqual(needsRerun('failed', 2), true);
  assert.deepStrictEqual(needsRerun('failed', 3), false);
  assert.deepStrictEqual(needsRerun('passed', 1), false);
});
