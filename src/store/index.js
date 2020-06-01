// import createPersistedState from 'vuex-persistedstate'
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
localStorage.setItem("imgurl", "http://47.105.118.98/jdpt/")
localStorage.setItem("studyurl", "")
localStorage.setItem("vmanagerurl", "http://47.105.118.98/jdpt/HJResourse/VillagecadresImages/")
localStorage.setItem("vhuiyipurl", "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/")
localStorage.setItem("vhuodongpurl", "http://47.105.118.98/jdpt/HJResourse/Cunhuodong/")
localStorage.setItem("vqypurl", "http://47.105.118.98/jdpt/HJResourse/HuKouqianyi/")
localStorage.setItem("zzhdpurl", "http://47.105.118.98/jdpt/HJResourse/Zuzhihuodong/")
    // localStorage.setItem("styfilesdddj", "http://47.105.118.98/jdpt/HJResourse/Law/")
localStorage.setItem("feedbackurl", "http://47.105.118.98/jdpt/HJResourse/Feedback/")
localStorage.setItem("ziyuanurl", "http://47.105.118.98/jdpt/HJResourse/CunHuiyi/")
const store = new Vuex.Store({
    state: {
        vid: localStorage.getItem("userVillageid"),
        userid: localStorage.getItem("userId"),
        name: localStorage.getItem("userName"),
        sex: localStorage.getItem("userSex"),
        vname: localStorage.getItem("vName"),
        account: localStorage.getItem("userAccountid"),
        imgurl: localStorage.getItem("imgurl"),
        studyurl: localStorage.getItem("studyurl"),
        vmanagerurl: localStorage.getItem("vmanagerurl"), // 村干部照片路径
        vhuiyipurl: localStorage.getItem("vhuiyipurl"), // 村会议照片路径
        vhuodongpurl: localStorage.getItem("vhuodongpurl"), // 村活动照片路径
        vqypurl: localStorage.getItem("vqypurl"), // 迁移照片路径
        zzhdpurl: localStorage.getItem("zzhdpurl"), // 组织活动照片路径
        // styfilesdddj: localStorage.getItem("styfilesdddj"), // 学习园地党规党纪
        feedbackurl: localStorage.getItem("feedbackurl"), // 反馈图片路径 
        ziyuanurl: localStorage.getItem("ziyuanurl"), // 资源图片路径
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
    },
    // plugins: [
    //     createPersistedState({
    //         reducer(state, paths) {
    //             return {
    //                 // 只储存state中的imgurl
    //                 imgurl: state.imgurl, //只存储state信息并且在state中imgurl命名替换成imgurl,
    //                 studyurl: state.studyurl,
    //                 vmanagerurl: state.vmanagerurl,
    //                 vhuiyipurl: state.vhuiyipurl,
    //                 vhuodongpurl: state.vhuodongpurl,
    //                 vqypurl: state.vqypurl,
    //                 zzhdpurl: state.zzhdpurl,
    //                 styfilesdddj: state.styfilesdddj,
    //                 feedbackurl: state.feedbackurl,
    //                 ziyuanurl: state.ziyuanurl,
    //             }
    //         }
    //     })
    // ]
})

export default store