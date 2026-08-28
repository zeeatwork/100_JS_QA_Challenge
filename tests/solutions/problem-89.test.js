import test from 'node:test';
import assert from 'node:assert/strict';
import { isPriorityEscalation } from '../../solutions/problem-89.js';

test('Reference solution 89: isPriorityEscalation', () => {
  assert.deepStrictEqual(isPriorityEscalation(4), true);
  assert.deepStrictEqual(isPriorityEscalation(5), true);
  assert.deepStrictEqual(isPriorityEscalation(3), false);
});
