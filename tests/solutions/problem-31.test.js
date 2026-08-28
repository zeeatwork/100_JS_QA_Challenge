import test from 'node:test';
import assert from 'node:assert/strict';
import { getTicketPrefix } from '../../solutions/problem-31.js';

test('Reference solution 31: getTicketPrefix', () => {
  assert.deepStrictEqual(getTicketPrefix('QA-104'), 'QA-');
  assert.deepStrictEqual(getTicketPrefix('BUG-7'), 'BUG');
});
