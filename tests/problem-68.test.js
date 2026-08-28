import test from 'node:test';
import assert from 'node:assert/strict';
import { getSecondCharacter } from '../src/problems/problem-68.js';

test('Problem 68: getSecondCharacter', () => {
  assert.deepStrictEqual(getSecondCharacter('login'), 'o');
  assert.deepStrictEqual(getSecondCharacter('A'), undefined);
});
