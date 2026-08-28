import test from 'node:test';
import assert from 'node:assert/strict';
import { hasProdPrefix } from '../../solutions/problem-23.js';

test('Reference solution 23: hasProdPrefix', () => {
  assert.deepStrictEqual(hasProdPrefix('prod-login'), true);
  assert.deepStrictEqual(hasProdPrefix('qa-login'), false);
});
