import test from 'node:test';
import assert from 'node:assert/strict';
import { trimEnvironment } from '../../solutions/problem-28.js';

test('Reference solution 28: trimEnvironment', () => {
  assert.deepStrictEqual(trimEnvironment(' staging '), 'staging');
  assert.deepStrictEqual(trimEnvironment('qa'), 'qa');
});
