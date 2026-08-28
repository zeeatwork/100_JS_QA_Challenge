import test from 'node:test';
import assert from 'node:assert/strict';
import { parseBuildNumber } from '../src/problems/problem-44.js';

test('Problem 44: parseBuildNumber', () => {
  assert.deepStrictEqual(parseBuildNumber('42'), 42);
  assert.deepStrictEqual(parseBuildNumber('17px'), 17);
});
