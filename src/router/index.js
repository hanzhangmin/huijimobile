import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const login = () =>
    import ('views/login/login')
const welcome = () =>
    import ('views/login/welcome')
const index = () =>
    import ("views/index/index")
const home = () =>
    import ("views/home/home")
const feedback = () =>
    import ("views/feedback/feedback")
    // 我的
const profile = () =>
    import ("views/profile/profile")
const updataProfile = () =>
    import ("views/profile/updataProfile")


const vhelp = () =>
    import ("views/villageviews/vhelp")
const vhelpobj = () =>
    import ("views/villageviews/vhelpobj")
const vhelphu = () =>
    import ("views/villageviews/vhelphu")
const vhelpxiang = () =>
    import ("views/villageviews/vhelpxiang")

const vaffairs = () =>
    import ("views/villageviews/vaffairs")
const vaactivity = () =>
    import ("views/villageviews/vaffairsactivity")
const vahuiyi = () =>
    import ("views/villageviews/vaffairshuiyi")
const vainput = () =>
    import ("views/villageviews/vaffairsinput")
const vaoutput = () =>
    import ("views/villageviews/vaffairsoutput")

const vadetails = () =>
    import ("views/villageviews/vadetails")

const vbulletins = () =>
    import ("views/villageviews/vbulletins")
const vmanagers = () =>
    import ("views/villageviews/vmanagers")

// 组织活动
const zzactivity = () =>
    import ("views/home/paltes/s1dzzhdlist")
const zzhdintro = () =>
    import ("views/home/paltes/s1dzzhdintro")
    // 资源列表
const ziyuanlist = () =>
    import ("views/home/paltes/s4ziyuanlist")

// 资金列表
const zijinintro = () =>
    import ("views/home/paltes/s6zijinintro")
const zijinbody = () =>
    import ("views/home/paltes/s6zijinbody")

// 资产列表
const zichanlist = () =>
    import ("views/home/paltes/s5zichanlist")
    // 资产列表加详情
const zichanintro = () =>
    import ("views/home/paltes/s5zichanintro")
    // 项目建设
const xjintro = () =>
    import ("../views/home/paltes/s7xjintro")
    // 学习园地
const stylist = () =>
    import ("views/home/paltes/s8studylist")

// 党员发展
const dyfzlist1 = () =>
    import ("views/home/paltes/s2dyfzlist1")
    //党组织活动
const dwdzzhd = () =>
    import ("views/home/dangwu/huodong")
    // 党员
const dwdyfz = () =>
    import ("views/home/dangwu/dangyuan")
    // 财务
const cwzy = () =>
    import ("views/home/sanzi/ziyuan")
const cwzc = () =>
    import ("views/home/sanzi/zichan")
const cwzj = () =>
    import ("views/home/sanzi/zijin")
    // 村务
const cwxj = () =>
    import ("views/home/cunwu/xiangjian")
const cwqy = () =>
    import ("views/home/cunwu/qianyi")
const cwhd = () =>
    import ("views/home/cunwu/huodong")
const cwhy = () =>
    import ("views/home/cunwu/huiyi")
    // pdf阅读器
const pdfloadernew = () =>
    import ("views/pdfloadernew")
    // 反馈
const feedcenter = () =>
    import ("views/feedback/feedcenter")
const fdyes = () =>
    import ("views/feedback/feedbackyes")
const fdno = () =>
    import ("views/feedback/feedbackno")

const fddetailsyes = () =>
    import ("views/feedback/fddetailsyes")
    // 404
const page404 = () =>
    import ("views/404page.vue")
const routes = [{
        path: '',
        redirect: "/login",
        meta: "登录"
    },
    {
        path: "/login",
        component: login,
        meta: "登录"
    },
    {
        path: "/welcome",
        component: welcome,
        meta: "欢迎"
    },
    {
        path: "/dwdzzhd",
        component: dwdzzhd,
        meta: "党务/党组织活动"
    },
    {
        path: "/dwdyfz",
        component: dwdyfz,
        meta: "党务/党员发展"
    },
    {
        path: "/cwzy",
        component: cwzy,
        meta: "财务/资源"
    },
    {
        path: "/cwzc",
        component: cwzc,
        meta: "财务/资产"
    },
    {
        path: "/cwzj",
        component: cwzj,
        meta: "财务/资金"
    },
    {
        path: "/cwxj",
        component: cwxj,
        meta: "村务/项目建设"
    },
    {
        path: "/cwhy",
        component: cwhy,
        meta: "村务/行政村会议"
    },
    {
        path: "/cwhd",
        component: cwhd,
        meta: "村务/行政村活动"
    },
    {
        path: "/cwqy",
        component: cwqy,
        meta: "村务/户口迁移"
    },
    {
        path: "/index",
        component: index,
        meta: "首页",
        children: [{
            path: '',
            redirect: 'home'
        }, {
            path: 'home',
            component: home
        }, {
            path: 'feedback',
            component: feedback
        }, {
            path: 'profile',
            component: profile
        }]
    },
    {
        path: "/updataProfile",
        component: updataProfile,
        meta: "修改密码"
    },
    {
        path: "/vmanagers",
        component: vmanagers,
        meta: "村干部"
    },
    {
        path: "/vhelp",
        component: vhelp,
        meta: "村补助",
        children: [{
            path: '',
            redirect: 'vhelpxiang'
        }, {
            path: "vhelphu",
            component: vhelphu
        }, {
            path: "vhelpxiang",
            component: vhelpxiang
        }, {
            path: "vhelpobj",
            component: vhelpobj
        }]
    },
    {
        path: "/vaffairs",
        component: vaffairs,
        meta: "村事务",
        children: [{
                path: "",
                redirect: "vainput"
            },
            {
                path: "vahuiyi",
                component: vahuiyi
            },
            {
                path: "vaactivity",
                component: vaactivity
            },
            {
                path: "vainput",
                component: vainput
            }, {
                path: "vaoutput",
                component: vaoutput
            },
        ]
    },
    {
        path: "/vbulletins",
        component: vbulletins,
        meta: "村公告"
    },
    {
        path: '/vadetails',
        component: vadetails,
        meta: '事务详情'
    },
    {
        path: '/zzactivity',
        component: zzactivity,
        meta: '党组织活动',
    },
    {
        path: '/zzhdintro',
        component: zzhdintro,
        meta: '党组织活动',
    },
    {
        path: '/stylist',
        component: stylist,
        meta: '学习园地',
    },
    {
        path: "/dyfzlist1",
        component: dyfzlist1,
        meta: "积极分子"
    },
    {
        path: "/pdfloadernew",
        component: pdfloadernew,
        meta: "学习园地"
    },
    {
        path: "/xjintro",
        component: xjintro,
        meta: "项目建设"
    },
    {
        path: "/ziyuanlist",
        component: ziyuanlist,
        meta: "资源"
    },
    {
        path: "/zichanlist",
        component: zichanlist,
        meta: "资产"
    },
    {
        path: "/zichanintro",
        component: zichanintro,
        meta: "资产"
    },
    {
        path: "/zijinintro/:id/:name",
        component: zijinintro,
        meta: "资金"
    },
    {
        path: "/zijinbody/:zid",
        component: zijinbody,
        meta: "资金",
    },
    {
        path: "/feedcenter",
        component: feedcenter,
        meta: "反馈",
        children: [{
                path: "",
                redirect: "fdyes"
            },
            {
                path: "fdyes",
                component: fdyes
            },
            {
                path: "fdno",
                component: fdno
            }
        ]
    },
    {
        path: "/fddetailsyes",
        component: fddetailsyes,
        meta: "反馈",
    },
    {
        path: "*",
        component: page404
    }
]

const router = new VueRouter({
    routes,
    // mode: "history"
})

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//         return routerPush.call(this, location).catch(error => error)
//     }
// 设置路由title, 导航守卫
// to目的导航， from发射导航 next下一步执行函数
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta;
    next() // next()为必须使用的函数
})
export default router