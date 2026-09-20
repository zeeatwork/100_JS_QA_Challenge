/**
 * Problem 38: formatBuildLabel
 * Category: Strings
 *
 * Return `${environment} build ${buildNumber}`.
 * Examples: 'qa', 42 → 'qa build 42'
 * Practice focus: template literal
 *
 * Timebox: 20 minutes or less.
 */
export function formatBuildLabel(environment, buildNumber) {
  return `${environment} build ${buildNumber}`;
}
