/**
 * Reference solution for Problem 59: Operators drill
 * Type: Drill
 */
export function resultLabel(passed) {
  return passed ? 'PASS' : 'FAIL';
}

export function describeTestCount(count) {
  return count === 1 ? '1 test' : `${count} tests`;
}

export function formatDuration(ms) {
  return ms >= 1000 ? `${ms / 1000}s` : `${ms}ms`;
}
