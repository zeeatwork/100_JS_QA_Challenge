import test from 'node:test';
import assert from 'node:assert/strict';
import { uppercaseSeverity } from '../src/problems/problem-65.js';

test('Problem 65: uppercaseSeverity', () => {
  assert.deepStrictEqual(uppercaseSeverity('high'), 'HIGH');
  assert.deepStrictEqual(uppercaseSeverity('low'), 'LOW');
});
