import Vue from 'vue'
import store from "./store"
import router from "./router"
import App from './App.vue'
import Swiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(Swiper, /* { default global options } */ )
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')