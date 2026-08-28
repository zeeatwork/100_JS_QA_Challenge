import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseReportLabel } from '../../solutions/problem-58.js';

test('Reference solution 58: chooseReportLabel', () => {
  assert.deepStrictEqual(chooseReportLabel('passed'), 'PASS');
  assert.deepStrictEqual(chooseReportLabel('failed'), 'CHECK');
});
