import { createStore } from 'vuex'
import { LOAD_STATE, SET_JOB, SET_TEMPLATE } from './mutation-types';
import { GET_LETTER, TEMPLATE_IS_VALID } from './getter-types';
import letter from '../api/letter';

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
        letter.addTemplate(payload);
    },

    [SET_JOB](state, payload) {
        state.job = payload;
    },

    [LOAD_STATE](state) {
        letter.loadLastTemplate()
            .then(template => state.template = template);
    }
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

export default createStore({ state, mutations, getters });