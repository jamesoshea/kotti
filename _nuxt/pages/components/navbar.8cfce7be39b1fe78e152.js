webpackJsonp([9],{Bwzy:function(t,a,n){"use strict";n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o});var e=function(){var t=this.$createElement,a=this._self._c||t;return a("section",[a("h1",[this._v("Navbar")]),a("div",{staticClass:"element-example"},[a("div",{staticClass:"d-flex"},[a("KtNavbar")],1)])])},o=[];e._withStripped=!0},FfPL:function(t,a,n){var e=n("apcn");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n("rjj0").default)("4a58a150",e,!1,{sourceMap:!1})},FnB2:function(t,a,n){"use strict";var e=n("bMdm");a.a={name:"KtNavbarDoc",components:{KtNavbar:e.a}}},FxK6:function(t,a,n){"use strict";a.a={name:"KtNavbar",props:{src:String,narrow:{type:Boolean,default:!1},menu:Array},data:function(){return{mobileMenuToggle:!1}},methods:{objectClass:function(t){return[t,this.narrow?t+"--narrow":""]}}}},"ND/g":function(t,a,n){"use strict";n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o});var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{class:t.objectClass("navbar")},[n("div",{class:t.objectClass("navbar-wrapper")},[n("div",{class:["navbar-toggle",{"navbar-toggle--active":t.mobileMenuToggle}],on:{click:function(a){t.mobileMenuToggle=!t.mobileMenuToggle}}},[n("i",{staticClass:"yoco"},[t._v("burger")])]),n("div",{staticClass:"navbar-header"},[n("div",{staticClass:"navbar-logo"},[n("img",{attrs:{src:t.src}})])]),n("div",{staticClass:"navbar-body"},[n("div",{class:t.objectClass("navbar-menu")},[t.menu?n("ul",t._l(t.menu,function(a){return n("li",{key:a.to},[n("i",{staticClass:"yoco",domProps:{textContent:t._s(a.icon)}}),t.narrow?t._e():n("span",{domProps:{textContent:t._s(a.label)}})])})):t._t("navbar-menu")],2)]),n("div",{class:t.objectClass("navbar-footer")},[t._t("navbar-footer")],2),t.mobileMenuToggle?n("div",{staticClass:"navbar-dropdown",on:{click:function(a){t.mobileMenuToggle=!1}}},[n("div",{staticClass:"navbar-menu"},[t.menu?n("ul",t._l(t.menu,function(a){return n("li",{key:a.to},[n("i",{staticClass:"yoco",domProps:{textContent:t._s(a.icon)}}),t._v(" "+t._s(a.label)+"\n\t\t\t\t\t")])})):t._t("navbar-menu")],2)]):t._e()])])},o=[];e._withStripped=!0},NT2Y:function(t,a,n){"use strict";var e=n("FxK6"),o=n("ND/g"),s=n("XyMi"),r=!1;var i=function(t){r||n("wk9V")},c=Object(s.a)(e.a,o.a,o.b,!1,i,"data-v-dc980684",null);c.options.__file="packages/kotti-navbar/src/Navbar.vue",a.a=c.exports},apcn:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},bMdm:function(t,a,n){"use strict";var e=n("NT2Y");e.a.install=function(t){t.component(e.a.name,e.a)},a.a=e.a},bbAg:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},kSrk:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("FnB2"),o=n("Bwzy"),s=n("XyMi"),r=!1;var i=function(t){r||n("FfPL")},c=Object(s.a)(e.a,o.a,o.b,!1,i,null,null);c.options.__file="www/pages/components/navbar.vue",a.default=c.exports},wk9V:function(t,a,n){var e=n("bbAg");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n("rjj0").default)("579c1ce0",e,!1,{sourceMap:!1})}});