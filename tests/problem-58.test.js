import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseReportLabel } from '../src/problems/problem-58.js';

test('Problem 58: chooseReportLabel', () => {
  assert.deepStrictEqual(chooseReportLabel('passed'), 'PASS');
  assert.deepStrictEqual(chooseReportLabel('failed'), 'CHECK');
});
