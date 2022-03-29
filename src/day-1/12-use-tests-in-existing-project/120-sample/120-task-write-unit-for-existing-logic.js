/**
 * TASK(120);
 *
 * 1. Uruchom plik `index.html` w swoim ulubionym extension / programie — z serwerem dev.
 * 2. Zobacz, jak działa program a w szczególności moduł `messages.js`
 * 3. Przygotuj nowy plik z testem dla modułu messages — odpowiednio go nazwij i zaktualizuj ten wpis w package.json:
 * ```
 *  "test:task-120": "npm run test:watch -- src/day-1/12-use-tests-in-existing-project/120-sample/[your-test-name].js"
 * ```
 * 4. Napisz testy upewniające nas, że moduł messages działa poprawnie
 *
 * **BONUS:
 * - testy mają cały czas "biegać"... a wtedy:
 *
 * 5. zrefaktoryzuj logikę messages, tak aby zlikwidować powtórzenia w kodzie:
 * ```
 *  const { text, message } = msgArray[currentMessage];
 *  return {
 *    text,
 *    message,
 *    hasNext: Boolean(msgArray[currentMessage + 1]),
 *    hasPrevious: Boolean(msgArray[currentMessage - 1]),
 *  };
 * ```
 * */
