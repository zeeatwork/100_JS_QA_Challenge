import test from 'node:test';
import assert from 'node:assert/strict';
import { eitherCheckGreen } from '../../solutions/problem-54.js';

test('Reference solution 54: eitherCheckGreen', () => {
  assert.deepStrictEqual(eitherCheckGreen(false, true), true);
  assert.deepStrictEqual(eitherCheckGreen(false, false), false);
});
