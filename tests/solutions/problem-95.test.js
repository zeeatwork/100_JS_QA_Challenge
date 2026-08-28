import test from 'node:test';
import assert from 'node:assert/strict';
import { getEmailDomainLength } from '../../solutions/problem-95.js';

test('Reference solution 95: getEmailDomainLength', () => {
  assert.deepStrictEqual(getEmailDomainLength('qa@example.com'), 11);
  assert.deepStrictEqual(getEmailDomainLength('bot@test.org'), 8);
});
