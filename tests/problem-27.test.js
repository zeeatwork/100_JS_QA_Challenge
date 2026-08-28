import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeTeamName } from '../src/problems/problem-27.js';

test('Problem 27: normalizeTeamName', () => {
  assert.deepStrictEqual(normalizeTeamName('payments'), 'PAYMENTS');
  assert.deepStrictEqual(normalizeTeamName('qa'), 'QA');
});
