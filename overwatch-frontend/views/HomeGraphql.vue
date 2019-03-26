<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select class="filter-by-class">
                    <option>Support</option>
                    <option>Damage</option>
                    <option>Tank</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-primary control" @click="filterCharsClass">Filter by Class</button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select class="filter-by-name">
                    <option>Ana</option>
                    <option>Ashe</option>
                    <option>Bastion</option>
                    <option>Brigitte</option>
                    <option>D. Va</option>
                    <option>Doomfist</option>
                    <option>Genji</option>
                    <option>Hanzo</option>
                    <option>Junkrat</option>
                    <option>Lucio</option>
                    <option>McCree</option>
                    <option>Mei</option>
                    <option>Mercy</option>
                    <option>Moira</option>
                    <option>Orisa</option>
                    <option>Pharah</option>
                    <option>Reaper</option>
                    <option>Reinhardt</option>
                    <option>Roadhog</option>
                    <option>Soldier 76</option>
                    <option>Sombra</option>
                    <option>Symmetra</option>
                    <option>Torbjorn</option>
                    <option>Tracer</option>
                    <option>Widowmaker</option>
                    <option>Winston</option>
                    <option>Wrecking Ball</option>
                    <option>Zarya</option>
                    <option>Zenyatta</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-primary control" @click="filterCharsName">Filter by Name</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-4 character-card"
            v-for="character in characterData"
            :key="character._id"
          >
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <span class="is-uppercase is-size-4 has-text-weight-bold">{{ character.name }}</span>
                  <img :src="character.imageUrl" alt="Avatar" style="max-height:375px;">
                </div>
                <div class="flip-card-back">
                  <i class="fas fa-quote-left is-size-3" style="color: rgba(255,255,255,.2)"></i>
                  <h1 class="is-size-4 is-italic has-text-weight-light">{{ character.quote }}</h1>
                  <router-link
                    :to="/character-detail/ + character.name"
                    tag="button"
                    class="button is-primary is-small"
                    style="margin-top: 30px;"
                  >More Details</router-link>
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
      characterData: []
    };
  },
  created() {
    fetch(`https://secure-reef-86107.herokuapp.com`, {
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
  },
  methods: {
    filterCharsClass() {
      const selectInputValue = document.querySelector("select").value;
      console.log(selectInputValue);
      fetch(
        `https://secure-reef-86107.herokuapp.com/class/${selectInputValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.characterData = data;
        })
        .catch(err => console.log(err));
    },
    filterCharsName() {
      const selectInputValue = document.querySelector(".filter-by-name").value;
      console.log(selectInputValue);
      fetch(
        `https://secure-reef-86107.herokuapp.com/name/${selectInputValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
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
  background-image: linear-gradient(#51a3f6, #218ffe);
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
  padding: 15px;
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

.filter {
  display: flex;
  justify-content: center;
}

.filter select {
  width: 200px;
}
</style>


