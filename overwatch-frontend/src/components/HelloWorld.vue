<template>
  <div class="level">
    <div id="character">
      <div id="character-name"></div>
      <div id="character-class"></div>
      <div id="character-weapon"></div>
      <div id="character-ultimate"></div>
      <img id="character-image" src="">
    </div>
    <button @click="loadCharacter">load data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    loadCharacter() {
    fetch('http://localhost:5000/name/Zenyatta', {
      method: 'GET',
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
        document.getElementById('character-name').innerHTML = characterData.name;
        document.getElementById('character-class').innerHTML = characterData.class;
        document.getElementById('character-weapon').innerHTML = characterData.weapon;
        document.getElementById('character-ultimate').innerHTML = characterData.ultimate;
        document.getElementById('character-image').setAttribute('src', characterData.imageUrl);

      })
      .catch(err => console.log(err));
    }
   }
  }
  
</script>

