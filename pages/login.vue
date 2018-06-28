<template lang="pug">
  v-container
    sign-In
</template>

<script>
import { mapActions } from 'vuex';
import signIn from '@/components/SignIn';
export default {
  middleware: 'authenticated',
  layout: 'login',
  components: {
    signIn
  }
};
</script>

<style scoped lang='scss'>

</style>