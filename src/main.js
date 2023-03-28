import {createApp} from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import axios from "axios";
import { createStore } from 'vuex'
import AuthPage from "@/pages/AuthPage";
import HelloWorld from "@/components/HelloWorld";
import { createI18n } from 'vue-i18n'

const store =  createStore({
    state: {
        students: [],
        user: {
            id: null,
            token: '',
            email: ''
        },
        token: ''
    },
    actions: {
        loadStudents: function ({commit}) {
            console.log(this.state.user.token)
            axios.get('http://127.0.0.1:8000/students/', {headers: {
                    Authorization: 'Token ' + this.state.user.token,
                }}).then((response) => {
                commit('SET_STUDENTS', {students: response.data.results})
            })
        },
        createStudent: function ({commit}, student) {
            console.log(commit)
            axios.post('http://127.0.0.1:8000/students/', student).then(
                () => store.dispatch('loadStudents'))
        },
        deleteStudent: function ({commit}, student_id) {
            console.log(commit)
            axios.delete(`http://127.0.0.1:8000/students/${student_id}/`).then(
                () => store.dispatch('loadStudents'))
        },
        getUser: function ({commit}, data) {
            console.log(data)
            axios.post('http://127.0.0.1:8000/auth/', data).then(
               (response) => {
                   commit('SET_USER', {user: response.data})
               })
        },
        setToken: function ({commit}, token) {
            console.log('SETTING', token)
            commit('SET_VK_ACCESS_TOKEN', {token})
        },
    },
    mutations: {
        SET_STUDENTS: (state, {students}) => {
            state.students = students
        },
        SET_USER: (state, {user}) => {
            state.user = user
        },
        SET_VK_ACCESS_TOKEN: (state, {token}) => {
            state.token = token
        },
    },
    getters: {
        students: (state) => {
            return state.students
        },
        user: (state) => {
            return state.user
        },
        token: (state) => {
            return state.token
        }
    }
})

const routeInfos = [
    {
        path : "/auth",
        component : AuthPage
    },
    {
        path : "/students",
        component : HelloWorld
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

const i18n = createI18n({
    locale: 'ru',
    messages: {
        ru: {
            login: 'Вход',
            students: 'Студенты',
            create: 'Создать'
        },
        tat: {
            login: 'Керү',
            students: 'Студентлар',
            create: 'Ясарга'
        },
    },
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
