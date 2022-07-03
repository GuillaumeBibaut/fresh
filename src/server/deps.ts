// -- std --
export {
  extname,
  fromFileUrl,
  toFileUrl,
} from "https://deno.land/std@0.128.0/path/mod.ts";
export { walk } from "https://deno.land/std@0.128.0/fs/walk.ts";
export { serve } from "https://deno.land/std@0.128.0/http/server.ts";
export type {
  ConnInfo,
  Handler as RequestHandler,
  ServeInit,
} from "https://deno.land/std@0.128.0/http/server.ts";

// -- router --
export * as router from "https://crux.land/router@0.0.11";

// -- media types --
export { lookup as mediaTypeLookup } from "https://deno.land/x/media_types@v2.10.2/mod.ts";

// -- esbuild --
// @deno-types="https://deno.land/x/esbuild@v0.14.48/mod.d.ts"
import * as esbuildWasm from "https://unpkg.com/esbuild-wasm@0.14.48/esm/browser.js";
import * as esbuildNative from "https://deno.land/x/esbuild@v0.14.48/mod.js";
// @ts-ignore trust me
const esbuild: typeof esbuildWasm = Deno.run === undefined
  ? esbuildWasm
  : esbuildNative;
export { esbuild, esbuildWasm as esbuildTypes };
export { denoPlugin } from "https://raw.githubusercontent.com/GuillaumeBibaut/esbuild_deno_loader/main/mod.ts"
