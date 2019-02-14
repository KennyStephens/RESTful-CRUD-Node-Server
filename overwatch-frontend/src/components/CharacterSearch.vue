<template>
  <div class="container">
    <div id="character" :style="{backgroundImage: 'url(' + images[0] + ')'}">
      <div id="character-name"></div>
      <div id="character-class"></div>
      <div id="character-weapon"></div>
      <div id="character-ultimate"></div>
      <img id="character-image" src>
    </div>

    <div class="field">
      <label class="label">Character Name</label>
      <div class="control">
        <input id="character-name-input" class="input" type="text" placeholder="Text input">
      </div>
    </div>

    <button class="button is-dark" @click="loadCharacter">load data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/46/Hanamura_concept.jpg/800px-Hanamura_concept.jpg?version=cba0e20ddb6e4d0a188668500b8bb7ab']
    };
  },
  methods: {
    loadCharacter() {
      const characterNameInput = document.getElementById("character-name-input")
        .value;

      fetch(`http://localhost:5000/name/${characterNameInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data[0]);
          const characterData = data[0];
          document.getElementById("character-name").innerHTML =
            characterData.name;
          document.getElementById("character-class").innerHTML =
            characterData.class;
          document.getElementById("character-weapon").innerHTML =
            characterData.weapon;
          document.getElementById("character-ultimate").innerHTML =
            characterData.ultimate;
          document
            .getElementById("character-image")
            .setAttribute("src", characterData.imageUrl);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>


