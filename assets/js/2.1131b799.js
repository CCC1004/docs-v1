(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{395:function(t,e,s){},475:function(t,e,s){t.exports=s.p+"assets/img/yesterday.8e49f298.svg"},476:function(t,e,s){t.exports=s.p+"assets/img/today.484a4d22.svg"},477:function(t,e,s){t.exports=s.p+"assets/img/tomorrow.81f0b143.svg"},478:function(t,e,s){"use strict";s(395)},514:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this._self._c;return t("div",{staticClass:"img-wrapper"},[t("img",{attrs:{src:s(475),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"img-wrapper"},[t("img",{attrs:{src:s(476),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"img-wrapper"},[t("img",{attrs:{src:s(477),alt:""}})])}],r=(s(14),s(65),{components:{ModuleTransition:s(63).a},data:()=>({downloads:0}),computed:{features(){return this.$frontmatter.features},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created(){},methods:{toThousandslsFilter(t){const e=String(t);if(""===e||null==e)return"";const s=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,a=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+s||0).toString().replace(/^-?\d+/g,t=>t.replace(/(?=(?!\b)(\d{3})+$)/g,","))+a},npmPackageDownloads(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},async _getDownloadsOfDateRange(t,e){let s=0;if(Array.isArray(e)){let a=[];e.map(e=>{a.push(this._fetch(t,e))});return s=(await Promise.all(a)).reduce((t,e)=>t+e.downloads,0),s}return s=(await this._fetch(t,e)).downloads,s},_fetch(t,e){return new Promise((s,a)=>{fetch(`https://api.npmjs.org/downloads/point/${e}/${t}`).then(this._parseJSON).then(t=>{s(t)}).catch(t=>{a(t)})})},_parseJSON:t=>t.json(),_handleDateRange(t){if(t.indexOf(":")>-1){const e=t.split(":"),s=e,a=31536e6,r=new Date(e[1]).getTime()-new Date(e[0]).getTime(),i=parseInt(r/a);if(i>0){for(let t=0;t<i;t++){const e=this._getDate(s[t]);s.splice(t+1,0,e)}for(let t=0,e=s.length;t<e-1;t++)s[t]=`${s[t]}:${s[t+1]}`;return s.length=i+1,s}return t}return t},_getDate(t){const e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:t=>Array.isArray(t)?"-,"+t.join(","):t}}),i=(s(478),s(3)),n=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"home-page-one-wrapper"},[e("section",{staticClass:"main"},[e("div",[e("ModuleTransition",{attrs:{delay:"0.04"}},[t.$frontmatter.heroImage&&!t.$parent.firstLoad&&t.$parent.isHasKey?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[!t.$parent.firstLoad&&t.$parent.isHasKey?e("p",{staticClass:"description"},[t._v(t._s(t.$description))]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.12"}},[!t.$parent.firstLoad&&t.$parent.isHasKey?e("div",[e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco-1.x"}},[e("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco-1.x?&logo=github"}})]),t._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco-1.x"}},[e("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco-1.x?style=flat&logo=github"}})]),t._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco-1.x"}},[e("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco-1.x?style=flat&logo=github"}})]),t._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat&logo=npm"}})]),t._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm version",src:"https://img.shields.io/npm/v/vuepress-theme-reco.svg?style=flat&logo=npm&label=version"}})])]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[!t.$parent.firstLoad&&t.$parent.isHasKey?e("router-link",{staticClass:"btn-about",attrs:{to:t.$frontmatter.actionLink}},[t._v(t._s(t.$frontmatter.actionText))]):t._e()],1)],1)]),t._v(" "),e("section",{staticClass:"wish yesterday"},[e("div",{staticClass:"wish-inner"},[t._m(0),t._v(" "),e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.features[0].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.features[0].details))])])])]),t._v(" "),e("section",{staticClass:"wish today"},[e("div",{staticClass:"wish-inner"},[e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.features[1].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.features[1].details))])]),t._v(" "),t._m(1)])]),t._v(" "),e("section",{staticClass:"wish tomorrow"},[e("div",{staticClass:"wish-inner"},[t._m(2),t._v(" "),e("div",{staticClass:"text-wrapper"},[e("h1",[t._v(t._s(t.features[2].title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.features[2].details))])])])]),t._v(" "),e("section",{staticClass:"md-content-wrapper"},[e("Content")],1)])}),a,!1,null,"885fe2d4",null);e.default=n.exports}}]);