<template>
    <h1>{{ msg }}</h1>
    <button @click="changeReactiveCount">count is: {{ countObj.count }}</button>
    <p>这是helloworld1组件</p>
  </template>
  
  <script>
  import { onMounted, ref, reactive } from 'vue';
  
  export default {
    name: 'HelloWorld1',
    props: {
      msg: String
    },
    setup(){
      let count = ref(0);
      const countObj = reactive({
        count: 0
      });
      
      const changeRefCount = () => {
        count.value++;
      }
      
      const changeReactiveCount = () => {
        countObj.count++;
      }
      
      return {
        count,
        changeRefCount,
        countObj,
        changeReactiveCount
      }
    }
  }
  </script>
  