(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68ac2864"],{"02ea":function(t,e,r){"use strict";var a=r("54ff"),o=r.n(a);o.a},1104:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("div",{staticClass:"header"},[r("Headergoback",[r("span",{attrs:{slot:"Headertitle"},slot:"Headertitle"},[t._v("村补助")])])],1),r("div",{staticClass:"container"},[r("routerbutton"),r("keep-alive",[r("router-view")],1)],1)])},o=[],n=r("a0fb"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("rbbar",[r("div",{attrs:{slot:"rbbar"},slot:"rbbar"},[r("routerbutton",{attrs:{path:"/vhelp/vhelpxiang",activecolor:t.activecolor,activebkcolor:t.activebkcolor}},[r("span",{attrs:{slot:"rbsign"},slot:"rbsign"},[t._v("补助项")])]),r("routerbutton",{attrs:{path:"/vhelp/vhelphu",activecolor:t.activecolor,activebkcolor:t.activebkcolor}},[r("span",{attrs:{slot:"rbsign"},slot:"rbsign"},[t._v("补助户")])]),r("routerbutton",{attrs:{path:"/vhelp/vhelpobj",activecolor:t.activecolor,activebkcolor:t.activebkcolor}},[r("span",{attrs:{slot:"rbsign"},slot:"rbsign"},[t._v("补助对象")])])],1)])},i=[],s=r("cd5c"),l=r("763b"),u={name:"vhrouterbar",components:{rbbar:s["a"],routerbutton:l["a"]},data:function(){return{activecolor:"#cf2d28",activebkcolor:"#cf2e2836"}}},f=u,d=r("2877"),b=Object(d["a"])(f,c,i,!1,null,"28f2e80d",null),v=b.exports,h={name:"vaffairs",components:{Headergoback:n["a"],routerbutton:v},created:function(){}},p=h,_=(r("87a7"),Object(d["a"])(p,a,o,!1,null,"2e0950d6",null));e["default"]=_.exports},"27cb":function(t,e,r){},"4a70":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Header",style:{"background-color":t.backcolor,color:t.fontcolor}},[r("div",{staticClass:"Header_left"},[t._t("Header_left")],2),r("div",{staticClass:"Header_title"},[t._t("Header_title")],2),r("div",{staticClass:"Header_right"},[t._t("Header_right")],2)])},o=[],n={name:"Header",props:{backcolor:{type:String,default:"#cf2d28"},fontcolor:{type:String,default:"#ffffff"}}},c=n,i=(r("02ea"),r("2877")),s=Object(i["a"])(c,a,o,!1,null,"5b42002e",null);e["a"]=s.exports},"54ff":function(t,e,r){},"60c6":function(t,e,r){},7289:function(t,e,r){},"763b":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"routerbutton",style:t.Color,on:{click:t.itemclick}},[t._t("rbsign")],2)},o=[],n=(r("c975"),{name:"routerbutton",props:{path:String,activecolor:{type:String,default:"green"},activebkcolor:{type:String,default:"#cfcfcf"}},computed:{isActive:function(){return!this.$route.path.indexOf(this.path)},Color:function(){return this.isActive?{color:this.activecolor,"background-color":this.activebkcolor}:{}}},methods:{itemclick:function(){try{this.$router.push(this.path)}catch(t){console.log(t)}}}}),c=n,i=(r("9406"),r("2877")),s=Object(i["a"])(c,a,o,!1,null,"366c5ac1",null);e["a"]=s.exports},"87a7":function(t,e,r){"use strict";var a=r("60c6"),o=r.n(a);o.a},9406:function(t,e,r){"use strict";var a=r("7289"),o=r.n(a);o.a},a0fb:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",[r("span",{staticClass:"iconfont icon-zuo",staticStyle:{"font-size":"2rem"},attrs:{slot:"Header_left"},on:{click:t.goback},slot:"Header_left"}),r("span",{attrs:{slot:"Header_title"},slot:"Header_title"},[t._t("Headertitle")],2)])],1)},o=[],n=(r("c975"),r("4a70")),c={name:"Headergoback",components:{Header:n["a"]},methods:{goback:function(){1===this.$route.path.indexOf("vhelp")||1===this.$route.path.indexOf("vaffairs")?this.$router.push("/index/home"):1===this.$route.path.indexOf("zijinbody")?this.$router.push("/cwzj"):1===this.$route.path.indexOf("cwzj")?this.$router.push("/index/home"):this.$router.go(-1)}}},i=c,s=r("2877"),l=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var a=r("83ab"),o=r("d039"),n=r("5135"),c=Object.defineProperty,i={},s=function(t){throw t};t.exports=function(t,e){if(n(i,t))return i[t];e||(e={});var r=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:s,f=n(e,1)?e[1]:void 0;return i[t]=!!r&&!o((function(){if(l&&!a)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,u,f)}))}},c469:function(t,e,r){"use strict";var a=r("27cb"),o=r.n(a);o.a},c975:function(t,e,r){"use strict";var a=r("23e7"),o=r("4d64").indexOf,n=r("a640"),c=r("ae40"),i=[].indexOf,s=!!i&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=c("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(t){return s?i.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},cd5c:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rbbar"},[t._t("rbbar")],2)},o=[],n={name:"rbbar"},c=n,i=(r("c469"),r("2877")),s=Object(i["a"])(c,a,o,!1,null,"7cd51c50",null);e["a"]=s.exports}}]);