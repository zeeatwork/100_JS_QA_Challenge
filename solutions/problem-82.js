/**
 * Reference solution for Problem 82: shouldSkip
 */
export function shouldSkip(environment, maintenance) {
  return environment === 'prod' || maintenance;
}
