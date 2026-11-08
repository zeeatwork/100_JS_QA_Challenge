/**
 * Problem 50: Review of Problems 01-49
 * Category: Mixed review
 * Type: Diagnostic
 *
 * Six short functions that mix skills from Problems 01-49.
 * Solve them from memory first. If you have to look something up,
 * that is useful information, not a failure: note it in
 * docs/v2-plan.md under "Diagnostic results" and keep going.
 *
 * 1. isValidRetryCount(value)
 *    Return true only when value is a whole number of 0 or more.
 *    Examples: 3 → true; 2.5 → false; '3' → false
 *
 * 2. normalizeEnvironment(name)
 *    Environment names arrive from a config file with stray
 *    spaces and inconsistent capitalization. Return a clean,
 *    lowercase name.
 *    Examples: ' Staging ' → 'staging'
 *
 * 3. getTicketNumber(ticketKey)
 *    Return the numeric part of a ticket key as a number.
 *    Keys always look like PROJECT-DIGITS.
 *    Examples: 'QA-1042' → 1042; 'PLAT-0300' → 300
 *
 * 4. shouldBlockRelease(failedCount, isApproved)
 *    Return true when a release should be blocked: either
 *    any tests failed, or the release has not been approved.
 *    Examples: (0, true) → false; (2, true) → true; (0, false) → true
 *
 * 5. clampWorkers(requested)
 *    The CI runner supports between 1 and 8 parallel workers.
 *    Return the requested count, kept inside that range.
 *    Examples: 0 → 1; 4 → 4; 12 → 8
 *
 * 6. isOddShard(shardNumber)
 *    Tests are split into numbered shards. Return true when
 *    the shard number is odd.
 *    Examples: 1 → true; 2 → false
 *
 * Stuck? See docs/hints.md.
 *
 * Run: node --test tests/problem-50.test.js
 * Timebox: 20 minutes or less.
 */
export function isValidRetryCount(value) {
  if (value < 0 || !Number.isInteger(value)) {
    return false
  }
    return true;
}

export function normalizeEnvironment(name) {
  return name.toLowerCase().trim();
}

export function getTicketNumber(ticketKey) {
  return parseInt(ticketKey.slice(ticketKey.indexOf('-') + 1));
}

export function shouldBlockRelease(failedCount, isApproved) {
  return (failedCount > 0 || !isApproved);
}

export function clampWorkers(requested) {
  if (Math.max(requested)<= 1){
    return 1;
  }
  return Math.min(requested, 8)
}

export function isOddShard(shardNumber) {
  return shardNumber % 2 !== 0;
}
