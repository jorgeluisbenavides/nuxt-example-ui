import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/hookable/dist/index.mjs";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/unctx/dist/index.mjs";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/radix3/dist/index.mjs";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/defu/dist/defu.mjs";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/klona/dist/index.mjs";
import "/home/benavides/projects/nuxt/nuxt-example-ui/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark" }, _attrs))}><header><h1>Mi sitio</h1></header>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer><p>© 2025</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CWprl-r5.js.map
