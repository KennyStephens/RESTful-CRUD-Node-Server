<template>
  <div>
    <button @click="loadCharacter">clickheerre</button>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Overwatch Masters</h1>
          <h2 class="subtitle">The Characters</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4" v-for="character in characterData" :key="character._id">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="columns">
                    <div class="column"><span class="is-uppercase is-size-5">{{ character.name }}</span></div>
                  </div>
                  <div class="column">
<img :src="character.imageUrl" alt="Avatar" style="max-height:375px;">
                  </div>
                  
                  
                </div>
                <div class="flip-card-back">
                  <h1>Name: {{ character.name }}</h1>
                  <p>Class: {{ character.class }}</p>
                  <p>Ultimate: {{ character.ultimate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 300px;
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
  background-color: #F19C1D;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #218ffe;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-front img {
  float: right;
  position: relative;
  top: -60px;
}

.flip-card-front span {
  float: left;
  position: relative;
  top: 100px;
  transform: rotate(-90deg);
  background: #43484c;
  color: #fff;
}
</style>


