import test from 'node:test';
import assert from 'node:assert/strict';
import { getStatusCharacters } from '../../solutions/problem-36.js';

test('Reference solution 36: getStatusCharacters', () => {
  assert.deepStrictEqual(getStatusCharacters(' passed '), 6);
  assert.deepStrictEqual(getStatusCharacters('x'), 1);
  assert.deepStrictEqual(getStatusCharacters('  '), 0);
});
