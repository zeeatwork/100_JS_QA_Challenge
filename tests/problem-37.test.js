import test from 'node:test';
import assert from 'node:assert/strict';
import { isBlankText } from '../src/problems/problem-37.js';

test('Problem 37: isBlankText', () => {
  assert.deepStrictEqual(isBlankText('   '), true);
  assert.deepStrictEqual(isBlankText('x'), false);
  assert.deepStrictEqual(isBlankText(''), true);
});
