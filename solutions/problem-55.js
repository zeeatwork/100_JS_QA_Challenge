/**
 * Reference solution for Problem 55: startsWith drill
 * Type: Drill
 */
export function isProdUrl(url) {
  return url.startsWith('https://prod.');
}

export function isQaTicket(ticketId) {
  return ticketId.startsWith('QA-');
}

export function isCommentLine(line) {
  return line.startsWith('//');
}
