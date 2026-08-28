import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeTeamName } from '../../solutions/problem-27.js';

test('Reference solution 27: normalizeTeamName', () => {
  assert.deepStrictEqual(normalizeTeamName('payments'), 'PAYMENTS');
  assert.deepStrictEqual(normalizeTeamName('qa'), 'QA');
});
