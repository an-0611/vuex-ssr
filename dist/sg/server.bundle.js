module.exports=function(o){var t={},n={0:0};function f(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return o[n].call(a.exports,a,a.exports,f),a.l=!0,a.exports}return f.e=function(t){if(0!==n[t]){var f=require("./"+({}[t]||t)+".bundle.js"),a=f.modules,e=f.ids;for(var l in a)o[l]=a[l];for(var r=0;r<e.length;r++)n[e[r]]=0}return Promise.all([])},f.m=o,f.c=t,f.d=function(o,t,n){f.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:n})},f.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},f.t=function(o,t){if(1&t&&(o=f(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var a in o)f.d(n,a,function(t){return o[t]}.bind(null,a));return n},f.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return f.d(t,"a",t),t},f.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},f.p="/dist/sg/",f.oe=function(o){process.nextTick((function(){throw o}))},f(f.s=14)}([function(o,t){o.exports=require("vue")},function(o,t,n){var f=n(10);"string"==typeof f&&(f=[[o.i,f,""]]),f.locals&&(o.exports=f.locals);var a=n(5).default;o.exports.__inject__=function(o){a("7fc931d7",f,!1,o)}},function(o,t){o.exports=require("@babel/runtime/regenerator")},function(o,t){o.exports=require("vue-router")},function(o,t){o.exports=function(o){var t=[];return t.toString=function(){return this.map((function(t){var n=function(o,t){var n=o[1]||"",f=o[3];if(!f)return n;if(t&&"function"==typeof btoa){var a=(l=f,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e=f.sources.map((function(o){return"/*# sourceURL="+f.sourceRoot+o+" */"}));return[n].concat(e).concat([a]).join("\n")}var l;return[n].join("\n")}(t,o);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(o,n){"string"==typeof o&&(o=[[null,o,""]]);for(var f={},a=0;a<this.length;a++){var e=this[a][0];"number"==typeof e&&(f[e]=!0)}for(a=0;a<o.length;a++){var l=o[a];"number"==typeof l[0]&&f[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(o,t,n){"use strict";function f(o,t,n,f){if(f||"undefined"==typeof __VUE_SSR_CONTEXT__||(f=__VUE_SSR_CONTEXT__),f){f.hasOwnProperty("styles")||(Object.defineProperty(f,"styles",{enumerable:!0,get:function(){return a(f._styles)}}),f._renderStyles=a);var e=f._styles||(f._styles={});t=function(o,t){for(var n=[],f={},a=0;a<t.length;a++){var e=t[a],l=e[0],r={id:o+":"+a,css:e[1],media:e[2],sourceMap:e[3]};f[l]?f[l].parts.push(r):n.push(f[l]={id:l,parts:[r]})}return n}(o,t),n?function(o,t){for(var n=0;n<t.length;n++)for(var f=t[n].parts,a=0;a<f.length;a++){var e=f[a],l=e.media||"default",r=o[l];r?r.ids.indexOf(e.id)<0&&(r.ids.push(e.id),r.css+="\n"+e.css):o[l]={ids:[e.id],css:e.css,media:e.media}}}(e,t):function(o,t){for(var n=0;n<t.length;n++)for(var f=t[n].parts,a=0;a<f.length;a++){var e=f[a];o[e.id]={ids:[e.id],css:e.css,media:e.media}}}(e,t)}}function a(o){var t="";for(var n in o){var f=o[n];t+='<style data-vue-ssr-id="'+f.ids.join(" ")+'"'+(f.media?' media="'+f.media+'"':"")+">"+f.css+"</style>"}return t}n.r(t),n.d(t,"default",(function(){return f}))},function(o,t,n){"use strict";function f(o,t,n,f,a,e,l,r){var c,i="function"==typeof o?o.options:o;if(t&&(i.render=t,i.staticRenderFns=n,i._compiled=!0),f&&(i.functional=!0),e&&(i._scopeId="data-v-"+e),l?(c=function(o){(o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),a&&a.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(l)},i._ssrRegister=c):a&&(c=r?function(){a.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(i.functional){i._injectStyles=c;var s=i.render;i.render=function(o,t){return c.call(t),s(o,t)}}else{var A=i.beforeCreate;i.beforeCreate=A?[].concat(A,c):[c]}return{exports:o,options:i}}n.d(t,"a",(function(){return f}))},function(o,t){o.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(o,t){o.exports=require("date-fns")},function(o,t,n){"use strict";n.r(t);var f=n(1),a=n.n(f);for(var e in f)["default"].indexOf(e)<0&&function(o){n.d(t,o,(function(){return f[o]}))}(e);t.default=a.a},function(o,t,n){(o.exports=n(4)(!0)).push([o.i,"#app{position:absolute;width:100%;height:100%;font-family:Roboto, Arial, Helvetica, 'Droid Sans';-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center}html[data-region='tw'] #app{font-family:'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif}.main{position:relative;margin:auto;left:0;right:0;width:100%;height:100%;background:white}\n","",{version:3,sources:["/Users/hean/vuex-ssr/src/App.vue?vue&type=style&index=0&lang=scss&"],names:[],mappings:"AAAA,KAAK,kBAAkB,WAAW,YAAY,mDAAmD,mCAAmC,kCAAkC,cAAc,iBAAiB,CAAC,4BAA4B,sEAAsE,CAAC,MAAM,kBAAkB,YAAY,OAAO,QAAQ,WAAW,YAAY,gBAAgB,CAAC",file:"App.vue?vue&type=style&index=0&lang=scss&",sourcesContent:["#app{position:absolute;width:100%;height:100%;font-family:Roboto, Arial, Helvetica, 'Droid Sans';-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;text-align:center}html[data-region='tw'] #app{font-family:'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif}.main{position:relative;margin:auto;left:0;right:0;width:100%;height:100%;background:white}\n"],sourceRoot:""}])},function(o,t){[].forEach((function(o){(new Image).src=o}))},function(o,t,n){var f=n(13);"string"==typeof f&&(f=[[o.i,f,""]]),f.locals&&(o.exports=f.locals),n(5).default("463237f0",f,!1)},function(o,t,n){(o.exports=n(4)(!0)).push([o.i,'body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,select,textarea,p,blockquote,th,td,figure{padding:0;margin:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var,b{font-weight:normal;font-style:normal}ol,ul,li{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%}q:before,q:after{content:\'\'}abbr,acronym{border:0}a{text-decoration:none;color:inherit}a,button{cursor:pointer}input,button,textarea,select,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}textarea:focus,input:focus,button:focus{outline:none}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:16px}*{-webkit-box-sizing:border-box;box-sizing:border-box}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:100;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:300;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:500;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf) format("opentype")}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}html{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#000;overflow:hidden}\n',"",{version:3,sources:["/Users/hean/vuex-ssr/src/styles/global.scss"],names:[],mappings:"AAAA,+GAA+G,UAAU,QAAQ,CAAC,MAAM,yBAAyB,gBAAgB,CAAC,aAAa,QAAQ,CAAC,iDAAiD,mBAAmB,iBAAiB,CAAC,SAAS,eAAe,CAAC,WAAW,eAAe,CAAC,kBAAkB,mBAAmB,cAAc,CAAC,iBAAiB,UAAU,CAAC,aAAa,QAAQ,CAAC,EAAE,qBAAqB,aAAa,CAAC,SAAS,cAAc,CAAC,oCAAoC,oBAAoB,kBAAkB,mBAAmB,mBAAmB,CAAC,wCAAwC,YAAY,CAAC,KAAK,8BAA8B,2BAA2B,0BAA0B,sBAAsB,cAAc,CAAC,EAAE,8BAA8B,qBAAqB,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,kPAAkP,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,qPAAqP,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,2PAA2P,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,wPAAwP,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,kPAAkP,CAAC,WAAW,2BAA2B,kBAAkB,gBAAgB,qPAAqP,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mKAAmK,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mKAAmK,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,gKAAgK,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,oJAAoJ,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,oJAAoJ,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iJAAiJ,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,qKAAqK,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,qKAAqK,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,kKAAkK,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iKAAiK,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iKAAiK,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,8JAA8J,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mKAAmK,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mKAAmK,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,gKAAgK,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mJAAmJ,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mJAAmJ,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iJAAiJ,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,2IAA2I,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,2IAA2I,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,yIAAyI,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,qJAAqJ,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,qJAAqJ,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mJAAmJ,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iJAAiJ,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iJAAiJ,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,+IAA+I,wKAAwK,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mJAAmJ,2DAA2D,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,mJAAmJ,kHAAkH,CAAC,WAAW,qBAAqB,kBAAkB,gBAAgB,iJAAiJ,wKAAwK,CAAC,KAAK,2BAA2B,yBAAyB,sBAAsB,qBAAqB,iBAAiB,gBAAgB,eAAe,CAAC",file:"global.scss",sourcesContent:['body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,select,textarea,p,blockquote,th,td,figure{padding:0;margin:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var,b{font-weight:normal;font-style:normal}ol,ul,li{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%}q:before,q:after{content:\'\'}abbr,acronym{border:0}a{text-decoration:none;color:inherit}a,button{cursor:pointer}input,button,textarea,select,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit}textarea:focus,input:focus,button:focus{outline:none}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:16px}*{-webkit-box-sizing:border-box;box-sizing:border-box}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:100;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:300;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:500;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format("opentype")}@font-face{font-family:\'Noto Sans TC\';font-style:normal;font-weight:900;src:url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff) format("woff"),url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf) format("opentype")}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format("woff2");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:\'Roboto\';font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}html{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#000;overflow:hidden}\n'],sourceRoot:""}])},function(o,t,n){"use strict";n.r(t);var f=n(0),a=n.n(f),e=function(){var o=this.$createElement,t=this._self._c||o;return t("div",{attrs:{id:"app"}},[this.isInitialized?this._ssrNode('<div class="main">',"</div>",[t("router-view")],1):this._e()])};e._withStripped=!0;var l=n(2),r=n.n(l),c=n(7),i=n.n(c),s={name:"App",data:function(){return{isInitialized:!1}},created:function(){var o=this;return i()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.isInitialized=!0;case 1:case"end":return t.stop()}}),t)})))()}},A=n(6);var U=Object(A.a)(s,e,[],!1,(function(o){var t=n(9);t.__inject__&&t.__inject__(o)}),null,"0d4948a4");U.options.__file="src/App.vue";var u=U.exports,m=n(3),B=n.n(m),F=function(){return n.e(1).then(n.bind(null,22))},g=function(){return n.e(2).then(n.bind(null,23))};a.a.use(B.a);var C=n(8);function b(o){return o.replace(/[_.-](\w|$)/g,(function(o,t){return t.toUpperCase()}))}function h(o){return o.replace(/(?:^|\.?)([A-Z])/g,(function(o,t){return"_".concat(t.toLowerCase())}))}function d(o){return function t(n){if(n instanceof Array)return n.map((function(o){return t(o)}));if(n instanceof Object){var f={};return Object.keys(n).forEach((function(a){f[o(a)]=t(n[a])})),f}return n}}var w={getParam:function(o,t){var n=t||window.location.href,f=o.replace(/[[]]/g,"\\$&"),a=new RegExp("[?&]".concat(f,"(=([^&#]*)|&|#|$)")).exec(n);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},camelizeStr:b,snakifyStr:h,delay:function(o){return new Promise((function(t){return setTimeout(t,o)}))},camelizeKeys:d(b),snakifyKeys:d(h)};a.a.filter("dateFormat",(function(o,t){return o?t?Object(C.format)(o,t):o:""})),a.a.filter("chineseNumber",(function(o){if(!o||"number"!=typeof o)return o;return["一","二","三","四","五","六","七","八","九","十"][o-1]})),a.a.filter("prependZero",(function(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="0".repeat(t);return o?("string"!=typeof o&&(n=o.toString()),n.padStart(t,"0")):n})),a.a.filter("capitalize",(function(o){return o?o.toString().charAt(0).toUpperCase()+o.slice(1):""})),a.a.filter("camelizeStr",w.camelizeStr),a.a.filter("snakifyStr",w.snakifyStr),a.a.filter("camelizeKeys",w.camelizeKeys),a.a.filter("snakifyKeys",w.snakifyKeys);n(11),n(12);function p(){var o=new B.a({mode:"history",routes:[{path:"/",name:"Home",component:F},{path:"/1",name:"Home1",component:g}]});return{app:new a.a({router:o,render:function(o){return o(u)}}),router:o}}a.a.config.productionTip=!1;t.default=function(o){return new Promise((function(t,n){var f=p(),a=f.app,e=f.router;e.push(o.url),e.onReady((function(){if(!e.getMatchedComponents().length)return n({code:404});t(a)}),n)}))}},function(o,t){o.exports=require("@babel/runtime/helpers/defineProperty")}]);