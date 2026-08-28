/**
 * Reference solution for Problem 100: isReleaseReady
 */
export function isReleaseReady(testsPassed, noOpenBugs, approval) {
  return testsPassed && noOpenBugs && approval;
}
