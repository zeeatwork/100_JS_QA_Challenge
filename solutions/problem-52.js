/**
 * Reference solution for Problem 52: indexOf drill
 * Type: Drill
 */
export function findFirstFailure(log) {
  return log.indexOf('FAIL');
}

export function hasProjectSeparator(ticketId) {
  return ticketId.indexOf('-') !== -1;
}

export function getValueAfterColon(line) {
  const index = line.indexOf(':');
  return index === -1 ? '' : line.slice(index + 1);
}
