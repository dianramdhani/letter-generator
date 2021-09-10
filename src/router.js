import { createRouter, createWebHashHistory } from 'vue-router';
import FormJob from './pages/FormJob';
import LetterResult from './pages/LetterResult';

const routes = [
    { path: '/', component: FormJob },
    { path: '/letter-result', component: LetterResult },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})