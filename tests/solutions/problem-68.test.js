import test from 'node:test';
import assert from 'node:assert/strict';
import { getSecondCharacter } from '../../solutions/problem-68.js';

test('Reference solution 68: getSecondCharacter', () => {
  assert.deepStrictEqual(getSecondCharacter('login'), 'o');
  assert.deepStrictEqual(getSecondCharacter('A'), undefined);
});
