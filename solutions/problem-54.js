/**
 * Reference solution for Problem 54: Strings drill
 * Type: Drill
 */
export function isSameBrowser(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

export function toTagKey(tag) {
  return tag.toLowerCase();
}

export function isPassedStatus(status) {
  return status.toLowerCase() === 'passed';
}
