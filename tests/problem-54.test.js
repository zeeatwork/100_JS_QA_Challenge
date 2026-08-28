import test from 'node:test';
import assert from 'node:assert/strict';
import { eitherCheckGreen } from '../src/problems/problem-54.js';

test('Problem 54: eitherCheckGreen', () => {
  assert.deepStrictEqual(eitherCheckGreen(false, true), true);
  assert.deepStrictEqual(eitherCheckGreen(false, false), false);
});
