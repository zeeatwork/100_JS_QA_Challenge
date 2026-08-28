import test from 'node:test';
import assert from 'node:assert/strict';
import { getTicketIdText } from '../../solutions/problem-32.js';

test('Reference solution 32: getTicketIdText', () => {
  assert.deepStrictEqual(getTicketIdText('QA-104'), '104');
  assert.deepStrictEqual(getTicketIdText('BUG-7'), '-7');
});
