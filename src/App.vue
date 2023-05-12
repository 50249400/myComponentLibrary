<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="changePage('HelloWorld')">切换到pageA</button>
  <button @click="changePage('HelloWorld1')">切换到pageB</button> -->

  <router-view></router-view>
    <!-- <keep-alive include="HelloWorld"> -->
  <!-- <router-view v-slot="{ Component }">
    <keep-alive include="HelloWorld">
      <component :is="Component"/>
    </keep-alive>
  </router-view>  -->
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  name: "App",

  setup() {
    const router = useRouter();
    const route = useRoute();
    const changePage = (page) => {
      router.push({ name: page });
    };

    return {
      changePage,
      route
    };
  },
};
</script>
