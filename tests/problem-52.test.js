import test from 'node:test';
import assert from 'node:assert/strict';
import { differentEnvironment } from '../src/problems/problem-52.js';

test('Problem 52: differentEnvironment', () => {
  assert.deepStrictEqual(differentEnvironment('qa', 'prod'), true);
  assert.deepStrictEqual(differentEnvironment('qa', 'qa'), false);
});
