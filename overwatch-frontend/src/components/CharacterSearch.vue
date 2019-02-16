<template>

</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/46/Hanamura_concept.jpg/800px-Hanamura_concept.jpg?version=cba0e20ddb6e4d0a188668500b8bb7ab",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/de/Anubis_concept.jpg/800px-Anubis_concept.jpg?version=01cc8d241e63fa2721da953444149630"
      ],
      charDisplay: false,
      charImageDisplay: false,
      characterData: []
    };
  },
  methods: {
    loadCharacter() {
      this.charImageDisplay = true;
      this.charDisplay = true;

      fetch(`http://localhost:5000/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.characterData = data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>


