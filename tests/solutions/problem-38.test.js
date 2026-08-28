import test from 'node:test';
import assert from 'node:assert/strict';
import { formatBuildLabel } from '../../solutions/problem-38.js';

test('Reference solution 38: formatBuildLabel', () => {
  assert.deepStrictEqual(formatBuildLabel('qa', 42), 'qa build 42');
  assert.deepStrictEqual(formatBuildLabel('prod', 7), 'prod build 7');
});
