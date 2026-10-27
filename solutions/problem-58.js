/**
 * Reference solution for Problem 58: Operators drill
 * Type: Drill
 */
export function getAssignee(assignee) {
  return assignee ?? 'Unassigned';
}

export function getRetryCount(configured) {
  return configured ?? 2;
}

export function getHeadless(setting) {
  return setting ?? true;
}
