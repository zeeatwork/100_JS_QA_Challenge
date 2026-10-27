/**
 * Reference solution for Problem 55: Strings drill
 * Type: Drill
 */
export function isProdUrl(url) {
  return url.startsWith('https://prod.');
}

export function isQaTicket(ticketKey) {
  return ticketKey.startsWith('QA-');
}

export function isRegressionBug(summary) {
  return summary.startsWith('[Regression]');
}
