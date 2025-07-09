import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, d as useHead } from "../server.mjs";
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
const _style_0 = ".spotlight[data-v-15ef2dd2]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-15ef2dd2]{position:fixed}.-bottom-1\\/2[data-v-15ef2dd2]{bottom:-50%}.left-0[data-v-15ef2dd2]{left:0}.right-0[data-v-15ef2dd2]{right:0}.grid[data-v-15ef2dd2]{display:grid}.mb-16[data-v-15ef2dd2]{margin-bottom:4rem}.mb-8[data-v-15ef2dd2]{margin-bottom:2rem}.h-1\\/2[data-v-15ef2dd2]{height:50%}.max-w-520px[data-v-15ef2dd2]{max-width:520px}.min-h-screen[data-v-15ef2dd2]{min-height:100vh}.place-content-center[data-v-15ef2dd2]{place-content:center}.overflow-hidden[data-v-15ef2dd2]{overflow:hidden}.bg-white[data-v-15ef2dd2]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-15ef2dd2]{padding-left:2rem;padding-right:2rem}.text-center[data-v-15ef2dd2]{text-align:center}.text-8xl[data-v-15ef2dd2]{font-size:6rem;line-height:1}.text-xl[data-v-15ef2dd2]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-15ef2dd2]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-15ef2dd2]{font-weight:300}.font-medium[data-v-15ef2dd2]{font-weight:500}.leading-tight[data-v-15ef2dd2]{line-height:1.25}.font-sans[data-v-15ef2dd2]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-15ef2dd2]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-15ef2dd2]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-15ef2dd2]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-15ef2dd2]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-15ef2dd2]{font-size:2.25rem;line-height:2.5rem}}";
const _sfc_main = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [
        {
          innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`
        }
      ],
      style: [
        {
          innerHTML: `*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, _attrs))} data-v-15ef2dd2><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight" data-v-15ef2dd2></div><div class="max-w-520px text-center" data-v-15ef2dd2><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-15ef2dd2>${ssrInterpolate(__props.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-15ef2dd2>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-15ef2dd2"]]);
export {
  error500 as default
};
//# sourceMappingURL=error-500-CG-a5w8m.js.map
