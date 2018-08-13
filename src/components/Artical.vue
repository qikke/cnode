<template>

</template>

<script>
  export default {
    name: "Artical",
    data() {
      return {
        postInfo: {},
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created() {
      this.getData()

    }
  }
</script>

<style scoped>

</style>