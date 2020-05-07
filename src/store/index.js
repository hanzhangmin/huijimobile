import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        vid: "",
        userid: "",
        name: "",
        sex: "",
        vname: "",
        account: "",
        imgurl: "http://47.105.118.98/jdpt/",
        studyurl: "",
        vmanagerurl: "http://47.105.118.98/jdpt/HJResourse/VillagecadresImages/",
        // 村干部照片路径
        vhuiyipurl: "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/",
        // 村会议照片路径
        vhuodongpurl: "http://47.105.118.98/jdpt/HJResourse/Cunhuodong/",
        // 村活动照片路径
        vqypurl: "",
        // 迁移照片路径
        // 组织活动照片路径
        zzhdpurl: "http://47.105.118.98/jdpt/HJResourse/Zuzhihuodong/",
        // 学习园地党规党纪
        styfilesdddj: "http://47.105.118.98/jdpt/HJResourse/Law/",
        // 反馈图片路径
        feedbackurl: "http://47.105.118.98/jdpt/HJResourse/Feedback/",
        // 资源图片路径
        ziyuanurl: "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/"
    },

})

export default store