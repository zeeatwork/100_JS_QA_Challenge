import test from 'node:test';
import assert from 'node:assert/strict';
import { trimTicket } from '../src/problems/problem-66.js';

test('Problem 66: trimTicket', () => {
  assert.deepStrictEqual(trimTicket(' QA-1 '), 'QA-1');
  assert.deepStrictEqual(trimTicket('BUG-2'), 'BUG-2');
});
