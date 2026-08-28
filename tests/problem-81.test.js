import test from 'node:test';
import assert from 'node:assert/strict';
import { canDeploy } from '../src/problems/problem-81.js';

test('Problem 81: canDeploy', () => {
  assert.deepStrictEqual(canDeploy(true, true), true);
  assert.deepStrictEqual(canDeploy(true, false), false);
  assert.deepStrictEqual(canDeploy(false, true), false);
});
