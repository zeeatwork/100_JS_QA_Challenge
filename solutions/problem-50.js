/**
 * Reference solution for Problem 50: Review of Problems 01-49
 * Category: Mixed review
 * Type: Diagnostic
 *
 * Skills checked: Number.isInteger and >=, trim and toLowerCase,
 * indexOf, slice, and Number.parseInt, || and !, Math.min and Math.max, %.
 */
export function isValidRetryCount(value) {
  return Number.isInteger(value) && value >= 0;
}

export function normalizeEnvironment(name) {
  return name.trim().toLowerCase();
}

export function getTicketNumber(ticketKey) {
  return Number.parseInt(ticketKey.slice(ticketKey.indexOf('-') + 1), 10);
}

export function shouldBlockRelease(failedCount, isApproved) {
  return failedCount > 0 || !isApproved;
}

export function clampWorkers(requested) {
  return Math.min(Math.max(requested, 1), 8);
}

export function isOddShard(shardNumber) {
  return shardNumber % 2 === 1;
}
