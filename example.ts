import { Disposable, setHandler } from "./mod.ts";

const _ctrlc: Disposable = setHandler(() => {
  Deno.exit();
});

console.log("press ctrl + c, will exit");
// loop
