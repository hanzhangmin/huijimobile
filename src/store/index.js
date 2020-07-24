// import createPersistedState from 'vuex-persistedstate'
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let domain1 = "https://reset_hj.shubuzuo.top/";
let domain2 = "https://reset_hj-dev.oss-cn-beijing.aliyuncs.com/"
localStorage.setItem("imgurl", `${domain2}old-version/HJResourse/Village/`)
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
        vid: localStorage.vid,
        userid: localStorage.userid,
        zid: localStorage.zid,
        name: localStorage.name,
        sex: localStorage.sex,
        vname: localStorage.vname,
        account: localStorage.account,
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
        token: localStorage.token
    },
    mutations: {
        set_vid(state, vid) {
            state.vid = vid;
            localStorage.vid = vid
        },
        set_userid(state, userid) {
            state.userid = userid;
            localStorage.userid = userid
        },
        set_usezid(state, zid) {
            state.zid = zid;
            localStorage.zid = zid
        },
        set_name(state, name) {
            state.name = name
            localStorage.name = name
        },
        set_sex(state, sex) {
            state.sex = sex
            localStorage.sex = sex
        },
        set_vname(state, vname) {
            state.vname = vname
            localStorage.vname = vname
        },
        set_account(state, account) {
            state.account = account
            localStorage.account = account
        },
        set_token(state, token) {
            state.token = token
            localStorage.token = token
        },
        del_token(state) {
            state.token = ''
            localStorage.removeItem('token')
        }

    }
})

export default store