<template>
  <section class="section">
    <div class="container">
      <div class="card card-background" :style="{ backgroundImage: 'url(' + images[0] + ')' }">
        <div class="card-content">
          <div>{{ characterData.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      characterData: {},
      images: [
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/46/Hanamura_concept.jpg/800px-Hanamura_concept.jpg?version=cba0e20ddb6e4d0a188668500b8bb7ab",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/de/Anubis_concept.jpg/800px-Anubis_concept.jpg?version=01cc8d241e63fa2721da953444149630"
      ]
    };
  },
  created() {
    fetch(`http://localhost:5000/name/${this.name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.characterData = data[0];
      })
      .catch(err => console.log(err));
  }
};
</script>

