import test from 'node:test';
import assert from 'node:assert/strict';
import { isIntegerId } from '../../solutions/problem-42.js';

test('Reference solution 42: isIntegerId', () => {
  assert.deepStrictEqual(isIntegerId(101), true);
  assert.deepStrictEqual(isIntegerId(10.5), false);
  assert.deepStrictEqual(isIntegerId('101'), false);
});
