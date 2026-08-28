import test from 'node:test';
import assert from 'node:assert/strict';
import { floorVersionPart } from '../src/problems/problem-50.js';

test('Problem 50: floorVersionPart', () => {
  assert.deepStrictEqual(floorVersionPart(3.9), 3);
  assert.deepStrictEqual(floorVersionPart(4), 4);
});
