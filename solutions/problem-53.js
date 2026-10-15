/**
 * Reference solution for Problem 53: trim drill
 * Type: Drill
 */
export function cleanTicketId(raw) {
  return raw.trim();
}

export function isBlankComment(text) {
  return text.trim() === '';
}

export function countVisibleCharacters(label) {
  return label.trim().length;
}
