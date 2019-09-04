import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'
import App from './App.vue'
import state from './store/index'


Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
    router:Router,
    store: new Vuex.Store(state),
    render: h => h(App),
}).$mount('#app')
