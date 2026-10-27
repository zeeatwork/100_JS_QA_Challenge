/**
 * Reference solution for Problem 52: Strings drill
 * Type: Drill
 */
export function findFirstFailure(log) {
  return log.indexOf('FAIL');
}

export function hasProjectSeparator(ticketKey) {
  return ticketKey.indexOf('-') !== -1;
}

export function getValueAfterColon(line) {
  const index = line.indexOf(':');
  return index === -1 ? '' : line.slice(index + 1);
}
