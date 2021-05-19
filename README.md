# deno_ctrlc

[![tag](https://img.shields.io/github/release/justjavac/deno_ctrlc)](https://github.com/justjavac/deno_ctrlc/releases)
[![Build Status](https://github.com/justjavac/deno_ctrlc/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_ctrlc/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_ctrlc)](https://github.com/justjavac/deno_ctrlc/blob/master/LICENSE)

Cross platform handling of Ctrl-C signals.

## Permissions

- `--unstable`

## Usage

```ts
import { Disposable, setHandler } from "https://deno.land/x/ctrlc/mod.ts";

const ctrlc: Disposable = setHandler(() => {
  console.log("press ctrl + c, will exit");
  Deno.exit();
});

// loop
```

### License

[deno_ctrlc](https://github.com/justjavac/deno_ctrlc) is released under the MIT
License. See the bundled [LICENSE](./LICENSE) file for details.
