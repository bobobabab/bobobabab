(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{808:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"对象深拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象深拷贝"}},[t._v("#")]),t._v(" 对象深拷贝")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const deepClone = data => {\n  var type = getObjType(data)\n  var obj\n  if (type === 'array') {\n    obj = []\n  } else if (type === 'object') {\n    obj = {}\n  } else {\n    // 不再具有下一层次\n    return data\n  }\n  if (type === 'array') {\n    for (var i = 0, len = data.length; i < len; i++) {\n      obj.push(deepClone(data[i]))\n    }\n  } else if (type === 'object') {\n    for (var key in data) {\n      obj[key] = deepClone(data[key])\n    }\n  }\n  return obj\n}\n")])])]),n("h2",{attrs:{id:"格式化时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化时间"}},[t._v("#")]),t._v(" 格式化时间")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('export const getDate = (data, flag) => {\n  let time = \'\'\n  let date = data || new Date(),\n    y = date.getFullYear(),\n    m = (date.getMonth() + 1).toString().padStart(2, "0"),\n    d = date\n      .getDate()\n      .toString()\n      .padStart(2, "0"),\n    h = date.getHours().toString()\n      .padStart(2, "0"),\n    M = date.getMinutes().toString()\n      .padStart(2, "0"),\n    S = date.getSeconds().toString()\n      .padStart(2, "0");\n\n\n  if (flag) {\n    time = `${y}-${m}-${d} ${h}:${M}:${S}`\n  } else {\n    time = `${y}/${m}/${d}`\n  }\n  return time;\n}\n')])])]),n("h2",{attrs:{id:"复制方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制方法"}},[t._v("#")]),t._v(" 复制方法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const copyUrl = (text) => {\n  let input = document.createElement(\"input\");\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  input.setSelectionRange(0, input.value.length)\n\n  if (document.execCommand) {\n    document.execCommand('Copy');\n    Message.success('复制成功');\n  } else {\n    Message.error('复制失败');\n  }\n\n  document.body.removeChild(input);\n\n}\n")])])]),n("h2",{attrs:{id:"函数节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数节流"}},[t._v("#")]),t._v(" 函数节流")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export function throttle(fn, delay) {\n  var lastTime;\n  var timer;\n  var delay = delay || 200;\n  return function () {\n    var args = arguments;\n    // 记录当前函数触发的时间\n    var nowTime = Date.now();\n    if (lastTime && nowTime - lastTime < delay) {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        // 记录上一次函数触发的时间\n        lastTime = nowTime;\n        // 修正this指向问题\n        fn.apply(this, args);\n      }, delay);\n    } else {\n\n      fn.apply(this, args);\n      lastTime = nowTime;\n    }\n  }\n}\n")])])]),n("h2",{attrs:{id:"函数防抖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数防抖"}},[t._v("#")]),t._v(" 函数防抖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export function debounce(func, wait = 1000, immediate = true) {\n  let timer = null\n  let flag = true\n  return function (...args) {\n    if (timer) clearTimeout(timer)\n    if (flag) {\n      flag = false\n      if (immediate) {\n        func.apply(this, args)\n      }\n    }\n    timer = setTimeout(() => {\n      flag = true\n      if (!immediate) {\n        func.apply(this, args)\n      }\n    }, wait)\n  }\n}\n\n")])])]),n("h2",{attrs:{id:"生成随机-len-位数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成随机-len-位数"}},[t._v("#")]),t._v(" 生成随机 len 位数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const randomLenNum = (len, date) => {\n  let random = ''\n  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len || 4)\n  if (date) random = random + Date.now()\n  return random\n}\n")])])]),n("h2",{attrs:{id:"时间戳转为固定格式时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间戳转为固定格式时间"}},[t._v("#")]),t._v(" 时间戳转为固定格式时间")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const timeTamp2FormateTime = function (val) {\n  const h = parseInt(val / 3600);\n  const m = parseInt(val / 60) % 60;\n  const s = val % 60;\n  return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}:${\n    s > 9 ? s : `0${s}`\n    }`;\n}\n")])])]),n("h2",{attrs:{id:"判断设备类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断设备类型"}},[t._v("#")]),t._v(" 判断设备类型")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const checkClinetType = function() {\n  //获取请求头中的userAgent\n  const u = navigator.userAgent;\n  //是否是android浏览器\n  const isAndroid = u.indexOf('Android') > -1;\n  //是否是ios浏览器\n  const isIos = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);\n  let type = '';\n  if (isAndroid) {\n    type = \"android\";\n  } else if (isIos) {\n    type = 'ios';\n  } else {\n    type = 'pc';\n  }\n  return type\n}\n")])])]),n("h2",{attrs:{id:"xss-预防方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xss-预防方式"}},[t._v("#")]),t._v(" xss 预防方式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const xssCheck = function entities(s) {\n    let e = {\n        '\"': '&quot;',\n        '&': '&amp;',\n        '<': '&lt;',\n        '>': '&gt;'\n    }\n    return s.replace(/[\"<>&]/g, m => {\n        return e[m]\n    })\n}\n")])])]),n("h2",{attrs:{id:"滚动到指定元素区域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#滚动到指定元素区域"}},[t._v("#")]),t._v(" 滚动到指定元素区域")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const smoothScroll = element =>\n  document.querySelector(element).scrollIntoView({\n    behavior: 'smooth'\n  });\n")])])]),n("h2",{attrs:{id:"平滑滚动至顶部"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#平滑滚动至顶部"}},[t._v("#")]),t._v(" 平滑滚动至顶部")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const scrollToTop = () => {\n  const c = document.documentElement.scrollTop || document.body.scrollTop;\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};\n")])])]),n("h2",{attrs:{id:"缓存函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存函数"}},[t._v("#")]),t._v(" 缓存函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const memorize = function(fn) {\n  const cache = {}\n  return function(...args) {\n    const _args = JSON.stringify(args)\n    return cache[_args] || (cache[_args] = fn.apply(fn, args))\n  }\n}\n\n")])])]),n("h2",{attrs:{id:"检测底部是否可见"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检测底部是否可见"}},[t._v("#")]),t._v(" 检测底部是否可见")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const bottomVisible = () =>\n  document.documentElement.clientHeight + window.scrollY >=\n  (document.documentElement.scrollHeight || document.documentElement.clientHeight);\n\n")])])]),n("p",[t._v("。")])])}),[],!1,null,null,null);e.default=s.exports}}]);