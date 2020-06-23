import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Swiper from 'vue-awesome-swiper'
// import Swiper from "swiper"
// import loading from "./components/commen/loading/loading"
// Vue.use(loading)
// require styles
import 'swiper/css/swiper.css'
import mytoast from "./components/content/myToast/toast"
Vue.use(mytoast)
Vue.use(Swiper, /* { default global options } */ )

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')