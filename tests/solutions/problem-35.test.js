import test from 'node:test';
import assert from 'node:assert/strict';
import { hasCaseInsensitiveStatus } from '../../solutions/problem-35.js';

test('Reference solution 35: hasCaseInsensitiveStatus', () => {
  assert.deepStrictEqual(hasCaseInsensitiveStatus('PASSED'), true);
  assert.deepStrictEqual(hasCaseInsensitiveStatus('passed'), true);
  assert.deepStrictEqual(hasCaseInsensitiveStatus('failed'), false);
});
