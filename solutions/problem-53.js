/**
 * Reference solution for Problem 53: Strings drill
 * Type: Drill
 */
export function cleanTicketKey(raw) {
  return raw.trim();
}

export function isBlankSummary(summary) {
  return summary.trim() === '';
}

export function getSummaryLength(summary) {
  return summary.trim().length;
}
