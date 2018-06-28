<template lang="pug">
  v-layout(row wrap justify-center)
    v-flex.login(xs12 sm10 md5 xl5 )
      v-card(color="white" class="elevation-24")
        v-card-title(primary-title class="secondary white--text")
        v-form.form
          v-text-field(v-model="users.username" label="Username" autocomplete="username")
          v-text-field(v-model="users.password" label="Password" type="password" autocomplete="current-password")
          v-card-actions
            v-btn.button(color="secondary" large dark @click="login") Ingresar
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data: () => ({
    users: {
      username: 'admin',
      password: '12345'
    }
  }),
  methods: {
    login() {
      this.$store.dispatch('login', { user: this.users });
    }
    // ...mapActions({
    //   login: 'login'
    // })
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style scoped lang='scss'>
.layout {
  .form {
    padding: 20px;
    .button {
      width: 100%;
    }
  }
}
</style>