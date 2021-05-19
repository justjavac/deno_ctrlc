import { Disposable, setHandler } from "./mod.ts";

const ctrlc: Disposable = setHandler(() => {
  console.log("press ctrl + c, will exit");
  Deno.exit();
});

// loop
