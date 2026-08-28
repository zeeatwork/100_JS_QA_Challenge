import test from 'node:test';
import assert from 'node:assert/strict';
import { isHealthy } from '../../solutions/problem-84.js';

test('Reference solution 84: isHealthy', () => {
  assert.deepStrictEqual(isHealthy(0, 'up'), true);
  assert.deepStrictEqual(isHealthy(1, 'up'), false);
  assert.deepStrictEqual(isHealthy(0, 'down'), false);
});
