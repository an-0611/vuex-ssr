module.exports=function(r){var n={},i={0:0};function f(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return r[o].call(t.exports,t,t.exports,f),t.l=!0,t.exports}return f.e=function(o){if(0!==i[o]){var t,n=require("./"+({}[o]||o)+".bundle.js"),e=n.modules,f=n.ids;for(t in e)r[t]=e[t];for(var a=0;a<f.length;a++)i[f[a]]=0}return Promise.all([])},f.m=r,f.c=n,f.d=function(o,t,n){f.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:n})},f.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},f.t=function(t,o){if(1&o&&(t=f(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)f.d(n,e,function(o){return t[o]}.bind(null,e));return n},f.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return f.d(t,"a",t),t},f.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},f.p="/dist/sg/",f.oe=function(o){process.nextTick(function(){throw o})},f(f.s=14)}([function(o,t){o.exports=require("vue")},function(o,t,n){var e=n(10);"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);var f=n(5).default;o.exports.__inject__=function(o){f("7fc931d7",e,!0,o)}},function(o,t){o.exports=require("@babel/runtime/regenerator")},function(o,t){o.exports=require("vue-router")},function(o,t){o.exports=function(n){var r=[];return r.toString=function(){return this.map(function(o){var t=function(o,t){var n=o[1]||"",e=o[3];if(!e)return n;if(t&&"function"==typeof btoa){var f=function(o){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}(e),a=e.sources.map(function(o){return"/*# sourceURL="+e.sourceRoot+o+" */"});return[n].concat(a).concat([f]).join("\n")}return[n].join("\n")}(o,n);return o[2]?"@media "+o[2]+"{"+t+"}":t}).join("")},r.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var n={},e=0;e<this.length;e++){var f=this[e][0];"number"==typeof f&&(n[f]=!0)}for(e=0;e<o.length;e++){var a=o[e];"number"==typeof a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(o,t,n){"use strict";function e(o,t,n,e){e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),e&&(e.hasOwnProperty("styles")||(Object.defineProperty(e,"styles",{enumerable:!0,get:function(){return f(e._styles)}}),e._renderStyles=f),(n?function(o,t){for(var n=0;n<t.length;n++)for(var e=t[n].parts,f=0;f<e.length;f++){var a=e[f],r=a.media||"default",i=o[r];i?i.ids.indexOf(a.id)<0&&(i.ids.push(a.id),i.css+="\n"+a.css):o[r]={ids:[a.id],css:a.css,media:a.media}}}:function(o,t){for(var n=0;n<t.length;n++)for(var e=t[n].parts,f=0;f<e.length;f++){var a=e[f];o[a.id]={ids:[a.id],css:a.css,media:a.media}}})(e._styles||(e._styles={}),t=function(o,t){for(var n=[],e={},f=0;f<t.length;f++){var a=t[f],r=a[0],i={id:o+":"+f,css:a[1],media:a[2],sourceMap:a[3]};e[r]?e[r].parts.push(i):n.push(e[r]={id:r,parts:[i]})}return n}(o,t)))}function f(o){var t,n="";for(t in o){var e=o[t];n+='<style data-vue-ssr-id="'+e.ids.join(" ")+'"'+(e.media?' media="'+e.media+'"':"")+">"+e.css+"</style>"}return n}n.r(t),n.d(t,"default",function(){return e})},function(o,t,n){"use strict";function e(o,t,n,e,f,a,r,i){var c,l,s,u="function"==typeof o?o.options:o;return t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),e&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(c=function(o){(o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),f&&f.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(r)},u._ssrRegister=c):f&&(c=i?function(){f.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:f),c&&(u.functional?(u._injectStyles=c,l=u.render,u.render=function(o,t){return c.call(t),l(o,t)}):(s=u.beforeCreate,u.beforeCreate=s?[].concat(s,c):[c])),{exports:o,options:u}}n.d(t,"a",function(){return e})},function(o,t){o.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(o,t){o.exports=require("date-fns")},function(o,t,n){"use strict";n.r(t);var e,f=n(1),a=n.n(f);for(e in f)["default"].indexOf(e)<0&&function(o){n.d(t,o,function(){return f[o]})}(e);t.default=a.a},function(o,t,n){(o.exports=n(4)(!1)).push([o.i,"#app{position:absolute;width:100%;height:100%;font-family:Roboto, Arial, Helvetica, 'Droid Sans';-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center}html[data-region='tw'] #app{font-family:'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif}.main{position:relative;margin:auto;left:0;right:0;width:100%;height:100%;background:white}\n",""])},function(o,t){[].forEach(function(o){(new Image).src=o})},function(o,t,n){var e=n(13);"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals),n(5).default("463237f0",e,!0)},function(o,t,n){(o.exports=n(4)(!1)).push([o.i,'body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,select,textarea,p,blockquote,th,td,figure{padding:0;margin:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var,b{font-weight:normal;font-style:normal}ol,ul,li{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%}q:before,q:after{content:\'\'}abbr,acronym{border:0}a{text-decoration:none;color:inherit}a,button{cursor:pointer}input,button,textarea,select,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}textarea:focus,input:focus,button:focus{outline:none}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:16px}*{-webkit-box-sizing:border-box;box-sizing:border-box}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:100;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:300;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:500;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf) format("opentype")}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}html{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#000;overflow:hidden}\n',""])},function(o,t,n){"use strict";n.r(t);var e=n(0),f=n.n(e),a=n(2),r=n.n(a),i=n(7),c=n.n(i),l={name:"App",data:function(){return{isInitialized:!1}},created:function(){var t=this;return c()(r.a.mark(function o(){return r.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t.isInitialized=!0;case 1:case"end":return o.stop()}},o)}))()}},s=n(6);var u=Object(s.a)(l,function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{attrs:{id:"app"}},[o.isInitialized?o._ssrNode('<div class="main">',"</div>",[n("router-view")],1):o._e()])},[],!1,function(o){var t=n(9);t.__inject__&&t.__inject__(o)},null,"7dc917a7").exports,U=n(3),m=n.n(U),F=function(){return n.e(1).then(n.bind(null,22))},d=function(){return n.e(2).then(n.bind(null,23))};f.a.use(m.a);var g=n(8);function b(o){return o.replace(/[_.-](\w|$)/g,function(o,t){return t.toUpperCase()})}function h(o){return o.replace(/(?:^|\.?)([A-Z])/g,function(o,t){return"_".concat(t.toLowerCase())})}function p(f){return function t(n){if(n instanceof Array)return n.map(t);if(n instanceof Object){var e={};return Object.keys(n).forEach(function(o){e[f(o)]=t(n[o])}),e}return n}}var C={getParam:function(o,t){var n=t||window.location.href,e=o.replace(/[[]]/g,"\\$&"),f=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(n);return f?f[2]?decodeURIComponent(f[2].replace(/\+/g," ")):"":null},camelizeStr:b,snakifyStr:h,delay:function(t){return new Promise(function(o){return setTimeout(o,t)})},camelizeKeys:p(b),snakifyKeys:p(h)};f.a.filter("dateFormat",function(o,t){return o?t?Object(g.format)(o,t):o:""}),f.a.filter("chineseNumber",function(o){if(!o||"number"!=typeof o)return o;return["一","二","三","四","五","六","七","八","九","十"][o-1]}),f.a.filter("prependZero",function(o){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2,n="0".repeat(t);return o?("string"!=typeof o&&(n=o.toString()),n.padStart(t,"0")):n}),f.a.filter("capitalize",function(o){return o?o.toString().charAt(0).toUpperCase()+o.slice(1):""}),f.a.filter("camelizeStr",C.camelizeStr),f.a.filter("snakifyStr",C.snakifyStr),f.a.filter("camelizeKeys",C.camelizeKeys),f.a.filter("snakifyKeys",C.snakifyKeys);n(11),n(12);function w(){var o=new m.a({mode:"history",routes:[{path:"/",name:"Home",component:F},{path:"/1",name:"Home1",component:d}]});return{app:new f.a({router:o,render:function(o){return o(u)}}),router:o}}f.a.config.productionTip=!1;t.default=function(a){return new Promise(function(o,t){var n=w(),e=n.app,f=n.router;f.push(a.url),f.onReady(function(){return f.getMatchedComponents().length?void o(e):t({code:404})},t)})}},function(o,t){o.exports=require("@babel/runtime/helpers/defineProperty")}]);