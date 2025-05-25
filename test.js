import { debop } from './index.js';

async function runTests() {
  let calls = 0;
  const debounced = debop(() => { calls++; }, 100);

  // --- Test 1: rapid burst only fires once ---
  debounced();
  debounced();
  debounced();

  // wait longer than the debounce delay
  await new Promise((r) => setTimeout(r, 150));

  if (calls !== 1) {
    console.error(`❌ Test 1 failed: expected 1 call, got ${calls}`);
    process.exit(1);
  }

  // --- Test 2: another burst fires a second time ---
  debounced();
  debounced();

  await new Promise((r) => setTimeout(r, 150));

  if (calls !== 2) {
    console.error(`❌ Test 2 failed: expected 2 calls total, got ${calls}`);
    process.exit(1);
  }

  console.log('✅ All debop tests passed');
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});

