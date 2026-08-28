import test from 'node:test';
import assert from 'node:assert/strict';
import { getLastCharacter } from '../../solutions/problem-30.js';

test('Reference solution 30: getLastCharacter', () => {
  assert.deepStrictEqual(getLastCharacter('QA-104'), '4');
  assert.deepStrictEqual(getLastCharacter('BUG-7'), '7');
});
