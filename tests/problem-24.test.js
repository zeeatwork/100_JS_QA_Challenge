import test from 'node:test';
import assert from 'node:assert/strict';
import { hasApiSuffix } from '../src/problems/problem-24.js';

test('Problem 24: hasApiSuffix', () => {
  assert.deepStrictEqual(hasApiSuffix('orders-api'), true);
  assert.deepStrictEqual(hasApiSuffix('orders-ui'), false);
});
