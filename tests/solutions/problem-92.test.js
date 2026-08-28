import test from 'node:test';
import assert from 'node:assert/strict';
import { hasSmokeTag } from '../../solutions/problem-92.js';

test('Reference solution 92: hasSmokeTag', () => {
  assert.deepStrictEqual(hasSmokeTag('login #smoke'), true);
  assert.deepStrictEqual(hasSmokeTag('login #regression'), false);
});
