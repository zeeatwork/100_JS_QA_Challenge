import test from 'node:test';
import assert from 'node:assert/strict';
import { endsWithBug } from '../../solutions/problem-62.js';

test('Reference solution 62: endsWithBug', () => {
  assert.deepStrictEqual(endsWithBug('login bug'), true);
  assert.deepStrictEqual(endsWithBug('login issue'), false);
});
