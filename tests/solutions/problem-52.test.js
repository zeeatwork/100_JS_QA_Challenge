import test from 'node:test';
import assert from 'node:assert/strict';
import { differentEnvironment } from '../../solutions/problem-52.js';

test('Reference solution 52: differentEnvironment', () => {
  assert.deepStrictEqual(differentEnvironment('qa', 'prod'), true);
  assert.deepStrictEqual(differentEnvironment('qa', 'qa'), false);
});
