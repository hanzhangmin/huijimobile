(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19053763"],{"02ea":function(t,e,a){"use strict";var r=a("54ff"),i=a.n(r);i.a},"39c2":function(t,e,a){"use strict";var r=a("ca15"),i=a.n(r);i.a},"4a70":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Header",style:{"background-color":t.backcolor,color:t.fontcolor}},[a("div",{staticClass:"Header_left"},[t._t("Header_left")],2),a("div",{staticClass:"Header_title"},[t._t("Header_title")],2),a("div",{staticClass:"Header_right"},[t._t("Header_right")],2)])},i=[],s={name:"Header",props:{backcolor:{type:String,default:"#cf2d28"},fontcolor:{type:String,default:"#ffffff"}}},n=s,o=(a("02ea"),a("2877")),c=Object(o["a"])(n,r,i,!1,null,"5b42002e",null);e["a"]=c.exports},"54ff":function(t,e,a){},"88f5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"header"},[a("Headergoback",[a("span",{attrs:{slot:"Headertitle"},slot:"Headertitle"},[t._v("村务/行政村活动")])])],1),a("div",{staticClass:"container"},[a("s2")],1)])},i=[],s=a("a0fb"),n=a("c3f1"),o={name:"vaffairs",components:{Headergoback:s["a"],s2:n["default"]}},c=o,l=(a("39c2"),a("2877")),f=Object(l["a"])(c,r,i,!1,null,"a01c6e08",null);e["default"]=f.exports},a0fb:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",[a("span",{staticClass:"iconfont icon-zuo",staticStyle:{"font-size":"2rem"},attrs:{slot:"Header_left"},on:{click:t.goback},slot:"Header_left"}),a("span",{attrs:{slot:"Header_title"},slot:"Header_title"},[t._t("Headertitle")],2)])],1)},i=[],s=(a("c975"),a("4a70")),n={name:"Headergoback",components:{Header:s["a"]},methods:{goback:function(){1===this.$route.path.indexOf("vhelp")||1===this.$route.path.indexOf("vaffairs")?this.$router.push("/index/home"):1===this.$route.path.indexOf("zijinbody")?this.$router.push("/cwzj"):1===this.$route.path.indexOf("cwzj")?this.$router.push("/index/home"):this.$router.go(-1)}}},o=n,c=a("2877"),l=Object(c["a"])(o,r,i,!1,null,null,null);e["a"]=l.exports},c975:function(t,e,a){"use strict";var r=a("23e7"),i=a("4d64").indexOf,s=a("a640"),n=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=s("indexOf"),f=n("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!f},{indexOf:function(t){return c?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},ca15:function(t,e,a){}}]);