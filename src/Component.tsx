import { defineComponent, ref } from "vue";

/**
 * This component get's inferred as any
 * Even though it's a copy-pasta from the docs:
 * @see https://vuejs.org/api/general.html#function-signature
 */
export const GenericComp = defineComponent(
  <T extends string | number>(props: { msg: T; list: T[] }) => {
    // use Composition API here like in <script setup>
    const count = ref(0);

    return () => {
      // render function or JSX
      return (
        <div>
          {count.value} - {props.msg}
        </div>
      );
    };
  },
  // manual runtime props declaration is currently still needed.
  {
    props: ["msg", "list"],
  }
);

/**
 * This component get's properly typed
 */
export const Comp = defineComponent(
  (props: { msg: string; list: string[] }) => {
    // use Composition API here like in <script setup>
    const count = ref(0);

    return () => {
      // render function or JSX
      return (
        <div>
          {count.value} - {props.msg}
        </div>
      );
    };
  },
  // manual runtime props declaration is currently still needed.
  {
    props: ["msg", "list"],
  }
);
