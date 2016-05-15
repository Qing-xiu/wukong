require('sass/lib.scss');

import {rem2px, px2rem} from 'js/retina.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from 'route/app.vue'



Vue.use(VueRouter)

const App = Vue.extend(require('route/app.vue'));
const router = new VueRouter();

router.map({
	
})

router.start(App, '#J_app')

