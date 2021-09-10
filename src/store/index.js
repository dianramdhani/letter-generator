import { createStore } from 'vuex'
import { SET_JOB, SET_TEMPLATE } from './mutation-types';
import { GET_LETTER, TEMPLATE_IS_VALID } from './getter-types';

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
        state.template = payload;
    },

    [SET_JOB](state, payload) {
        state.job = payload;
    },
};

const getters = {
    [TEMPLATE_IS_VALID]({ template }) {
        return template.includes('<company>') && template.includes('<position>');
    },

    [GET_LETTER]({ template, job }) {
        const { company, position } = job;
        return template
            .replace('<company>', company)
            .replace('<position>', position);
    }
};

const actions = {

};

export default createStore({ state, mutations, getters, actions });