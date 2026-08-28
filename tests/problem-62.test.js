import test from 'node:test';
import assert from 'node:assert/strict';
import { endsWithBug } from '../src/problems/problem-62.js';

test('Problem 62: endsWithBug', () => {
  assert.deepStrictEqual(endsWithBug('login bug'), true);
  assert.deepStrictEqual(endsWithBug('login issue'), false);
});
