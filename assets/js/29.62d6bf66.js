(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{817:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器stroage封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器stroage封装"}},[t._v("#")]),t._v(" 浏览器Stroage封装")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("可以使用Npm或Yarn")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i --save @jzjy/storage\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn add @jzjy/storage\n")])])]),s("h2",{attrs:{id:"如何引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何引入"}},[t._v("#")]),t._v(" 如何引入")]),t._v(" "),s("blockquote",[s("p",[t._v("数据都默认处理过stringify和parse")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import storage from '@jzjy/storage'\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("这里的API规则主要是localStroage的交互方式，也可以传入"),s("code",[t._v("sessionStorage")])]),t._v(" "),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),s("blockquote",[s("p",[t._v("直接使用json，添加过期时间")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" stroage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stroage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" session "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sessionStorage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("可以增加key的前缀")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" storage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localStorage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix--'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"set-key-value-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-key-value-options"}},[t._v("#")]),t._v(" set(key, value, options)")]),t._v(" "),s("blockquote",[s("p",[t._v("添加/修改数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("any")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("''")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("缓存的key")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("any")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("缓存的value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("options")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("可选，过期时间")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("可选时间参数，可以传 number(秒) 或者 Date类型，其余参数要为Number")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("exp")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("秒")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("hour")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("day")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("天")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("weak")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("周")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("month")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("月")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("年")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"get-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-key"}},[t._v("#")]),t._v(" get(key)")]),t._v(" "),s("blockquote",[s("p",[t._v("获取数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("any")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("''")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("缓存的key")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("stroage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"remove-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-key"}},[t._v("#")]),t._v(" remove(key)")]),t._v(" "),s("blockquote",[s("p",[t._v("删除缓存的数据，返回key")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"clearexpires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearexpires"}},[t._v("#")]),t._v(" clearExpires()")]),t._v(" "),s("blockquote",[s("p",[t._v("清空所有过期的缓存数据")])]),t._v(" "),s("h3",{attrs:{id:"clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" clear()")]),t._v(" "),s("blockquote",[s("p",[t._v("清空所有缓存数据，包括原始的 "),s("code",[t._v("stroage API")]),t._v(" 添加的数据")])]),t._v(" "),s("h3",{attrs:{id:"reset-key-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset-key-options"}},[t._v("#")]),t._v(" reset(key, options)")]),t._v(" "),s("blockquote",[s("p",[t._v("重置过期时间")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("stroage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hour"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"replace-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-key"}},[t._v("#")]),t._v(" replace(key)")]),t._v(" "),s("blockquote",[s("p",[t._v("重置value，过期时间不变")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2222")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"add-key-value-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-key-value-options"}},[t._v("#")]),t._v(" add(key, value, options)")]),t._v(" "),s("blockquote",[s("p",[t._v("当key不存在或者过期了才添加数据")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234455")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);