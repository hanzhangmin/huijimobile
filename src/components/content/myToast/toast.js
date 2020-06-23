import Vue from 'vue'
import toastComponent from "./toast.vue"
const toastConstructor = Vue.extend(toastComponent)
const instance1 = new toastConstructor({
        el: document.createElement('div')
    })
    // onst instance = new LoadingConstructor({
    //     el: document.createElement('div')
    // })

instance1.show = true // 默认隐藏
const mytoast = {
    toast(message, timeout) { // 显示方法
        instance1.message = message;
        instance1.showtoast = true
        document.body.appendChild(instance1.$el)
        setTimeout(() => {
            instance1.showtoast = false
        }, timeout);
    },
}
export default {
    install() {
        if (!Vue.$mytoast) {
            Vue.$mytoast = mytoast
        }
        Vue.mixin({
            created() {
                this.$mytoast = Vue.$mytoast
            }
        })
    }
}