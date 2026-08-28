import test from 'node:test';
import assert from 'node:assert/strict';
import { needsAttention } from '../../solutions/problem-13.js';

test('Reference solution 13: needsAttention', () => {
  assert.deepStrictEqual(needsAttention('failed'), true);
  assert.deepStrictEqual(needsAttention('blocked'), true);
  assert.deepStrictEqual(needsAttention('passed'), false);
});
