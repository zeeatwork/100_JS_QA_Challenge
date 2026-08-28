import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldSkip } from '../../solutions/problem-82.js';

test('Reference solution 82: shouldSkip', () => {
  assert.deepStrictEqual(shouldSkip('prod', false), true);
  assert.deepStrictEqual(shouldSkip('qa', true), true);
  assert.deepStrictEqual(shouldSkip('qa', false), false);
});
