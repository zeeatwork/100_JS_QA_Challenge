import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePort } from '../../solutions/problem-78.js';

test('Reference solution 78: parsePort', () => {
  assert.deepStrictEqual(parsePort('8080'), 8080);
  assert.deepStrictEqual(parsePort('3000'), 3000);
});
