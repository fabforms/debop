# debun

> A modern, minimalist debounce utility for JavaScript and Node.js — ensuring your functions run only after the noise settles.

## Why debun?

In many interactive applications (e.g., handling resize, scroll, input events), you want to delay execution until rapid-fire calls calm down. **debun** offers a tiny, zero-dependency solution:

- **Tree-shakeable** ES module  
- **Works** in both browser and Node.js  
- **Easy** to use and configure  
- **Minimal** overhead

## Installation

```bash
npm install debun
````

## Usage

```js
import { debun } from 'debun';

const onResize = debun(() => {
  console.log('Resized!');
}, 300);

window.addEventListener('resize', onResize);
```

## API

### `debun(fn: Function, delay?: number): Function`

* **fn** — The function to debounce.
* **delay** — Milliseconds to wait after the last call before invoking **fn** (default: `300`).
* **Returns** — A new function that postpones execution until calls stop for `delay` ms.

## Testing

Run the provided test script:

```bash
npm test
# or
node test.js
```

You should see:

```
✅ Test passed: debounced function called exactly once
```

## Contributing

Pull requests, issues, and feature suggestions are welcome! Please open an issue or submit a PR at [github.com/fabforms/debun](https://github.com/fabforms/debun).

## License

MIT © Geoffrey Callaghan

---

## Sponsorship

This project is proudly sponsored by **[FabForm.io](https://fabform.io)** — the easiest way to create, manage, and embed beautiful web forms without writing code.

Give your users seamless form experiences with zero setup!

