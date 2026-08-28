import test from 'node:test';
import assert from 'node:assert/strict';
import { trimEnvironment } from '../src/problems/problem-28.js';

test('Problem 28: trimEnvironment', () => {
  assert.deepStrictEqual(trimEnvironment(' staging '), 'staging');
  assert.deepStrictEqual(trimEnvironment('qa'), 'qa');
});
