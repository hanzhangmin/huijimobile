(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba26306e"],{"02ea":function(t,e,i){"use strict";var n=i("54ff"),r=i.n(n);r.a},"06c5":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a630"),i("fb6a"),i("b0c0"),i("d3b7"),i("25f0"),i("3ca3");var n=i("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(n["a"])(t,e):void 0}}},"0f8e":function(t,e,i){"use strict";var n=i("791c"),r=i.n(n);r.a},"29fc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("div",{staticClass:"header"},[i("Headergoback",[i("span",{attrs:{slot:"Headertitle"},slot:"Headertitle"},[t._v(t._s(t.title))])])],1),t.showgujia?i("gujia"):t._e(),t.showgujia?t._e():i("div",{staticClass:"container"},[t.show1?i("div",[i("table",{attrs:{border:"0",cellspacing:"5",cellpadding:"5"}},[i("tr",[i("td",[t._v("会议主题：")]),i("td",[t._v(t._s(t.huiyi.title))])]),i("tr",[i("td",[t._v("会议时间：")]),i("td",[t._v(t._s(t.huiyi.time))])]),i("tr",[i("td",[t._v("会议地点：")]),i("td",[t._v(t._s(t.huiyi.location))])]),i("tr",[i("td",[t._v("会议主持人：")]),i("td",[t._v(t._s(t.huiyi.host))])]),i("tr",[i("td",[t._v("会议记录人：")]),i("td",[t._v(t._s(t.huiyi.recorder))])]),i("tr",[i("td",[t._v("会议参与人员：")]),i("td",[t._v(t._s(t.huiyi.actor))])])]),i("p",[t._v(t._s(t.huiyi.content))])]):t._e(),t.show2?i("div",[i("table",{attrs:{border:"0",cellspacing:"5",cellpadding:"5"}},[i("tr",[i("td",[t._v("活动主题：")]),i("td",[t._v(t._s(t.huodong.name))])]),i("tr",[i("td",[t._v("活动时间：")]),i("td",[t._v(t._s(t.huodong.time))])]),i("tr",[i("td",[t._v("活动地点：")]),i("td",[t._v(t._s(t.huodong.location))])])]),i("p",[t._v(t._s(t.huodong.content))])]):t._e(),t.show3?i("div",[i("table",{attrs:{border:"0",cellspacing:"5",cellpadding:"5"}},[i("tr",[i("td",[t._v("迁移人姓名：")]),i("td",[t._v(t._s(t.qianyi.name))])]),i("tr",[i("td",[t._v("迁移人性别：")]),i("td",[t._v(t._s(0===t.qianyi.sex?"男":"女"))])]),i("tr",[i("td",[t._v("迁移时间：")]),i("td",[t._v(t._s(t.qianyi.migrationTime))])]),i("tr",[i("td",[t._v("迁移地址：")]),i("td",[t._v(t._s(t.qianyi.migrationLocation))])])])]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[i("p",[t._v("迁移相关文档：")]),0===t.imgs.length?i("p",[t._v(" 暂无 ")]):t._l(t.imgs,(function(t,e){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"p"}],key:e})}))],2),t._l(t.imgs,(function(e,n){return i("div",{key:n},[i("van-image",{attrs:{src:e},scopedSlots:t._u([{key:"loading",fn:function(){return[i("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1)}))],2)],1)},r=[],a=(i("d81d"),i("4fad"),i("3835")),o=i("83a3"),s=i("9c56"),c=i("a0fb"),u=i("1bab"),l={name:"vadetail",components:{Headergoback:c["a"],gujia:o["a"]},data:function(){return{title:"",huiyi:{},huodong:{},qianyi:{},show1:!1,show2:!1,show3:!1,imgs:[],showgujia:!0}},computed:{type:function(){return this.$route.query.type},id:function(){return this.$route.query.id}},created:function(){var t=this;switch(this.type){case 1:this.title="行政村会议",this.show1=!0,Object(u["C"])(this.id).then((function(e){console.log(e);for(var i=0,n=Object.entries(e);i<n.length;i++){var r=Object(a["a"])(n[i],2),o=r[0],c=r[1];t.$set(t.huiyi,o,Object(s["b"])(c))}try{t.imgs=e.relatedDocuments.map((function(t){return t.url}))}catch(u){}t.showgujia=!1}),(function(e){t.$mytoast.toast("加载失败！",2e3)}));break;case 2:this.title="村组织活动",this.show2=!0,Object(u["x"])(this.id).then((function(e){console.log(e);for(var i=0,n=Object.entries(e);i<n.length;i++){var r=Object(a["a"])(n[i],2),o=r[0],c=r[1];t.$set(t.huodong,o,Object(s["b"])(c))}try{t.imgs=e.relatedDocuments.map((function(t){return t.url}))}catch(u){}t.showgujia=!1}),(function(e){t.$mytoast.toast("加载失败！",2e3)}));break;case 3:this.title="户口迁入",this.show3=!0,Object(u["l"])(this.id).then((function(e){console.log(e);for(var i=0,n=Object.entries(e);i<n.length;i++){var r=Object(a["a"])(n[i],2),o=r[0],c=r[1];t.$set(t.qianyi,o,Object(s["b"])(c))}for(var u=0,l=Object.entries(e);u<l.length;u++){var d=Object(a["a"])(l[u],2),f=d[0],v=d[1];t.$set(t.qianyi,f,Object(s["b"])(v))}try{t.imgs=e.relatedDocuments.map((function(t){return t.url}))}catch(h){}t.showgujia=!1}),(function(e){t.$toast.fail("加载失败！")}));break;case 4:this.title="户口迁出",this.show3=!0,Object(u["l"])(this.id).then((function(e){console.log(e);for(var i=0,n=Object.entries(e);i<n.length;i++){var r=Object(a["a"])(n[i],2),o=r[0],c=r[1];t.$set(t.qianyi,o,Object(s["b"])(c))}try{t.imgs=e.relatedDocuments.map((function(t){return t.url}))}catch(u){}t.showgujia=!1}),(function(e){t.$toast.fail("加载失败！")}));break;default:break}},mounted:function(){}},d=l,f=(i("6743"),i("2877")),v=Object(f["a"])(d,n,r,!1,null,"3fa97f03",null);e["default"]=v.exports},3835:function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t}i.d(e,"a",(function(){return s}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(i.push(o.value),e&&i.length===e)break}catch(c){r=!0,a=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw a}}return i}}var a=i("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return n(t)||r(t,e)||Object(a["a"])(t,e)||o()}},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,r=i("69f3"),a=i("7dd0"),o="String Iterator",s=r.set,c=r.getterFor(o);a(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,r=e.index;return r>=i.length?{value:void 0,done:!0}:(t=n(i,r),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4a70":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Header",style:{"background-color":t.backcolor,color:t.fontcolor}},[i("div",{staticClass:"Header_left"},[t._t("Header_left")],2),i("div",{staticClass:"Header_title"},[t._t("Header_title")],2),i("div",{staticClass:"Header_right"},[t._t("Header_right")],2)])},r=[],a={name:"Header",props:{backcolor:{type:String,default:"#cf2d28"},fontcolor:{type:String,default:"#ffffff"}}},o=a,s=(i("02ea"),i("2877")),c=Object(s["a"])(o,n,r,!1,null,"5b42002e",null);e["a"]=c.exports},"4d63":function(t,e,i){var n=i("83ab"),r=i("da84"),a=i("94ca"),o=i("7156"),s=i("9bf2").f,c=i("241c").f,u=i("44e7"),l=i("ad6d"),d=i("9f7f"),f=i("6eeb"),v=i("d039"),h=i("69f3").set,g=i("2626"),b=i("b622"),p=b("match"),y=r.RegExp,m=y.prototype,_=/a/g,w=/a/g,j=new y(_)!==_,O=d.UNSUPPORTED_Y,x=n&&a("RegExp",!j||O||v((function(){return w[p]=!1,y(_)!=_||y(w)==w||"/a/i"!=y(_,"i")})));if(x){var C=function(t,e){var i,n=this instanceof C,r=u(t),a=void 0===e;if(!n&&r&&t.constructor===C&&a)return t;j?r&&!a&&(t=t.source):t instanceof C&&(a&&(e=l.call(t)),t=t.source),O&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var s=o(j?new y(t,e):y(t,e),n?this:m,C);return O&&i&&h(s,{sticky:i}),s},S=function(t){t in C||s(C,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},$=c(y),k=0;while($.length>k)S($[k++]);m.constructor=C,C.prototype=m,f(r,"RegExp",C)}g("RegExp")},"4df4":function(t,e,i){"use strict";var n=i("0366"),r=i("7b0b"),a=i("9bdd"),o=i("e95a"),s=i("50c4"),c=i("8418"),u=i("35a1");t.exports=function(t){var e,i,l,d,f,v,h=r(t),g="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,y=void 0!==p,m=u(h),_=0;if(y&&(p=n(p,b>2?arguments[2]:void 0,2)),void 0==m||g==Array&&o(m))for(e=s(h.length),i=new g(e);e>_;_++)v=y?p(h[_],_):h[_],c(i,_,v);else for(d=m.call(h),f=d.next,i=new g;!(l=f.call(d)).done;_++)v=y?a(d,p,[l.value,_],!0):l.value,c(i,_,v);return i.length=_,i}},"4fad":function(t,e,i){var n=i("23e7"),r=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},"54ff":function(t,e,i){},6743:function(t,e,i){"use strict";var n=i("ceaf"),r=i.n(n);r.a},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}i.d(e,"a",(function(){return n}))},"6f53":function(t,e,i){var n=i("83ab"),r=i("df75"),a=i("fc6a"),o=i("d1e7").f,s=function(t){return function(e){var i,s=a(e),c=r(s),u=c.length,l=0,d=[];while(u>l)i=c[l++],n&&!o.call(s,i)||d.push(t?[i,s[i]]:s[i]);return d}};t.exports={entries:s(!0),values:s(!1)}},"791c":function(t,e,i){},"83a3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gujia"},[i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"}),i("div",{staticClass:"item"})])}],a={name:"gujia"},o=a,s=(i("0f8e"),i("2877")),c=Object(s["a"])(o,n,r,!1,null,"7dcc1790",null);e["a"]=c.exports},"9c56":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return r}));i("4d63"),i("ac1f"),i("25f0"),i("5319");function n(t){return null===t||void 0===t||""===t||"undefined"===t||"null"===t?"--":t}function r(t,e){var i=new Date(t),n={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e}},a0fb:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header",[i("span",{staticClass:"iconfont icon-zuo",staticStyle:{"font-size":"2rem"},attrs:{slot:"Header_left"},on:{click:t.goback},slot:"Header_left"}),i("span",{attrs:{slot:"Header_title"},slot:"Header_title"},[t._t("Headertitle")],2)])],1)},r=[],a=(i("c975"),i("4a70")),o={name:"Headergoback",components:{Header:a["a"]},methods:{goback:function(){1===this.$route.path.indexOf("vhelp")||1===this.$route.path.indexOf("vaffairs")?this.$router.push("/index/home"):1===this.$route.path.indexOf("zijinbody")?this.$router.push("/cwzj"):1===this.$route.path.indexOf("cwzj")?this.$router.push("/index/home"):this.$router.go(-1)}}},s=o,c=i("2877"),u=Object(c["a"])(s,n,r,!1,null,null,null);e["a"]=u.exports},a630:function(t,e,i){var n=i("23e7"),r=i("4df4"),a=i("1c7e"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},c975:function(t,e,i){"use strict";var n=i("23e7"),r=i("4d64").indexOf,a=i("a640"),o=i("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?s.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},ceaf:function(t,e,i){},d28b:function(t,e,i){var n=i("746f");n("iterator")},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,a=i("1dde"),o=i("ae40"),s=a("map"),c=o("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,i){var n=i("da84"),r=i("fdbc"),a=i("e260"),o=i("9112"),s=i("b622"),c=s("iterator"),u=s("toStringTag"),l=a.values;for(var d in r){var f=n[d],v=f&&f.prototype;if(v){if(v[c]!==l)try{o(v,c,l)}catch(g){v[c]=l}if(v[u]||o(v,u,d),r[d])for(var h in a)if(v[h]!==a[h])try{o(v,h,a[h])}catch(g){v[h]=a[h]}}}},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),a=i("da84"),o=i("5135"),s=i("861d"),c=i("9bf2").f,u=i("e893"),l=a.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var v=f.prototype=l.prototype;v.constructor=f;var h=v.toString,g="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var i=g?e.slice(7,-1):e.replace(b,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("861d"),a=i("e8b5"),o=i("23cb"),s=i("50c4"),c=i("fc6a"),u=i("8418"),l=i("b622"),d=i("1dde"),f=i("ae40"),v=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),b=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var i,n,l,d=c(this),f=s(d.length),v=o(t,f),h=o(void 0===e?f:e,f);if(a(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?r(i)&&(i=i[g],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return b.call(d,v,h);for(n=new(void 0===i?Array:i)(p(h-v,0)),l=0;v<h;v++,l++)v in d&&u(n,l,d[v]);return n.length=l,n}})}}]);