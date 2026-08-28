import test from 'node:test';
import assert from 'node:assert/strict';
import { getTicketIdText } from '../src/problems/problem-32.js';

test('Problem 32: getTicketIdText', () => {
  assert.deepStrictEqual(getTicketIdText('QA-104'), '104');
  assert.deepStrictEqual(getTicketIdText('BUG-7'), '-7');
});
