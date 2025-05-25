import { debun } from './index.js';

let callCount = 0;
const debounced = debun(() => callCount++, 100);

debounced();
debounced();
debounced();

setTimeout(() => {
  console.assert(callCount === 1, 'Debounced function should only be called once');
  console.log('Test passed!');
}, 300);
