import { defineComponent as o, ref as r, createVNode as n, createTextVNode as s } from "vue";
const c = /* @__PURE__ */ o(
  (e) => {
    const t = r(0);
    return () => n("div", null, [t.value, s(" - "), e.msg]);
  },
  // manual runtime props declaration is currently still needed.
  {
    props: ["msg", "list"]
  }
), m = /* @__PURE__ */ o(
  (e) => {
    const t = r(0);
    return () => n("div", null, [t.value, s(" - "), e.msg]);
  },
  // manual runtime props declaration is currently still needed.
  {
    props: ["msg", "list"]
  }
);
export {
  m as Comp,
  c as GenericComp
};
