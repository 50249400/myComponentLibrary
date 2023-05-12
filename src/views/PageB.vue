<template>
  <div>这是pageB</div>
    <keep-alive>
      <hello-world-1></hello-world-1>
    </keep-alive>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from 'vue';
const HelloWorld1 = defineAsyncComponent(() => import("../components/HelloWorld1.vue"));

</script>
  