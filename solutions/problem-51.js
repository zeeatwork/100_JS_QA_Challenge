/**
 * Reference solution for Problem 51: slice drill
 * Type: Drill
 */
export function getBuildDate(timestamp) {
  return timestamp.slice(0, 10);
}

export function getRunSuffix(runId) {
  return runId.slice(-4);
}

export function getShortSha(sha) {
  return sha.slice(0, 7);
}
