(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d504c39"],{"1c2e":function(t,i,s){"use strict";var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ulandlis"},[s("div",{staticClass:"liicon"},[t._t("liicon")],2),s("div",{staticClass:"liintro"},[t._t("liintro")],2),s("div",{staticClass:"lidetails"},[t._t("lidetails")],2)])},n=[],a={name:"ulandlis1"},e=a,c=(s("ef84"),s("2877")),l=Object(c["a"])(e,o,n,!1,null,"412804f0",null);i["a"]=l.exports},"30f4":function(t,i,s){},"893c":function(t,i,s){"use strict";s.r(i);var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{"margin-top":"6vh"}},[s("div",{staticClass:"profile"},[t._m(0),s("div",{staticClass:"name"},[s("div",[t._v(" 姓名："+t._s(t.name)+" ")]),s("div",[t._v(" 账号："+t._s(t.account)+" ")]),s("div",[t._v(" 所在村："+t._s(t.vName)+" ")])])]),s("div",{staticClass:"itembar"},[s("div",{staticClass:"item",staticStyle:{"border-bottom":"1px solid #cccccc"}},[s("router-link",{attrs:{to:"/feedcenter",tag:"div"}},[s("ulandlis",[s("span",{staticClass:"iconfont icon-jubao1",attrs:{slot:"liicon"},slot:"liicon"}),s("span",{attrs:{slot:"liintro"},slot:"liintro"},[t._v("意见建议中心")]),s("a",{staticClass:"iconfont icon-you",attrs:{slot:"lidetails"},slot:"lidetails"})])],1)],1),s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/updataProfile",tag:"div"}},[s("ulandlis",[s("span",{staticClass:"iconfont icon-mima",attrs:{slot:"liicon"},slot:"liicon"}),s("span",{attrs:{slot:"liintro"},slot:"liintro"},[t._v("编辑我的资料")]),s("a",{staticClass:"iconfont icon-you",attrs:{slot:"lidetails"},slot:"lidetails"})])],1)],1)]),s("div",{staticClass:"tuichu"},[s("van-button",{attrs:{type:"primary"},on:{click:function(i){return i.stopPropagation(),t.gologin(i)}}},[t._v("退出")])],1)])},n=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"photo"},[s("span",{staticClass:"iconfont icon-wode3"})])}],a=(s("b0c0"),s("ac1f"),s("5319"),s("1c2e")),e={name:"profile",data:function(){return{isshow:!1,old:"",new1:"",new2:"",message:"",isshow1:!1,icon:"iconfont icon-xiaolianchenggong happy",sign:"成功!"}},computed:{name:function(){return this.$store.state.name},account:function(){return this.$store.state.account},vName:function(){return this.$store.state.vname}},components:{ulandlis:a["a"]},methods:{updatapas:function(){var t=this;this.new1!=this.new2?this.message="两次输入新密码不同！":post_updatapas(this.$store.state.userid,this.new1).then((function(i){console.log(i),"修改成功"==i.statue?(t.icon="iconfont icon-xiaolianchenggong happy",t.sign="成功!",t.isshow=!1):(t.icon="iconfont icon-chucuo sed",t.sign="修改失败!"),t.isshow1=!0,setTimeout((function(){t.isshow1=!1}),2900)}),(function(i){t.$mytoast.toast("暂无法修改")}))},showupdata:function(){this.isshow=!0},hidenupdata:function(){this.isshow=!1},gologin:function(){localStorage.removeItem("userVillageid"),localStorage.removeItem("vName"),localStorage.removeItem("userSex"),localStorage.removeItem("userName"),localStorage.removeItem("userAccountid"),localStorage.removeItem("userId"),this.$router.replace("/login")}}},c=e,l=(s("def9"),s("2877")),r=Object(l["a"])(c,o,n,!1,null,"f7727664",null);i["default"]=r.exports},def9:function(t,i,s){"use strict";var o=s("30f4"),n=s.n(o);n.a},ef84:function(t,i,s){"use strict";var o=s("f88d"),n=s.n(o);n.a},f88d:function(t,i,s){}}]);