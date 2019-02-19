<template>
  <div>{{ characterData.name }}</div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      characterData: {}
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
  }
};
</script>

