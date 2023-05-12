<template>
  <div>这是pageA</div>
    <keep-alive include="HelloWorld">
      <hello-world></hello-world>
    </keep-alive>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from 'vue';
const HelloWorld = defineAsyncComponent(() => import("../components/HelloWorld.vue"));

</script>
  