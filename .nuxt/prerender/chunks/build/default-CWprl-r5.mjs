import { mergeProps, useSSRContext } from 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/h3/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/ufo/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/destr/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/hookable/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unstorage/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/ohash/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/klona/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/defu/dist/defu.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/scule/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unctx/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/pathe/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/consola/dist/index.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/tailwindcss/colors.js';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unhead/dist/server.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/devalue/index.js';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unhead/dist/utils.mjs';
import 'file:///home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark" }, _attrs))}><header><h1>Mi sitio</h1></header>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer><p>\xA9 2025</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CWprl-r5.mjs.map
