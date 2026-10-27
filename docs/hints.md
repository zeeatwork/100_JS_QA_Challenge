# Hints

Open a hint only after you've made a real attempt. Each one is folded shut so you don't see the next problem's hint by accident.

A hint names the JavaScript feature that fits. It doesn't show the solution. If the hint isn't enough, try the debugger and MDN before opening `solutions/`.

## Problems 01-20: Types and operators

<details>
<summary>Problem 01: <code>isString()</code></summary>

Try the `typeof` operator.

</details>

<details>
<summary>Problem 02: <code>isNumber()</code></summary>

Try the `typeof` operator.

</details>

<details>
<summary>Problem 03: <code>isBoolean()</code></summary>

Try the `typeof` operator.

</details>

<details>
<summary>Problem 04: <code>isUndefined()</code></summary>

Try the `typeof` operator.

</details>

<details>
<summary>Problem 05: <code>isNull()</code></summary>

Try strict equality, `===`.

</details>

<details>
<summary>Problem 06: <code>addRetryCounts()</code></summary>

Try the `+` operator.

</details>

<details>
<summary>Problem 07: <code>subtractOpenBugs()</code></summary>

Try the `-` operator.

</details>

<details>
<summary>Problem 08: <code>multiplyTestRuns()</code></summary>

Try the `*` operator.

</details>

<details>
<summary>Problem 09: <code>divideTestCases()</code></summary>

Try the `/` operator.

</details>

<details>
<summary>Problem 10: <code>isEven()</code></summary>

Try the remainder operator, `%`.

</details>

<details>
<summary>Problem 11: <code>hasPassed()</code></summary>

Try strict equality, `===`.

</details>

<details>
<summary>Problem 12: <code>canRetry()</code></summary>

Try `&&` combined with `<`.

</details>

<details>
<summary>Problem 13: <code>needsAttention()</code></summary>

Try logical OR, `||`.

</details>

<details>
<summary>Problem 14: <code>isReady()</code></summary>

Try logical NOT, `!`.

</details>

<details>
<summary>Problem 15: <code>incrementRunNumber()</code></summary>

Try the `+` operator.

</details>

<details>
<summary>Problem 16: <code>decrementQueueCount()</code></summary>

Try the `-` operator.

</details>

<details>
<summary>Problem 17: <code>getRemainder()</code></summary>

Try the remainder operator, `%`.

</details>

<details>
<summary>Problem 18: <code>isWithinRetryLimit()</code></summary>

Try `<=`.

</details>

<details>
<summary>Problem 19: <code>isAtLeastPriority()</code></summary>

Try `>=`.

</details>

<details>
<summary>Problem 20: <code>isTruthy()</code></summary>

Try the `Boolean()` function.

</details>

## Problems 21-40: Strings

<details>
<summary>Problem 21: <code>getEnvironmentLabel()</code></summary>

No method needed. Return a plain string value.

</details>

<details>
<summary>Problem 22: <code>getEnvironmentLength()</code></summary>

Try the `.length` property.

</details>

<details>
<summary>Problem 23: <code>hasProdPrefix()</code></summary>

Try `startsWith()`.

</details>

<details>
<summary>Problem 24: <code>hasApiSuffix()</code></summary>

Try `endsWith()`.

</details>

<details>
<summary>Problem 25: <code>containsSmoke()</code></summary>

Try `includes()`.

</details>

<details>
<summary>Problem 26: <code>normalizeStatus()</code></summary>

Try `toLowerCase()`.

</details>

<details>
<summary>Problem 27: <code>normalizeTeamName()</code></summary>

Try `toUpperCase()`.

</details>

<details>
<summary>Problem 28: <code>trimEnvironment()</code></summary>

Try `trim()`.

</details>

<details>
<summary>Problem 29: <code>getFirstCharacter()</code></summary>

Try bracket notation, `str[index]`.

</details>

<details>
<summary>Problem 30: <code>getLastCharacter()</code></summary>

Try bracket notation, `str[index]`.

</details>

<details>
<summary>Problem 31: <code>getTicketPrefix()</code></summary>

Try `slice()`.

</details>

<details>
<summary>Problem 32: <code>getTicketIdText()</code></summary>

Try `slice()`.

</details>

<details>
<summary>Problem 33: <code>replaceEnvironment()</code></summary>

Try `replace()`.

</details>

<details>
<summary>Problem 34: <code>repeatSeparator()</code></summary>

Try `repeat()`.

</details>

<details>
<summary>Problem 35: <code>hasCaseInsensitiveStatus()</code></summary>

Try `toLowerCase()` then `===`.

</details>

<details>
<summary>Problem 36: <code>getStatusCharacters()</code></summary>

Try `trim()` then `.length`.

</details>

<details>
<summary>Problem 37: <code>isBlankText()</code></summary>

Try `trim()` then `===`.

</details>

<details>
<summary>Problem 38: <code>formatBuildLabel()</code></summary>

Try a template literal, `` `${...}` ``.

</details>

<details>
<summary>Problem 39: <code>getDomain()</code></summary>

Try `indexOf()` then `slice()`.

</details>

<details>
<summary>Problem 40: <code>getUsername()</code></summary>

Try `indexOf()` then `slice()`.

</details>

## Problems 41-49: Numbers

<details>
<summary>Problem 41: <code>isFiniteNumber()</code></summary>

Try `Number.isFinite()`.

</details>

<details>
<summary>Problem 42: <code>isIntegerId()</code></summary>

Try `Number.isInteger()`.

</details>

<details>
<summary>Problem 43: <code>toFixedScore()</code></summary>

Try `toFixed()`.

</details>

<details>
<summary>Problem 44: <code>parseBuildNumber()</code></summary>

Try `Number.parseInt()`.

</details>

<details>
<summary>Problem 45: <code>parseDuration()</code></summary>

Try `Number.parseFloat()`.

</details>

<details>
<summary>Problem 46: <code>isNaNValue()</code></summary>

Try `Number.isNaN()`.

</details>

<details>
<summary>Problem 47: <code>clampRetryCount()</code></summary>

Try `Math.max()`.

</details>

<details>
<summary>Problem 48: <code>capWorkers()</code></summary>

Try `Math.min()`.

</details>

<details>
<summary>Problem 49: <code>roundDuration()</code></summary>

Try `Math.round()`.

</details>

## Problem 50: Diagnostic

Each function reuses something from Problems 01-49. Open only the one you're stuck on.

<details>
<summary><code>isValidRetryCount()</code></summary>

A `Number` method that checks for whole numbers, combined with `&&` and a comparison.

</details>

<details>
<summary><code>normalizeEnvironment()</code></summary>

Two string methods, one after the other: one removes outer whitespace, one changes case.

</details>

<details>
<summary><code>getTicketNumber()</code></summary>

Three steps: find the dash, take everything after it, then turn that text into a number. Problems 39-40 and 44 used the pieces.

</details>

<details>
<summary><code>shouldBlockRelease()</code></summary>

A comparison, `||`, and `!`.

</details>

<details>
<summary><code>clampWorkers()</code></summary>

Two `Math` methods, one for each limit. Problems 47-48 used them separately.

</details>

<details>
<summary><code>isOddShard()</code></summary>

The remainder operator, `%`.

</details>

## Problems 51-59: Drills

Every function in a drill uses the same feature.

<details>
<summary>Problem 51: getBuildDate, getRunSuffix, getSprintNumber</summary>

Try `slice()`. Negative numbers count from the end of the string.

</details>

<details>
<summary>Problem 52: findFirstFailure, hasProjectSeparator, getValueAfterColon</summary>

Try `indexOf()`. It returns `-1` when the text is missing.

</details>

<details>
<summary>Problem 53: cleanTicketKey, isBlankSummary, getSummaryLength</summary>

Try `trim()`.

</details>

<details>
<summary>Problem 54: isSameBrowser, toTagKey, isPassedStatus</summary>

Try `toLowerCase()`.

</details>

<details>
<summary>Problem 55: isProdUrl, isQaTicket, isRegressionBug</summary>

Try `startsWith()`. It is case-sensitive.

</details>

<details>
<summary>Problem 56: parseDurationMs, parseStoryPoints, getMajorVersion</summary>

Try `Number.parseInt()`. Pass `10` as the second argument.

</details>

<details>
<summary>Problem 57: getSlowestDuration, atLeastOneWorker, getOverrunMs</summary>

Try `Math.max()`.

</details>

<details>
<summary>Problem 58: getAssignee, getRetryCount, getHeadless</summary>

The nullish coalescing operator, `??`.

`||` falls back for **any** falsy value, including `''`, `0`, and `false`. `??` falls back only for `null` or `undefined`, which is why `0` retries and `headless: false` survive. This mix-up is common in test configuration code.

</details>

<details>
<summary>Problem 59: resultLabel, describeTestCount, formatDuration</summary>

The ternary operator, `condition ? valueIfTrue : valueIfFalse`.

</details>

## Concept map

<details>
<summary>Which concepts repeat in which problems (names every method)</summary>


References to Problems 60-100 are from version 1 and will change as those batches are rewritten.

| Concept | First practice | Later practice |
|---|---:|---|
| `typeof` | 1–4 |  |
| `===` | 5 | 11, 72, 98 |
| `%` | 10 | 17, 50 |
| `&&`, `||`, `!` | 12–14 | 50, 81–85, 99–100 |
| `.length` | 22 | 36, 67, 95 |
| `startsWith()` | 23 | 55, 61 |
| `endsWith()` | 24 | 62 |
| `includes()` | 25 | 63, 92 |
| `toLowerCase()` | 26 | 35, 50, 54, 64, 91, 93 |
| `toUpperCase()` | 27 | 65 |
| `trim()` | 28 | 36, 50, 53, 66, 91 |
| character indexing | 29–30 | 68–69 |
| `slice()` | 31–32 | 39–40, 50–52, 70, 93, 95 |
| `indexOf()` | 39–40 | 50, 52 |
| `replace()` / `replaceAll()` | 33 | 94 |
| `Number.isFinite()` | 41 | 80 |
| `Number.isInteger()` | 42 | 50 |
| `toFixed()` | 43 |  |
| `Number.parseInt()` | 44 | 50, 56 |
| `Number.parseFloat()` | 45 |  |
| `Number.isNaN()` | 46 |  |
| `Math.max()` | 47 | 50, 57, 74 |
| `Math.min()` | 48 | 50, 75 |
| `Math.round()` | 49 | 77 |
| `??` | 58 | 86 |
| ternary `? :` | 59 | 90 |
| range comparisons | 18–19 | 88 |

### `||` vs `??`

- `||` falls back for **any falsy value**, including `''` and `0`.
- `??` falls back only for **`null` or `undefined`**.

Problems 58 and 86–87 deliberately reinforce this distinction because it is common in JavaScript configuration and test automation code.

</details>
