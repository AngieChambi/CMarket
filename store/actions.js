import axios from '~/plugins/axios';
export default {
  async login({
    commit
  }, payload) {
    console.log('actions', payload);
    const list = await axios
      .post('/auth/login', payload.user)
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          commit('LOGIN', response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  
  };
