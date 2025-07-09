import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><p>This page will be displayed at the /about route.</p></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-VWIoVPJG.js.map
