/**
 * Object that releases resources when "dispose" is invoked.
 */
export interface Disposable {
  /**
   * Releases any resources held by the implementing object.
   */
  dispose(): void;
}

function fnExit() {
  Deno.exit();
}

let disposed: boolean = false;

export function setHandler(onCtrlC: () => void = fnExit): Disposable {
  if (!Deno.isatty(Deno.stdin.rid)) {
    return {
      dispose: () => {},
    };
  }

  Deno.setRaw(Deno.stdin.rid, true);
  disposed = false;

  const data: Uint8Array = new Uint8Array(1);
  Deno.stdin.read(data).then(() => {
    if (disposed) return;
    if (data[0] === 0x03) {
      onCtrlC();
    }
  });

  return {
    dispose: () => {
      disposed = true;
      Deno.setRaw(Deno.stdin.rid, false);
      // pause
    },
  };
}
