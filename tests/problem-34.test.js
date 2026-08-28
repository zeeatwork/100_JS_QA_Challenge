import test from 'node:test';
import assert from 'node:assert/strict';
import { repeatSeparator } from '../src/problems/problem-34.js';

test('Problem 34: repeatSeparator', () => {
  assert.deepStrictEqual(repeatSeparator('-', 4), '----');
  assert.deepStrictEqual(repeatSeparator('-', 0), '');
});
