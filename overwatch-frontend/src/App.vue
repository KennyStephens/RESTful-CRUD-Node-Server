<template>
  <div id="app">
    <ow-header></ow-header>
    <router-view />
   
  </div>
</template>

<script>
import OwHeader from "./components/OwHeader.vue";

export default {
  name: "app",
  components: {
    OwHeader
  }
};
</script>

<style lang="scss">

</style>
