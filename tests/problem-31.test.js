import test from 'node:test';
import assert from 'node:assert/strict';
import { getTicketPrefix } from '../src/problems/problem-31.js';

test('Problem 31: getTicketPrefix', () => {
  assert.deepStrictEqual(getTicketPrefix('QA-104'), 'QA-');
  assert.deepStrictEqual(getTicketPrefix('BUG-7'), 'BUG');
});
