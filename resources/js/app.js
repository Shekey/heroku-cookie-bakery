/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../js/store'
import bakeryApp from './BakeryApp'
import orderList from './ListOrders'

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('cookie', require('./BakeryApp.vue').default)
Vue.use(VueRouter)


const routes = [
    { path: '/', component: bakeryApp },
    { path: '/list', component: orderList }
]

// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    store,
    router
});
