import test from 'node:test';
import assert from 'node:assert/strict';
import { isNull } from '../../solutions/problem-05.js';

test('Reference solution 05: isNull', () => {
  assert.deepStrictEqual(isNull(null), true);
  assert.deepStrictEqual(isNull(undefined), false);
  assert.deepStrictEqual(isNull(0), false);
});
