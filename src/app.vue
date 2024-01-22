<script setup lang="ts">
import {
  MyGeneratedComponentBoundToRouter,
  GenericCompBoundToRouter,
} from "./Component";
</script>
<template>
  <span>These should all be valid</span>
  <MyGeneratedComponentBoundToRouter
    :config="{ endpoint: 'e1', output: { foo: 'bar' } }"
  />
  <MyGeneratedComponentBoundToRouter
    :config="{ endpoint: 'e2', output: { baz: 'qux' } }"
  />
  <GenericCompBoundToRouter
    :config="{ endpoint: 'e1', output: { foo: 'bar' } }"
  />
  <GenericCompBoundToRouter
    :config="{ endpoint: 'e2', output: { baz: 'qux' } }"
  />

  <span>
    These are all invalid, output doens't match the endpoint. BUT THEY STILL
    ARE, since the output is just a union of all possible outputs, that doesn't
    get narrowed by the endpoint prop which should be bound by the generic
  </span>
  <MyGeneratedComponentBoundToRouter
    :config="{ endpoint: 'e2', output: { foo: 'bar' } }"
  />
  <MyGeneratedComponentBoundToRouter
    :config="{ endpoint: 'e1', output: { baz: 'qux' } }"
  />
  <GenericCompBoundToRouter
    :config="{ endpoint: 'e2', output: { foo: 'bar' } }"
  />
  <GenericCompBoundToRouter
    :config="{ endpoint: 'e1', output: { baz: 'qux' } }"
  />
</template>
