import test from 'node:test';
import assert from 'node:assert/strict';
import { sameBuildNumber } from '../../solutions/problem-51.js';

test('Reference solution 51: sameBuildNumber', () => {
  assert.deepStrictEqual(sameBuildNumber(42, 42), true);
  assert.deepStrictEqual(sameBuildNumber(42, '42'), false);
});
