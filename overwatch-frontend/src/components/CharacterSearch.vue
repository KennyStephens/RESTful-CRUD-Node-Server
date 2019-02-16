<template>
  <div class="container">
    <button class="btn btn-primary" @click="loadCharacter">load data</button>
    <div class="row">
      <div class="col-6">
        <div
          class="card"
          v-for="character in characterData"
          :key="character._id"
        >
          <div class="card-body">
            <h5 class="card-title">Name: {{ character.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Class: {{ character.class }}</h6>
            <img :src="character.imageUrl" alt>
          </div>
        </div>
      </div>
    </div>
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


