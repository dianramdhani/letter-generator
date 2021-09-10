import { createStore } from 'vuex'
import { SET_JOB, SET_TEMPLATE } from './mutation-types';

const state = () => {
    return {
        template: '',
        job: {
            company: '',
            position: ''
        }
    };
};

const mutations = {
    [SET_TEMPLATE](state, payload) {
        state.company = payload;
    },

    [SET_JOB](state, payload) {
        state.job = payload;
    },
};

const actions = {

};

export default createStore({ state, mutations, actions });