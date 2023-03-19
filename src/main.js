import {createApp} from 'vue'
import App from './App.vue'
import axios from "axios";
import { createStore } from 'vuex'

const store =  createStore({
    state: {
        students: [],
    },
    actions: {
        loadStudents: function ({commit}) {
            axios.get('http://127.0.0.1:8000/students/', {}).then((response) => {
                commit('SET_STUDENTS', {students: response.data.results})
            })
        },
    },
    mutations: {
        SET_STUDENTS: (state, {students}) => {
            state.students = students
        },
    },
    getters: {
        students: (state) => {
            return state.students
        }
    }
})
createApp(App).use(store).mount('#app')
