webpackJsonp([11],{"0NH1":function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:t.bannerClass},[a("div",{staticClass:"collapse"},[a("div",{staticClass:"glyph"},[t.icon?a("span",[a("i",{staticClass:"yoco",domProps:{textContent:t._s(t.icon)}})]):a("span",[t._t("glyph",[a("i",{staticClass:"yoco"},[t._v("announce")])])],2)]),t._v(" "),a("div",{staticClass:"message",domProps:{textContent:t._s(t.message)}}),t._v(" "),t.expandable?a("div",{staticClass:"action",on:{click:function(s){t.isExpand=!t.isExpand}}},[t.isExpand?a("button",{staticClass:"text",domProps:{textContent:t._s(t.switchCloseText)}}):a("button",{staticClass:"text",domProps:{textContent:t._s(t.switchText)}})]):a("div",{staticClass:"action",on:{click:t.handleClick}},[a("button",{staticClass:"text",domProps:{textContent:t._s(t.actionText)}})])]),t._v(" "),t.isExpand?a("div",{staticClass:"expand"},[t._t("expand")],2):t._e()])},staticRenderFns:[],name:"KtBanner",props:{isGrey:{type:Boolean,default:!1},message:String,icon:{type:String,default:""},actionText:{type:String,default:""},switchText:{type:String,default:"View"},switchCloseText:{type:String,default:"Close"}},data:function(){return{isExpand:!1}},computed:{bannerClass:function(){return{banner:!0,"banner-grey":this.isGrey}},expandable:function(){return this.$slots.expand}},methods:{handleClick:function(t){this.$emit("click",t)}}};s.a=e},LmKH:function(t,s,a){"use strict";s.a={name:"ShowCase",data:function(){return{showCode:!0}},computed:{currentCode:function(){return this.showCode?"Kotti-UI":"Kotti-Style"}}}},Rg2n:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("r0am"),l=a("ZGJW"),n=a("XyMi"),i=Object(n.a)(e.a,l.a,l.b,!1,null,null,null);i.options.__file="www/pages/components/tables.vue",s.default=i.exports},X47M:function(t,s,a){t.exports=a.p+"img/tables_overview.c589519.png"},Yc9B:function(t,s,a){var e=a("vq8z");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("rjj0").default)("bc3acfac",e,!1,{sourceMap:!1})},ZGJW:function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return l});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Tables")]),a("h2",[t._v("Elements")]),t._m(0),t._m(1),a("h2",[t._v("Basic")]),t._m(2),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns1}}),t._m(3),t._m(4),a("ShowCase",[a("div",{attrs:{slot:"vue"},slot:"vue"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":tableData")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableData"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":columns")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableColumns"')]),t._v(" />")]),t._v("\n")])]),a("pre",[a("code",{staticClass:"language-js"},[t._v("tableColumns: [\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Name'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'name'")]),t._v(",\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Date'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'date'")]),t._v(",\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Address'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'address'")]),t._v(",\n\t},\n],\n"),a("span",{staticClass:"hljs-attr"},[t._v("tableData")]),t._v(": [\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("date")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2016-05-03'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Tom'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("address")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'No. 119, Grove St, Los Angeles'")]),t._v(",\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("date")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2016-05-02'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Jackson'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("address")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'No. 89, Grove St, Los Angeles'")]),t._v(",\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("date")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2016-05-04'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Fen'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("address")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'No. 182, Grove St, Los Angeles'")]),t._v(",\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("date")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2016-05-01'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Fexiang'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("address")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'No. 189, Grove St, Los Angeles'")]),t._v(",\n\t},\n],\n")])])]),a("div",{attrs:{slot:"style"},slot:"style"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("table")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("thead")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("NAME"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("Date"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("ADDRESS"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("th")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("thead")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("tbody")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("tr")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("Tom"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("2016-05-03"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("No. 119, Grove St, Los Angeles"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("tr")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("tr")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("Jackson"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("2016-05-02"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("No. 89, Grove St, Los Angeles"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("td")]),t._v(">")]),t._v("\n\t\t"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("tr")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("tbody")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("table")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("Width")]),t._m(5),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumnsWidth}}),t._m(6),a("h2",[t._v("Content alignment")]),a("p",[t._v("Content should be left aligned except some common alignment style, such as price, currency.")]),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumnsAlign}}),t._m(7),a("h2",[t._v("Responsive")]),a("p",[t._v("When display space is limited, some columns should be hidden depending on the importance of the content.")]),t._m(8),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns}}),t._m(9),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns1,xScroll:""}}),t._m(10),a("h2",[t._v("Selectable")]),t._m(11),a("div",[a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns,selectable:""},model:{value:t.select,callback:function(s){t.select=s},expression:"select"}}),t._v("\n\tSelected value: "+t._s(t.select)+"\n")],1),t._m(12),t._m(13),a("h2",[t._v("Actions")]),t._m(14),t._m(15),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns,actions:""},scopedSlots:t._u([{key:"actions",fn:function(s){return a("div",{},[a("i",{staticClass:"yoco",on:{click:function(a){t.showAlert(s.row.name,"edited")}}},[t._v("edit")]),a("i",{staticClass:"yoco",on:{click:function(a){t.showAlert(s.row.name,"deleted")}}},[t._v("trash")])])}}])}),t._m(16),a("h2",[t._v("Expandable")]),t._m(17),a("KtTable",{attrs:{tableData:t.tableData,columns:t.tableColumns,expandable:"",xScroll:""},scopedSlots:t._u([{key:"expand",fn:function(t){return a("div",{},[a("KtBanner",{attrs:{message:t.row.name,icon:"user",isGrey:!0}}),a("KtBanner",{attrs:{message:t.row.address,icon:"global",isGrey:!0}})],1)}}])}),t._m(18),a("h2",[t._v("Usage")]),a("h3",[t._v("Attributes")]),t._m(19),a("h3",[t._v("Slots")]),t._m(20)],1)},l=[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a("X47M"),alt:"Table Elements"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("strong",[t._v("Table Heading:")]),t._v(" The table heading uses the same style as the "),a("code",[t._v("label text")]),t._v(". The heading should express the content of each column.")]),a("li",[a("strong",[t._v("Table row:")]),t._v(" The row content uses "),a("code",[t._v("default text")]),t._v(" style.")]),a("li",[a("strong",[t._v("Table Hover Action Button:")]),t._v(" The table rows can imply further functionality when they are hovered over.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In order to user table, you need give "),s("code",[this._v("tableData")]),this._v(" and "),s("code",[this._v("columns")]),this._v(" data to "),s("code",[this._v("KtTable")]),this._v(" component.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("columns")]),t._v(" define the column of the table, "),a("code",[t._v("label")]),t._v(" is the header text of table, "),a("code",[t._v("key")]),t._v(" will be used to find the value from "),a("code",[t._v("tableData")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tableData")]),this._v(" is the data of each row.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In most cases the table is the same width as its parent. You can also specify the column width in "),s("code",[this._v("columns")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-js"},[t._v("tableColumns: [\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Name'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'name'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("width")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("30")]),t._v("\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Date'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'date'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("width")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("20")]),t._v("\n\t},\n\t{\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Address'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("key")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'address'")]),t._v(",\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("width")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("50")]),t._v("\n\t},\n],\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("align")]),this._v(" in "),s("code",[this._v("columns")]),this._v(" decide the alignment of each column.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("responsive")]),this._v(" in "),s("code",[this._v("columns")]),this._v(" has five break point to hide the column.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When content should not be hidden, using horizontal scrolling is a better alternative.\n"),s("code",[this._v("xScroll")]),this._v(" will enable x-scrolling for the table.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":tableData")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableData"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":columns")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableColumns1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("xScroll")]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("selectable")]),this._v(" enables mutilple select option of the table. You can bind an "),s("code",[this._v("Arrary")]),this._v(" model to "),s("code",[this._v("KtTable")]),this._v(", and control the select data.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":tableData")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableData"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":columns")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableColumns"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("selectable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"select"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-js"},[t._v("data() {\n\t"),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n\t\t"),a("span",{staticClass:"hljs-attr"},[t._v("select")]),t._v(": ["),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(", "),a("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("]\n\t}\n}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("actions")]),this._v(" adds hover actions to the table. Using "),s("code",[this._v("actions")]),this._v(" slot to define the action template.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("slot-scope")]),this._v(" can be used to pass the properties of each row.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":tableData")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableData"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":columns")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableColumns"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("actions")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot-scope")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"rowsProps"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"actions"')]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("i")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yoco"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"showAlert(rowsProps.row.name, 'edited')\"")]),t._v(">")]),t._v("edit"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("i")]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("i")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yoco"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"showAlert(rowsProps.row.name, 'deleted')\"")]),t._v(">")]),t._v("trash"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("i")]),t._v(">")]),t._v(" \n\t"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("expandable")]),t._v(" enable expandability of the row, you can create template in "),a("code",[t._v("expand")]),t._v(" slot. Same as "),a("code",[t._v("actions")]),t._v(", "),a("code",[t._v("slot-scope")]),t._v(" can be used to pass the properties of each row.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":tableData")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableData"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":columns")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"tableColumns"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("expandable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("xScroll")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot-scope")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"expandProps"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"expand"')]),t._v(">")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtBanner")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":message")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"expandProps.row.name"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"user"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":isGrey")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("/>")]),t._v("\n\t"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("KtBanner")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":message")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"expandProps.row.address"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"global"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":isGrey")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("/>")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("KtTable")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Attribute")]),a("th",[t._v("Description")]),a("th",[t._v("Type")]),a("th",[t._v("Accepted values")]),a("th",[t._v("Default")])])]),a("tbody",[a("tr",[a("td",[t._v("tableData")]),a("td",[t._v("table row data")]),a("td",[a("code",[t._v("Array")])]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("columns")]),a("td",[t._v("table column information")]),a("td",[a("code",[t._v("Arrary")])]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("columns.label")]),a("td",[t._v("table column header")]),a("td",[a("code",[t._v("String")])]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("columns.key")]),a("td",[t._v("used to match the value in "),a("code",[t._v("tableData")])]),a("td",[a("code",[t._v("String")])]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("columns.width")]),a("td",[t._v("width percentage")]),a("td",[a("code",[t._v("Number")])]),a("td",[t._v("-")]),a("td",[a("code",[t._v("null")])])]),a("tr",[a("td",[t._v("columns.align")]),a("td",[t._v("alignment of column")]),a("td",[a("code",[t._v("String")])]),a("td",[a("code",[t._v("center")]),t._v(", "),a("code",[t._v("left")]),t._v(", "),a("code",[t._v("right")])]),a("td",[a("code",[t._v("left")])])]),a("tr",[a("td",[t._v("columns.responsive")]),a("td",[t._v("control responsive display")]),a("td",[a("code",[t._v("String")])]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("xScroll")]),a("td",[t._v("allow scroll table horizontal")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[t._v("-")]),a("td",[a("code",[t._v("false")])])]),a("tr",[a("td",[t._v("selectable")]),a("td",[t._v("enable select option of table")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[t._v("-")]),a("td",[a("code",[t._v("false")])])]),a("tr",[a("td",[t._v("expandable")]),a("td",[t._v("allow row expanding")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[t._v("-")]),a("td",[a("code",[t._v("false")])])]),a("tr",[a("td",[t._v("actions")]),a("td",[t._v("add hover actions to the table")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[t._v("-")]),a("td",[a("code",[t._v("false")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Slot Name")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("expand")]),s("td",[this._v("expand section of each row")])]),s("tr",[s("td",[this._v("actions")]),s("td",[this._v("action section of each row")])])])])}];e._withStripped=!0},bhIo:function(t,s,a){"use strict";var e=a("woOf"),l=a.n(e),n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:{"x-scroll":t.xScroll}},[a("table",[a("thead",[a("tr",[t.expandable?a("th",{staticStyle:{width:"48px"}}):t._e(),t._v(" "),t.selectable?a("th",{staticStyle:{width:"48px"}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAll,expression:"selectedAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectedAll)?t._i(t.selectedAll,null)>-1:t.selectedAll},on:{change:function(s){var a=t.selectedAll,e=s.target,l=!!e.checked;if(Array.isArray(a)){var n=t._i(a,null);e.checked?n<0&&(t.selectedAll=a.concat([null])):n>-1&&(t.selectedAll=a.slice(0,n).concat(a.slice(n+1)))}else t.selectedAll=l}}}),t._v(" "),a("i",{staticClass:"form-icon"})])])]):t._e(),t._v(" "),t._l(t.columns,function(s){return a("th",{key:s.key,class:t.columnClass(s.responsive),style:t.columnStyle(s.width,s.align),domProps:{textContent:t._s(s.label)}})}),t._v(" "),t.actions?a("th",{staticStyle:{width:"0"}}):t._e()],2)]),t._v(" "),t.tableData?a("tbody",t._l(t.tableBodyData,function(s,e){return a("tr",{key:s.index,class:t.trClass(e)},[t.expandable&&!s.expand?a("td",{staticClass:"c-hand",on:{click:function(s){t.toggleExpandRow(e)}}},[a("div",{staticClass:"toggle"},[t.expandRowIndex-1===e?a("i",{staticClass:"yoco"},[t._v("chevron_down")]):a("i",{staticClass:"yoco"},[t._v("chevron_right")])])]):t._e(),t._v(" "),!s.expand&&t.selectable?a("td",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedRow,expression:"selectedRow"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.selectedRow)?t._i(t.selectedRow,e)>-1:t.selectedRow},on:{change:function(s){var a=t.selectedRow,l=s.target,n=!!l.checked;if(Array.isArray(a)){var i=e,c=t._i(a,i);l.checked?c<0&&(t.selectedRow=a.concat([i])):c>-1&&(t.selectedRow=a.slice(0,c).concat(a.slice(c+1)))}else t.selectedRow=n}}}),t._v(" "),a("i",{staticClass:"form-icon"})])])]):t._e(),t._v(" "),t._l(s,function(e,l){return s.expand?t._e():a("td",{key:e.index,class:t.tdColumnClass(l),style:t.tdColumnStyle(l),domProps:{textContent:t._s(e)}})}),t._v(" "),s.expand&&t.expandRowIndex===e?a("td",{attrs:{colspan:t.colSpanNumber}},[t._t("expand",null,{row:s})],2):t._e(),t._v(" "),!s.expand&&t.actions?a("td",[a("div",{staticClass:"table-actions"},[t._t("actions",null,{row:s})],2)]):t._e()],2)})):a("tbody",[a("td",{staticClass:"empty",attrs:{colspan:t.colSpanNumber}},[t._v("No Table Data")])])])])},staticRenderFns:[],_scopeId:"data-v-5a7200a5",name:"KtTable",props:{tableData:Array,columns:Array,expandable:Boolean,actions:Boolean,selectable:Boolean,value:Array,xScroll:Boolean,responsive:String},data:function(){return{selectedRow:[],expandRowIndex:Number,selectedAll:!1}},mounted:function(){this.selectedRow=this.value||[]},computed:{tableBodyData:function(){var t=this,s=[];return this.tableData.forEach(function(a){var e={};if(t.columns.forEach(function(t){e[t.key]=a[t.key]}),s.push(e),t.expandable){var n=l()({expand:!0},e);s.push(n)}}),s},colSpanNumber:function(){var t=this.columns.length;return this.expandable&&(t+=1),this.selectable&&(t+=1),t}},watch:{selectedRow:function(t){if(this.selectable){var s=this.expandable?this.tableBodyData.length/2:this.tableBodyData.length;t.length===s?this.selectedAll=!0:this.selectedAll=!1,this.handleSelected(t)}},selectedAll:function(t,s){if(this.selectable){var a=this.expandable?this.tableBodyData.length/2:this.tableBodyData.length;if(!t&&s&&this.selectedRow.length===a&&(this.selectedRow=[]),s);else{if(!this.selectedRow)return;if(this.selectedRow.length!==a){for(var e=[],l=0;l<a;l++)this.expandable?e.push(2*l):e.push(l);this.selectedRow=e}}}}},methods:{columnStyle:function(t,s){var a=t||0;return[{width:a?a+"%":"auto"},{textAlign:s||"left"}]},tdColumnStyle:function(t){return{textAlign:this.columns.find(function(s){return s.key===t}).align}},tdColumnClass:function(t){return[this.columns.find(function(s){return s.key===t}).responsive]},columnClass:function(t){return[t]},trClass:function(t){if(this.selectable)return this.selectedRow.includes(t)?["selected"]:void 0},handleSelected:function(){var t=this.selectedRow;this.expandable&&(t=t.map(function(t){return t/2})),this.$emit("input",t)},selectRows:function(t){if(this.selectable){var s=this.selectedRow;s.includes(t)?s=s.filter(function(s){return s!=t}):s.push(t),this.selectedRow=s}},toggleExpandRow:function(t){t!==this.expandRowIndex&&(this.expandRowIndex===t+1?this.expandRowIndex=null:this.expandRowIndex=t+1)}}};s.a=n},"d/jF":function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return l});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"code-switch"},[a("div",{staticClass:"switcher",domProps:{textContent:t._s(t.currentCode)},on:{click:function(s){t.showCode=!t.showCode}}}),t.showCode?t._t("vue"):t._t("style")],2)},l=[];e._withStripped=!0},r0am:function(t,s,a){"use strict";var e=a("bhIo"),l=a("0NH1"),n=a("tDu3");s.a={name:"Tables",components:{KtTable:e.a,KtBanner:l.a,ShowCase:n.a},methods:{showAlert:function(t,s){alert(t+" is "+s+"!")}},data:function(){return{select:[0,1],tableColumns1:[{label:"Name",key:"name"},{label:"Date",key:"date"},{label:"Address",key:"address"}],tableColumnsWidth:[{label:"Name",key:"name",width:10},{label:"Date",key:"date",width:40},{label:"Address",key:"address",width:50}],tableColumnsAlign:[{label:"Name",key:"name",align:"left"},{label:"Date",key:"date",align:"center"},{label:"Address",key:"address",align:"right"}],tableColumns:[{label:"Name",key:"name",responsive:"hide-sm"},{label:"Date",key:"date",responsive:"hide-md"},{label:"Address",key:"address"}],tableData:[{date:"2016-05-03",name:"Tom",address:"No. 119, Grove St, Los Angeles"},{date:"2016-05-02",name:"Jackson",address:"No. 89, Grove St, Los Angeles"}]}}}},tDu3:function(t,s,a){"use strict";var e=a("LmKH"),l=a("d/jF"),n=a("XyMi"),i=!1;var c=function(t){i||a("Yc9B")},v=Object(n.a)(e.a,l.a,l.b,!1,c,"data-v-38965c30",null);v.options.__file="www/components/ShowCase.vue",s.a=v.exports},vq8z:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".code-switch[data-v-38965c30]{position:relative;padding-top:8px;padding-top:.5rem}.code-switch .switcher[data-v-38965c30]{position:absolute;top:0;left:0;color:#fff;font-size:12px;background:rgba(0,0,0,.4);padding:3.2px 8px;padding:.2rem .5rem;width:100%}.code-switch .switcher[data-v-38965c30]:hover{background:rgba(44,100,204,.6);cursor:pointer}",""])}});