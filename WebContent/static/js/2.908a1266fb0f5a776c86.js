webpackJsonp([2],{"3m0R":function(e,t){},ErzX:function(e,t){},SVnT:function(e,t){},WFIi:function(e,t){},r6Dy:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("yFfA"),o={data:function(){return{goodsUrl:"",sorts:["所有分类","代步工具","手机","电脑","数码","电器","衣物","书籍","体育健身","乐器","其他"]}},methods:{getSaleGoods:function(e){this.$router.push("/sale?type="+e),console.log("菜单发送了消息"),n.a.$emit("isGetGoodList",e)}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sortMenu"},[s("ul",{staticClass:"menuList"},e._l(e.sorts,function(t,n){return s("li",{staticClass:"menuItem",on:{click:function(t){e.getSaleGoods(n)}}},[e._v("\n    \t\t"+e._s(t)+"\n    \t")])}))])},staticRenderFns:[]};var i=s("VU/8")(o,r,!1,function(e){s("WFIi")},"data-v-338c1b08",null).exports,a={created:function(){this.user=localStorage.user,console.log(localStorage.user)},data:function(){return{logUrl:"/dachuang/LogServlet",user:""}},methods:{log:function(){var e=this;this.registerModel;e.$http.get(e.logUrl).then(function(t){console.log(t.body),1==t.body.code?(e.message="注销成功",console.log(t.body),n.a.$emit("logSuccess"),e.user="",localStorage.user="",console.log("用户注销成功"),this.$router.push("/sale")):e.msg=t.body.message})},delCookie:function(e){console.log(this.getCookie(e)),this.setCookie(e,"",-1)},getCookie:function(e){for(var t=e+"=",s=document.cookie.split(";"),n=0;n<s.length;n++){for(var o=s[n];" "==o.charAt(0);)o=o.substring(1);if(-1!=o.indexOf(t))return o.substring(t.length,o.length)}},setCookie:function(e,t,s){var n=new Date;n.setTime(n.getTime()+24*s*60*60*1e3);var o="expires="+n.toUTCString();console.log(o),document.cookie=e+"="+t+"; "+o+"; path=/",console.log(document.cookie)}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topMenu"},[e._m(0),e._v(" "),s("div",{staticClass:"user"},[s("a",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],attrs:{id:"avatar"}},[s("img"),e._v(" "),s("span",[e._v(e._s(e.user))])]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]},[e._v("个人中心")]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:!e.user,expression:"!user"}],attrs:{href:"#/login"}},[e._v("登录")]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],on:{click:e.log}},[e._v("退出登录")]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:!e.user,expression:"!user"}],attrs:{href:"#/login"}},[e._v("注册")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"menuList"},[t("li",[t("a",{attrs:{href:"/"}},[this._v("首页")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#/sale"}},[this._v("二手商品")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#/buy"}},[this._v("求购商品")])]),this._v(" "),t("li",[t("a",[this._v("关于我们")])])])}]};var l=s("VU/8")(a,u,!1,function(e){s("3m0R")},"data-v-341ccca1",null).exports,c={data:function(){return{loginUrl:"/dachuang/isStatus"}},methods:{redirect:function(){this.$router.push("/sale/releaseSale")},checkLogin:function(){this.$http.get(this.loginUrl).then(function(e){0==e.body.code&&(console.log("用户未登录"),localStorage.user="",this.$router.push("/login"))},function(e){console.log(e),this.$router.push("/login")})}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"releaseMenu"},[s("div",[s("button",{on:{click:function(t){e.redirect()}}},[e._v("发布二手")])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",[this._v("求购二手")])])}]};var h={data:function(){return{}},components:{sortMenu:i,releaseMenu:s("VU/8")(c,v,!1,function(e){s("ErzX")},"data-v-c7d93dac",null).exports,topMenu:l}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sale"},[t("div",{staticClass:"sortMenuWrapper"},[t("sortMenu")],1),this._v(" "),t("topMenu"),this._v(" "),t("transition",{attrs:{name:"fade"}},[t("router-view")],1),this._v(" "),t("div",{staticClass:"releaseMenuWrapper"},[t("releaseMenu")],1)],1)},staticRenderFns:[]};var f=s("VU/8")(h,d,!1,function(e){s("SVnT")},"data-v-64e01bba",null);t.default=f.exports}});
//# sourceMappingURL=2.908a1266fb0f5a776c86.js.map