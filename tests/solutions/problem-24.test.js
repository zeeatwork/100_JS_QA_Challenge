import test from 'node:test';
import assert from 'node:assert/strict';
import { hasApiSuffix } from '../../solutions/problem-24.js';

test('Reference solution 24: hasApiSuffix', () => {
  assert.deepStrictEqual(hasApiSuffix('orders-api'), true);
  assert.deepStrictEqual(hasApiSuffix('orders-ui'), false);
});
