# Problem Index

Problems 50-59 are version 2. Problems 60-100 are still version 1 and will be rewritten in batches. See `docs/v2-plan.md`.

| # | Category | Function | Focus |
|---:|---|---|---|
| 1 | Primitive Types | `isString()` | `typeof` |
| 2 | Primitive Types | `isNumber()` | `typeof` |
| 3 | Primitive Types | `isBoolean()` | `typeof` |
| 4 | Primitive Types | `isUndefined()` | `typeof` |
| 5 | Primitive Types | `isNull()` | `===` |
| 6 | Operators | `addRetryCounts()` | `binary +` |
| 7 | Operators | `subtractOpenBugs()` | `binary -` |
| 8 | Operators | `multiplyTestRuns()` | `binary *` |
| 9 | Operators | `divideTestCases()` | `binary /` |
| 10 | Operators | `isEven()` | `%` |
| 11 | Evaluators | `hasPassed()` | `===` |
| 12 | Evaluators | `canRetry()` | `&&, <` |
| 13 | Evaluators | `needsAttention()` | `||` |
| 14 | Evaluators | `isReady()` | `!` |
| 15 | Operators | `incrementRunNumber()` | `+` |
| 16 | Operators | `decrementQueueCount()` | `-` |
| 17 | Operators | `getRemainder()` | `%` |
| 18 | Evaluators | `isWithinRetryLimit()` | `<=` |
| 19 | Evaluators | `isAtLeastPriority()` | `>=` |
| 20 | Primitive Types | `isTruthy()` | `Boolean` |
| 21 | Strings | `getEnvironmentLabel()` | `string primitive` |
| 22 | Strings | `getEnvironmentLength()` | `.length` |
| 23 | Strings | `hasProdPrefix()` | `startsWith` |
| 24 | Strings | `hasApiSuffix()` | `endsWith` |
| 25 | Strings | `containsSmoke()` | `includes` |
| 26 | Strings | `normalizeStatus()` | `toLowerCase` |
| 27 | Strings | `normalizeTeamName()` | `toUpperCase` |
| 28 | Strings | `trimEnvironment()` | `trim` |
| 29 | Strings | `getFirstCharacter()` | `[]` |
| 30 | Strings | `getLastCharacter()` | `[]` |
| 31 | Strings | `getTicketPrefix()` | `slice` |
| 32 | Strings | `getTicketIdText()` | `slice` |
| 33 | Strings | `replaceEnvironment()` | `replace` |
| 34 | Strings | `repeatSeparator()` | `repeat` |
| 35 | Strings | `hasCaseInsensitiveStatus()` | `toLowerCase + ===` |
| 36 | Strings | `getStatusCharacters()` | `trim + length` |
| 37 | Strings | `isBlankText()` | `trim + ===` |
| 38 | Strings | `formatBuildLabel()` | `template literal` |
| 39 | Strings | `getDomain()` | `indexOf + slice` |
| 40 | Strings | `getUsername()` | `indexOf + slice` |
| 41 | Numbers | `isFiniteNumber()` | `Number.isFinite` |
| 42 | Numbers | `isIntegerId()` | `Number.isInteger` |
| 43 | Numbers | `toFixedScore()` | `toFixed` |
| 44 | Numbers | `parseBuildNumber()` | `Number.parseInt` |
| 45 | Numbers | `parseDuration()` | `Number.parseFloat` |
| 46 | Numbers | `isNaNValue()` | `Number.isNaN` |
| 47 | Numbers | `clampRetryCount()` | `Math.max` |
| 48 | Numbers | `capWorkers()` | `Math.min` |
| 49 | Numbers | `roundDuration()` | `Math.round` |
| 50 | Diagnostic | `isValidRetryCount()`, `normalizeEnvironment()`, `getTicketNumber()`, `shouldBlockRelease()`, `clampWorkers()`, `isOddShard()` | Mixed review |
| 51 | Drill | `getBuildDate()`, `getRunSuffix()`, `getShortSha()` | `slice` |
| 52 | Drill | `findFirstFailure()`, `hasProjectSeparator()`, `getValueAfterColon()` | `indexOf` |
| 53 | Drill | `cleanTicketId()`, `isBlankComment()`, `countVisibleCharacters()` | `trim` |
| 54 | Drill | `isSameBrowser()`, `toTagKey()`, `isPassedStatus()` | `toLowerCase` |
| 55 | Drill | `isProdUrl()`, `isQaTicket()`, `isCommentLine()` | `startsWith` |
| 56 | Drill | `parseDurationMs()`, `parseRetryAfter()`, `getMajorVersion()` | `Number.parseInt` |
| 57 | Drill | `getSlowestDuration()`, `atLeastOneWorker()`, `getOverrunMs()` | `Math.max` |
| 58 | Drill | `getBaseUrl()`, `getRetryCount()`, `getHeadless()` | `??` |
| 59 | Drill | `resultLabel()`, `describeTestCount()`, `formatDuration()` | `ternary` |
| 60 | Evaluators | `isLongRunning()` | `>` |
| 61 | Strings | `startsWithQa()` | `startsWith` |
| 62 | Strings | `endsWithBug()` | `endsWith` |
| 63 | Strings | `containsLogin()` | `includes` |
| 64 | Strings | `lowercaseBrowser()` | `toLowerCase` |
| 65 | Strings | `uppercaseSeverity()` | `toUpperCase` |
| 66 | Strings | `trimTicket()` | `trim` |
| 67 | Strings | `getTestNameLength()` | `.length` |
| 68 | Strings | `getSecondCharacter()` | `[]` |
| 69 | Strings | `getLastTicketDigit()` | `[]` |
| 70 | Strings | `sliceSuitePrefix()` | `slice` |
| 71 | Numbers | `isPositive()` | `>` |
| 72 | Numbers | `isZero()` | `===` |
| 73 | Numbers | `absoluteDelta()` | `Math.abs` |
| 74 | Numbers | `maxRetries()` | `Math.max` |
| 75 | Numbers | `minDuration()` | `Math.min` |
| 76 | Numbers | `ceilWaitMinutes()` | `Math.ceil` |
| 77 | Numbers | `roundPercentage()` | `Math.round` |
| 78 | Numbers | `parsePort()` | `Number` |
| 79 | Numbers | `isSafeId()` | `Number.isSafeInteger` |
| 80 | Numbers | `isPositiveFinite()` | `Number.isFinite + >` |
| 81 | Evaluators | `canDeploy()` | `&&` |
| 82 | Evaluators | `shouldSkip()` | `||` |
| 83 | Evaluators | `isRetryableStatus()` | `||` |
| 84 | Evaluators | `isHealthy()` | `&&` |
| 85 | Evaluators | `hasNoFailures()` | `!` |
| 86 | Evaluators | `selectWorkerCount()` | `??` |
| 87 | Evaluators | `selectBrowser()` | `||` |
| 88 | Evaluators | `isWithinDuration()` | `>= && <=` |
| 89 | Evaluators | `isPriorityEscalation()` | `||` |
| 90 | Evaluators | `labelRisk()` | `ternary` |
| 91 | Strings | `buildCaseInsensitiveKey()` | `trim + toLowerCase` |
| 92 | Strings | `hasSmokeTag()` | `includes` |
| 93 | Strings | `getEnvironmentCode()` | `toLowerCase + slice` |
| 94 | Strings | `replaceSpacesWithDash()` | `replaceAll` |
| 95 | Strings | `getEmailDomainLength()` | `slice + length` |
| 96 | Numbers | `getPercentage()` | `/ *` |
| 97 | Numbers | `getRemainingPercent()` | `-` |
| 98 | Evaluators | `isComplete()` | `===` |
| 99 | Evaluators | `needsRerun()` | `&& + <` |
| 100 | Evaluators | `isReleaseReady()` | `&&` |
