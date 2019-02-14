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
    fetch('http://localhost:5000/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
      })
      .catch(err => console.log(err));
    }
   }
  }
  
</script>

