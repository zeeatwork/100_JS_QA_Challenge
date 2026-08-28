import test from 'node:test';
import assert from 'node:assert/strict';
import { startsWithQa } from '../src/problems/problem-61.js';

test('Problem 61: startsWithQa', () => {
  assert.deepStrictEqual(startsWithQa('QA-20'), true);
  assert.deepStrictEqual(startsWithQa('BUG-20'), false);
});
