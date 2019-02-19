<template>
  <section class="section">
    <div class="container">
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
            </div>
          </div>
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
      randomImage: 0
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
  border-radius: 6px;
  box-shadow: 3px 3px 3px #aaa;
  overflow: hidden;
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
  transition: all .75s;
}
</style>


