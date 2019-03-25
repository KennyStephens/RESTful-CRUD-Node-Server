<template>
  <section class="section">
    <div class="container">
      <div id="deleted" class="notification is-danger is-size-5" v-show="deleteShow">
      </div>
      <div
        class="card card-background"
        :style="{ backgroundImage: 'url(' + images[randomImage] + ')' }"
      >
        <div class="card-content" style="padding-left: 0;">
          <div class="columns">
            <div class="column">
              <div class="characterDataContainer">
                <p class="is-size-2">
                  Name:
                  <span class="has-text-weight-bold">{{ characterData.name }}</span>
                </p>
                <p class="is-size-2">
                  Class:
                  <span class="has-text-weight-bold">{{ characterData.class }}</span>
                </p>
                <p class="is-size-2">
                  Weapon:
                  <span class="has-text-weight-bold">{{ characterData.weapon }}</span>
                </p>
                <p class="is-size-2">
                  Ultimate:
                  <span class="has-text-weight-bold">{{ characterData.ultimate }}</span>
                </p>
              </div>
            </div>
            <div class="column">
              <img :src="characterData.imageUrl" alt style="display:block; margin: auto;">
              <button
                class="button is-danger is-small is-pulled-right"
                @click="deleteCharacter"
              >Delete Character</button>
              <button
                class="button is-primary is-small is-pulled-right"
                style="margin-bottom: 10px; margin-right: 6px;"
                @click="editCharacter"
              >Edit Character</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h1 class="is-size-2 has-text-light">Edit a Character</h1>
        <hr>
        <form action="https://secure-reef-86107.herokuapp.com/put" method="POST">
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
            <label class="label has-text-light">Quote</label>
            <div class="control">
              <input
                id="quote"
                class="input"
                type="text"
                placeholder="Character Quote"
                name="quote"
                :value="characterEditData.quote"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      characterData: {},
      deleteShow: false,
      images: [
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/46/Hanamura_concept.jpg/800px-Hanamura_concept.jpg?version=cba0e20ddb6e4d0a188668500b8bb7ab",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/de/Anubis_concept.jpg/800px-Anubis_concept.jpg?version=01cc8d241e63fa2721da953444149630",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7c/Horizon_Lunar_Colony2.jpg/800px-Horizon_Lunar_Colony2.jpg?version=93768bc0b649b500598b55280a3792b6",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/de/Volskaya_Industries.jpg/800px-Volskaya_Industries.jpg?version=32ce315dc87acb47cc4f7c63b77a7359",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/ec/Dorado-streets2.jpg/800px-Dorado-streets2.jpg?version=169b1489d730cd433752748dda7d568c",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/e3/Junkertown.jpg/800px-Junkertown.jpg?version=84c08c834db0a06b228ac84791d07e8c",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/ff/Rialto.jpg/800px-Rialto.jpg?version=dac4caa8127b96038f6f1ad8ce7acd99",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/a6/Route_66.jpg/800px-Route_66.jpg?version=e8ef722a0f15f239dc0ce41ed514ea19",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f8/Blizzard_World.jpg/800px-Blizzard_World.jpg?version=afd31b6ca0499405f63419339f61decf",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/aa/Eichenwalde.png/800px-Eichenwalde.png?version=d6b392a0474f14c222a464db4b7d3bae",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/26/Hollywood-set.jpg/800px-Hollywood-set.jpg?version=159265ed3c4f41dc525300a78ed3dc9c",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1b/King%27s_Row_concept.jpg/800px-King%27s_Row_concept.jpg?version=40b369351471bf85d1aada9cce1857b0",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1b/Numbani_Loading_Screen.jpg/800px-Numbani_Loading_Screen.jpg?version=d56f89662e60d39e75b0a26d4f91c8e6",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/09/Overwatch_Busan.jpg/800px-Overwatch_Busan.jpg?version=8358d5503ce3ce7d783418e062156917",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/45/Ilios.jpg/800px-Ilios.jpg?version=937b74f83771bdd920f992a9b2659a0c",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/45/Ilios.jpg/800px-Ilios.jpg?version=937b74f83771bdd920f992a9b2659a0c",
        "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Oasis.jpg/800px-Oasis.jpg?version=ed607f93ca6c97a31f8ca371164f32b4"
      ],
      randomImage: 0,
      characterEditData: {}
    };
  },
  created() {
    fetch(`https://secure-reef-86107.herokuapp.com/name/${this.name}`, {
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
    this.bgImageChange();
  },
  methods: {
    bgImageChange() {
      const imageArrayLength = this.images.length;
      const imageArraySelection = Math.floor(Math.random() * imageArrayLength);
      this.randomImage = imageArraySelection;
      console.log(imageArraySelection);
    },
    imageTransition() {
      document.querySelector("img").style.opacity = "1";
      document.querySelector("img").style.right = "0";
    },
    deleteCharacter() {
      const characterId = this.characterData._id;
      // console.log(characterId);
      return fetch(`https://secure-reef-86107.herokuapp.com/delete/${characterId}`, {
        method: "DELETE"
      })
        .then(result => {
          // return console.log(result);
          this.deleteShow = true;
          const deleteCharacter = document.getElementById("deleted");
          deleteCharacter.innerHTML = "Character Deleted!";
          setTimeout(() => {
            if (
              this.$router.currentRoute.path !==
              `http://localhost:5000/name/${this.name}`
            ) {
              this.$router.push({ name: "home" });
            }
          }, 4000);

          // console.log(this.$router.currentRoute.path);
          // this.$router.go('/');
        })
        .catch(err => console.log(err));
    },
    editCharacter() {
      const modal = document.querySelector(".modal").classList.add("is-active");

      const characterData = this.characterData;
      // console.log(characterData._id);

      this.characterEditData = {
        id: characterData._id,
        name: characterData.name,
        class: characterData.class,
        weapon: characterData.weapon,
        ultimate: characterData.ultimate,
        imageUrl: characterData.imageUrl,
        quote: characterData.quote
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
      const quote = document.getElementById("quote").value;

      const updatedCharacterData = {
        id,
        name,
        characterClass,
        weapon,
        ultimate,
        imageUrl,
        quote
      };
      // console.log(updatedCharacterData);
      fetch("https://secure-reef-86107.herokuapp.com/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCharacterData)
      })
        .then(result => {
          console.log(result);
          const modal = document.querySelector(".modal");
          modal.classList.remove("is-active");
          this.$router.push({ name: "home" });
        })
        .catch(err => console.log(err));
    },
    modalClose() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("is-active");
    }
  },
  mounted() {
    this.imageTransition();
  }
};
</script>

<style scoped>
.card-background {
  background-size: cover;
  background-position: bottom;
  border-radius: 6px;
  box-shadow: 3px 3px 3px #aaa;
  overflow: hidden;
}

.card-content {
  padding-bottom: 5px;
}

.characterDataContainer {
  background: rgba(255, 255, 255, 0.46);
  padding: 20px;
  border-radius: 0px 6px 6px 0;
}

img {
  max-height: 350px;
  opacity: 0;
  position: relative;
  right: -600px;
  transition: all 0.75s;
}
</style>


