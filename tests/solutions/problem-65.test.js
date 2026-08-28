import test from 'node:test';
import assert from 'node:assert/strict';
import { uppercaseSeverity } from '../../solutions/problem-65.js';

test('Reference solution 65: uppercaseSeverity', () => {
  assert.deepStrictEqual(uppercaseSeverity('high'), 'HIGH');
  assert.deepStrictEqual(uppercaseSeverity('low'), 'LOW');
});
