import axios from '~/plugins/axios';

const categoria = () => ({
  list: [],
  pagination: {
    pages: null,
    page: 1
  },
  alert: {
    type: 'success',
    state: false,
    success: ''
  }
});

const actions = {
	async getPosts({ commit , state, rootState}) {
    const success = await axios
      .get(
        `categoria/pages=${state.pagination.page}`,
        {
          headers: { Authorization: `JWT ${rootState.auth.token}` }
        }
      )
      .then(function(response) {
        commit('ALL_POSTS', response.data);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  },
};
const mutations = {
	ALL_POSTS(state, payload) {
		console.log('mutations', payload);
		state.list =payload.docs
		state.pagination.pages = payload.pages
  },
};
const getters = {
};
export default {
  state: categoria,
  mutations,
  actions,
  getters
};
