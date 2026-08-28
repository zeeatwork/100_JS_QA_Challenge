import test from 'node:test';
import assert from 'node:assert/strict';
import { hasProdPrefix } from '../src/problems/problem-23.js';

test('Problem 23: hasProdPrefix', () => {
  assert.deepStrictEqual(hasProdPrefix('prod-login'), true);
  assert.deepStrictEqual(hasProdPrefix('qa-login'), false);
});
