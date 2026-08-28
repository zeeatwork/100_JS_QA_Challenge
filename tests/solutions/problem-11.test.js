import test from 'node:test';
import assert from 'node:assert/strict';
import { hasPassed } from '../../solutions/problem-11.js';

test('Reference solution 11: hasPassed', () => {
  assert.deepStrictEqual(hasPassed('passed'), true);
  assert.deepStrictEqual(hasPassed('Passed'), false);
  assert.deepStrictEqual(hasPassed('failed'), false);
});
