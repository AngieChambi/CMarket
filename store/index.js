import Vuex from 'vuex';
import categoria from './modules/categoria';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: '',
      user: {
        un: '',
        ps: ''
      },
      persona: []
    },
    actions,
    mutations,
    getters,
    modules: {
      categoria,
    }
  });
};

export default createStore;
