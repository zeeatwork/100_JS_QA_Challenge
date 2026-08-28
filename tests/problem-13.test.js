import test from 'node:test';
import assert from 'node:assert/strict';
import { needsAttention } from '../src/problems/problem-13.js';

test('Problem 13: needsAttention', () => {
  assert.deepStrictEqual(needsAttention('failed'), true);
  assert.deepStrictEqual(needsAttention('blocked'), true);
  assert.deepStrictEqual(needsAttention('passed'), false);
});
