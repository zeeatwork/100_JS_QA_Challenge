import test from 'node:test';
import assert from 'node:assert/strict';
import { getLastCharacter } from '../src/problems/problem-30.js';

test('Problem 30: getLastCharacter', () => {
  assert.deepStrictEqual(getLastCharacter('QA-104'), '4');
  assert.deepStrictEqual(getLastCharacter('BUG-7'), '7');
});
