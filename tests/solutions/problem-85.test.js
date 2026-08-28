import test from 'node:test';
import assert from 'node:assert/strict';
import { hasNoFailures } from '../../solutions/problem-85.js';

test('Reference solution 85: hasNoFailures', () => {
  assert.deepStrictEqual(hasNoFailures(false), true);
  assert.deepStrictEqual(hasNoFailures(true), false);
});
