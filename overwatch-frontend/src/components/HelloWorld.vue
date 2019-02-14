<template>
  <div class="level">
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
    fetch('http://localhost:5000/name/Reaper', {
      mode: "cors"
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
    }
   }
  }
  
</script>

