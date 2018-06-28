<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <div v-for="(item, i) in categoria.list" :key="item._id" >
          <p>{{i+1}} - <span>{{item.nombre}}</span></p>
          <strong>{{item.descripcion}}</strong>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import { mapState } from 'vuex';


export default {
  middleware: 'notAuthenticated',
  components: {
    Logo,
    VuetifyLogo
  },
  created () {
    this.$store.dispatch('getPosts')
  },
  computed: {
    ...mapState(['categoria']),
  }
};
</script>
