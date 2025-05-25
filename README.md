# debop

> A playful, minimalist debounce utility for JavaScript and Node.js

## Why debop?

When your app fires events faster than it can handle, **debop** steps in to “bop” extra calls away, ensuring your handler only runs once after the flurry subsides.

- **Tiny & tree-shakeable** ES module  
- **Zero dependencies**  
- **Works** in browsers and Node.js  
- **Fun & memorable** name  

## Install

```bash
npm install debop
````

## Usage

```js
import { debop } from 'debop';

const onResize = debop(() => {
  console.log('Resized!');
}, 200);

window.addEventListener('resize', onResize);
```

## API

### `debop(fn: Function, delay?: number): Function`

* **fn** — Function to debounce
* **delay** — Time in ms to wait after last call (default `300`)
* **Returns** — A debounced version of `fn`

## Test

```bash
npm test
```

This runs `test.js` and should print:

```
✅ debop test passed: called exactly once
```

## License

MIT © Geoffrey Callaghan

---

## Sponsorship

This project is proudly sponsored by **[FabForm.io](https://fabform.io)** — effortless form and data handling for modern web apps.


