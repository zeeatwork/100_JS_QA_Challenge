import test from 'node:test';
import assert from 'node:assert/strict';
import { labelRisk } from '../src/problems/problem-90.js';

test('Problem 90: labelRisk', () => {
  assert.deepStrictEqual(labelRisk(7), 'HIGH');
  assert.deepStrictEqual(labelRisk(6), 'NORMAL');
  assert.deepStrictEqual(labelRisk(10), 'HIGH');
});
