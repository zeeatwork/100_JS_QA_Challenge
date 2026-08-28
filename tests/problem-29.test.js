import test from 'node:test';
import assert from 'node:assert/strict';
import { getFirstCharacter } from '../src/problems/problem-29.js';

test('Problem 29: getFirstCharacter', () => {
  assert.deepStrictEqual(getFirstCharacter('QA-104'), 'Q');
  assert.deepStrictEqual(getFirstCharacter('BUG-7'), 'B');
});
