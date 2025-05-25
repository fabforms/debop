/**
 * debop — a minimalist, playful debounce utility.
 *
 * @param {Function} fn     The function to debounce
 * @param {number}   delay  Milliseconds to wait (default: 300)
 * @returns {Function}      A debounced version of fn
 */
export function debop(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

