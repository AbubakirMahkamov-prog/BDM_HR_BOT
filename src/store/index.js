import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state() {
        return {
            user: {
                id: '988510076',
                is_bot: false,
                first_name: 'Web App 2022',
                last_name: 'bot',
                username: 'webapp2022bot',
                language_code: 'uz',
                photo_url: ''
            }
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
   getters: {
       getUser (state) {
           return state.user
       }
   }
})
export default store;