import { createStore } from 'vuex'
import { SET_JOB, SET_TEMPLATE } from './mutation-types';
import { TEMPLATE_IS_VALID } from './getter-types';

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

const getters = {
    [TEMPLATE_IS_VALID]({ template }) {
        return template.includes('<company>') && template.includes('<position>');
    }
};

const actions = {

};

export default createStore({ state, mutations, getters, actions });