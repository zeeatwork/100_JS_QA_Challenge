/**
 * Reference solution for Problem 57: Numbers drill
 * Type: Drill
 */
export function getSlowestDuration(a, b, c) {
  return Math.max(a, b, c);
}

export function atLeastOneWorker(requested) {
  return Math.max(1, requested);
}

export function getOverrunMs(budgetMs, actualMs) {
  return Math.max(0, actualMs - budgetMs);
}
