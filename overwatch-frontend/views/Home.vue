<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-4 character-card"
            v-for="(character, i) in characterData"
            :key="character._id"
          ><router-link :to="/character-detail/ + character.name">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <span class="is-uppercase is-size-4 has-text-weight-bold">{{ character.name }}</span>
                  <img :src="character.imageUrl" alt="Avatar" style="max-height:375px;">
                </div>
                <div class="flip-card-back">
                  <p>
                    Name:
                    <span class="has-text-weight-bold">{{ character.name }}</span>
                  </p>
                  <p>
                    Class:
                    <span class="has-text-weight-bold">{{ character.class }}</span>
                  </p>
                  <p>
                    Weapon:
                    <span class="has-text-weight-bold">{{ character.weapon }}</span>
                  </p>
                  <p>
                    Ultimate:
                    <span class="has-text-weight-bold">{{ character.ultimate }}</span>
                  </p>
                  <button
                    class="button is-primary is-small"
                    style="margin-bottom: 6px;"
                    @click="editCharacter(i)"
                  >Edit Character</button>
                  <button
                    class="button is-danger is-small"
                    @click="deleteCharacter(i)"
                  >Delete Character</button>
                </div>
              </div>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h1 class="is-size-2 has-text-light">Edit a Character</h1>
        <hr>
        <form action="http://localhost:5000/put" method="POST">
          <div class="field">
            <label class="label has-text-light">Name</label>
            <div class="control">
              <input
                id="name"
                class="input"
                type="text"
                placeholder="Character Name"
                name="name"
                :value="characterEditData.name"
              >
            </div>
          </div>
          <div class="field">
            <label class="label has-text-light">Class</label>
            <div class="control">
              <input
                id="characterClass"
                class="input"
                type="text"
                placeholder="Character Class"
                name="characterClass"
                :value="characterEditData.class"
              >
            </div>
          </div>
          <div class="field">
            <label class="label has-text-light">Weapon</label>
            <div class="control">
              <input
                id="weapon"
                class="input"
                type="text"
                placeholder="Character Weapon"
                name="weapon"
                :value="characterEditData.weapon"
              >
            </div>
          </div>
          <div class="field">
            <label class="label has-text-light">Ultimate</label>
            <div class="control">
              <input
                id="ultimate"
                class="input"
                type="text"
                placeholder="Character Ultimate"
                name="ultimate"
                :value="characterEditData.ultimate"
              >
            </div>
          </div>
          <div class="field">
            <label class="label has-text-light">Image URL</label>
            <div class="control">
              <input
                id="imageUrl"
                class="input"
                type="text"
                placeholder="Image URL"
                name="imageUrl"
                :value="characterEditData.imageUrl"
              >
            </div>
          </div>
          <input id="id" type="hidden" :value="characterEditData.id" name="id">
          <div class="field">
            <div class="control">
              <button class="button is-link" type="button" @click="updateCharacter">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <button @click="modalClose" class="modal-close is-large" aria-label="close"></button>
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
      characterData: [],
      characterEditData: {}
    };
  },
  methods: {
    deleteCharacter(i) {
      const characterId = this.characterData[i]._id;
      return fetch(`http://localhost:5000/delete/${characterId}`, {
        method: "DELETE"
      })
        .then(result => {
          return console.log(result);
        })
        .catch(err => console.log(err));
    },
    editCharacter(i) {
      const modal = document.querySelector(".modal").classList.add("is-active");

      const characterData = this.characterData[i];
      // console.log(characterData._id);

      this.characterEditData = {
        id: characterData._id,
        name: characterData.name,
        class: characterData.class,
        weapon: characterData.weapon,
        ultimate: characterData.ultimate,
        imageUrl: characterData.imageUrl
      };
    },
    updateCharacter() {
      // console.log(this.characterEditData);
      const id = document.getElementById("id").value;
      const name = document.getElementById("name").value;
      const characterClass = document.getElementById("characterClass").value;
      const weapon = document.getElementById("weapon").value;
      const ultimate = document.getElementById("ultimate").value;
      const imageUrl = document.getElementById("imageUrl").value;

      const updatedCharacterData = {
        id,
        name,
        characterClass,
        weapon,
        ultimate,
        imageUrl
      };
      console.log(updatedCharacterData);
      fetch("http://localhost:5000/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCharacterData)
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    },
    modalClose() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("is-active");
    }
  },
  created() {
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
};
</script>

<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 250px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-image: linear-gradient(#f19c1d, #da880f);
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #405275;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.flip-card-front img {
  /* float: right; */
  position: relative;
  height: 300px;
  top: -35px;
}

.flip-card-front span {
  float: left;
  position: relative;
  top: -20px;
  margin-left: 10px;
  /* transform: rotate(-90deg);  */
  color: #405275;
  z-index: 1;
}

.flip-card-back p {
  margin-bottom: 8px;
}

.character-card {
  margin-bottom: 50px;
}

.modal-background {
  background: rgba(0, 0, 0, 0.95);
}
</style>


