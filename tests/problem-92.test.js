import test from 'node:test';
import assert from 'node:assert/strict';
import { hasSmokeTag } from '../src/problems/problem-92.js';

test('Problem 92: hasSmokeTag', () => {
  assert.deepStrictEqual(hasSmokeTag('login #smoke'), true);
  assert.deepStrictEqual(hasSmokeTag('login #regression'), false);
});
