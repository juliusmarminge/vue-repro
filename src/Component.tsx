import { defineComponent } from "vue";

type APIDef = { input: unknown; output: unknown };
type AnyRouter = Record<string, APIDef>;

const myRouter = {
  e1: {
    input: { id: 1 },
    output: { foo: "bar" as const },
  },
  e2: {
    input: undefined,
    output: { baz: "qux" as const },
  },
} satisfies AnyRouter;
type MyRouter = typeof myRouter;

type inferRouterOutput<
  TRouter extends AnyRouter,
  TEndpoint extends keyof TRouter
> = TRouter[TEndpoint]["output"];

/**
 * This component get's inferred as any
 * Even though it's a copy-pasta from the docs:
 * @see https://vuejs.org/api/general.html#function-signature
 */
export const GenericCompBoundToRouter = defineComponent(
  <TEndpoint extends keyof MyRouter>(props: {
    config: {
      endpoint: TEndpoint;
      output: inferRouterOutput<MyRouter, TEndpoint>;
    };
  }) => {
    return () => {
      // render function or JSX
      return (
        <div>
          {props.config.endpoint} {props.config.output}
        </div>
      );
    };
  },
  // manual runtime props declaration is currently still needed.
  {
    props: ["config"] as any,
  }
);

export const GenericComponentForAnyRouter = <TRouter extends AnyRouter>() =>
  defineComponent(
    <TEndpoint extends keyof TRouter>(props: {
      config: {
        endpoint: TEndpoint;
        output: inferRouterOutput<TRouter, TEndpoint>;
      };
    }) => {
      return () => {
        // render function or JSX
        return (
          <div>
            {props.config.endpoint} {props.config.output}
          </div>
        );
      };
    },
    // manual runtime props declaration is currently still needed.
    {
      props: ["config"] as any,
    }
  );

export const MyGeneratedComponentBoundToRouter =
  GenericComponentForAnyRouter<MyRouter>();
