<template>
  <div>
    <div>秒杀倒计时组件展示</div>
    <Countdown :targetTime="targetTime"></Countdown>
  </div>
  </template>
  
  <script setup lang="ts">
  import {defineAsyncComponent} from 'vue';
  const Countdown = defineAsyncComponent(() => import("../components/Countdown.vue"));
  const targetTime = new Date('2023-05-20T12:00:00.00Z').getTime();
  </script>
    