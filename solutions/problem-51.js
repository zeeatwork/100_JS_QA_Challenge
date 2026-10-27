/**
 * Reference solution for Problem 51: Strings drill
 * Type: Drill
 */
export function getBuildDate(timestamp) {
  return timestamp.slice(0, 10);
}

export function getRunSuffix(runId) {
  return runId.slice(-4);
}

export function getSprintNumber(sprintName) {
  return sprintName.slice(7);
}
