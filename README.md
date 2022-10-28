# deno_ctrlc

Cross platform handling of Ctrl-C signals.

## Try it

```bash
deno run https://deno.land/x/ctrlc/example.ts
```

## Usage

```ts
import { Disposable, setHandler } from "https://deno.land/x/ctrlc/mod.ts";

const ctrlc: Disposable = setHandler(() => {
  Deno.exit();
});

console.log("press ctrl + c, will exit");
// loop
```

### License

[deno_ctrlc](https://github.com/justjavac/deno_ctrlc) is released under the MIT
License. See the bundled [LICENSE](./LICENSE) file for details.
