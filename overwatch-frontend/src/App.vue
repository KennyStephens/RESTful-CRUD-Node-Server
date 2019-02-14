<template>
  <div id="app">
    <navbar />
    
    <character-search />
  </div>
</template>

<script>
import CharacterSearch from "./components/CharacterSearch.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    CharacterSearch,
    Navbar
  }
};
</script>

<style lang="scss">

</style>
