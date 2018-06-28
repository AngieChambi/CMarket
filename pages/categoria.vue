<template lang="pug">
  v-layout(row wrap justify-center)
    v-form(v-model="valid")
      v-text-field(v-model="name" :rules="nameRules" :counter="10" label="Name" required)
      v-text-field(v-model="email" :rules="emailRules" label="E-mail" required)
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ]
  })
};
</script>

<style scoped lang='scss'>
</style>