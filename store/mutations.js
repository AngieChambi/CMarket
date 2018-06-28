export default {
  LOGIN(state, payload) {
    console.log('mutations', payload);
    console.log('tag', state);
    this.$router.push('/')
    state.auth = payload
  }
};
