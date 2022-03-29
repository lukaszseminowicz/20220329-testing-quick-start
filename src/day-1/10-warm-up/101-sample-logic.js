/**
 * A co jakbym powiedział Ci, że "zawsze" testujesz swój kod?
 *
 * - eee no nie... nie pisze testów!
 *
 * - testów nie piszesz, ale testujesz.
 * Sprawdzasz, czy działa. Odpalasz te konsol-logi !
 *
 * */

const sum = (a, b) => a + b;

function sumManyNumbers(...manyThings) {
  return manyThings.reduce(sum);
}

console.log(sumManyNumbers(1));

console.log(sumManyNumbers(1, 2));

console.log(sumManyNumbers(1, 2, 90, 100));
