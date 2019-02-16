<template>
  <div class="container">
    <div class="level">
      <div class="field">
        <label class="label">Character Name</label>
        <div class="control">
          <input
            id="character-name-input"
            class="input"
            type="text"
            placeholder="Text input"
            value="Zenyatta"
          >
        </div>
      </div>
      <button class="button is-dark" @click="loadCharacter">load data</button>
    </div>

    <transition name="fade">
      <div
        v-if="charDisplay"
        class="columns character"
        :style="{backgroundImage: 'url(' + images[0] + ')'}"
      >
        <div class="column character-info is-one-third">
          <div>
            Name:
            <span id="character-name"></span>
          </div>
          <div>
            Class:
            <span id="character-class"></span>
          </div>
          <div>
            Weapons
            <span id="character-weapon"></span>
          </div>
          <div>
            Ultimate:
            <span id="character-ultimate"></span>
          </div>
        </div>

        <div class="column">
          <img class="is-block slide-in-left" style="margin: auto;" id="character-image">
        </div>
      </div>
    </transition>
  </div>
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
      charImageDisplay: false
    };
  },
  methods: {
    loadCharacter() {
      this.charImageDisplay = true;
      this.charDisplay = true;

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
.character {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 80%;
  margin: auto;
  border-radius: 4px;
}

.character-info {
  background: rgba(255, 255, 255, 0.7);
  margin: 20px 0px;
  border-radius: 0px 4px 4px 0px;
}

/* Transitions and Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-in-left {
  animation: ease-out 0.5s;
  animation-delay: 1s;
}

@keyframes slide-in-left {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>


