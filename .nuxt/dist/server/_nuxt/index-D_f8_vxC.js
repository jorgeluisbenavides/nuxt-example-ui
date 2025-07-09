import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "bg-yellow p-2" }, _attrs))}> Benavides </span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppAlert = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="--ui-primary p-4">Welcome to the homepage of index</h1>`);
  _push(ssrRenderComponent(_component_AppAlert, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-D_f8_vxC.js.map
