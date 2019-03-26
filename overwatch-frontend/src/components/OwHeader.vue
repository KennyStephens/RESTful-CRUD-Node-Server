<template>
  <section class="hero home-header">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-light">OverwatchDex</h1>
        <h2 class="subtitle has-text-light">The Characters</h2>
        <router-link to="/" class="has-text-light nav-link">Home (REST API)</router-link>
        <span>  |  </span>
        <router-link to="/add-character" class="has-text-light nav-link">Add Character (REST API)</router-link>
        <span>  |  </span>
        <router-link to="/home-graphql" class="has-text-light nav-link">Home (GraphQL)</router-link>
        <span>  |  </span>
        <router-link to="/add-character-graphql" class="has-text-light nav-link">Add Character (GraphQL)</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-header {
  background-image: url("https://overwatch.gamepedia.com/g00/3_c-4vclydhajo.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fvclydhajo.nhtlwlkph.jvtx2ftlkphx2fvclydhajo.nhtlwlkph.jvtx2f8x2f80x2fZrpu-Ivkf-Ihjrnyvbuk.qwnx3fp87j.thyrx3duvaOATS_$/$/$/$/$/$");
}

.nav-link:hover {
  color: #f19c1d !important;
}
</style>

