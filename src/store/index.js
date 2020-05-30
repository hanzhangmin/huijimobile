import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        vid: localStorage.getItem("userVillageid"),
        userid: localStorage.getItem("userId"),
        name: localStorage.getItem("userName"),
        sex: localStorage.getItem("userSex"),
        vname: localStorage.getItem("vName"),
        account: localStorage.getItem("userAccountid"),
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
    mutations: {
        changevid(state, vid) {
            state.vid = vid
        },
        changeuserid(state, userid) {
            state.userid = userid
        },
        changename(state, name) {
            state.name = name
        },
        changesex(state, sex) {
            state.sex = sex
        },
        changevname(state, vname) {
            state.vname = vname
        },
        changeaccount(state, account) {
            state.account = account
        },
    }
})

export default store