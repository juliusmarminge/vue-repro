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

  <span>These are all invalid</span>
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
