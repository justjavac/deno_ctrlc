import { Disposable, setHandler } from "./mod.ts";

const _ctrlc: Disposable = setHandler(() => {
  console.log("press ctrl + c, will exit");
  Deno.exit();
});

// loop
