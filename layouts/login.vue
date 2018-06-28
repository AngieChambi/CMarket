<template lang="pug">
  v-app.login
    v-container
      nuxt
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.login {
  height: 100vh;
  width: 100vw;
  background-image: url('../static/img/skyline.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    display: flex;
    justify-content: center;
  }
}
</style>