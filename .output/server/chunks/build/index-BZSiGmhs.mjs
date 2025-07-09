import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-blue-800 p-4" }, _attrs))}> Benavides </span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppAlert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const dataSource = [
      { id: 1, name: "Juan", age: 30 },
      { id: 2, name: "Ana", age: 28 },
      { id: 3, name: "Pedro", age: 40 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DxDataGrid), mergeProps({
        "data-source": dataSource,
        "show-borders": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DxColumn), {
              "data-field": "id",
              caption: "ID"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DxColumn), {
              "data-field": "name",
              caption: "Nombre"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DxColumn), {
              "data-field": "age",
              caption: "Edad"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DxColumn), {
                "data-field": "id",
                caption: "ID"
              }),
              createVNode(unref(DxColumn), {
                "data-field": "name",
                caption: "Nombre"
              }),
              createVNode(unref(DxColumn), {
                "data-field": "age",
                caption: "Edad"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DataGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppAlert = __nuxt_component_0;
  const _component_DataGrid = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="--ui-primary p-4">Welcome to the homepage of index</h1>`);
  _push(ssrRenderComponent(_component_AppAlert, null, null, _parent));
  _push(ssrRenderComponent(_component_DataGrid, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BZSiGmhs.mjs.map
