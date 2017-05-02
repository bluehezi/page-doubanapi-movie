webpackJsonp([0],[,,function(t,a,e){"use strict";var s=e(21),n=e.n(s);window.$=n.a,window.jQuery=n.a,a.a=n.a},,function(t,a,e){"use strict";var s=e(1),n=e(29),i=e(23),o=e.n(i);s.default.use(n.a),a.a=new n.a({routes:[{path:"/",redirect:{name:"ishit"}},{path:"/ishit",name:"ishit",component:o.a},{path:"/commingsoon",name:"commingsoon",component:o.a},{path:"/top250",name:"top250",component:o.a}]})},function(t,a){},,function(t,a,e){e(18);var s=e(0)(e(9),e(28),null,null);t.exports=s.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1),n=e(7),i=e.n(n),o=e(4),r=e(6),c=e.n(r),l=e(5);e.n(l);s.default.config.productionTip=!1,s.default.use(c.a),o.a.beforeEach(function(t,a,e){c.a.LoadingBar.start(),e()}),o.a.afterEach(function(t,a,e){c.a.LoadingBar.finish()}),new s.default({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app",data:function(){return{currentTheme:"light",menuLists:[{title:"正在热映"},{title:"即将上映"},{title:"Top250"}],tos:[{name:"ishit",url:"https://api.douban.com/v2/movie/in_theaters"},{name:"commingsoon",url:"https://api.douban.com/v2/movie/coming_soon"},{name:"top250",url:"https://api.douban.com/v2/movie/top250"}]}},computed:{activeName:function(){var t=this;return this.indexOf(this.tos,function(a){return a.name===t.$route.name})}},methods:{indexOf:function(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(24),n=e.n(s);a.default={props:{data:{type:Array,default:function(){return[]}}},components:{movieInfo:n.a},methods:{showInfo:function(t){this.$refs.movieinfo.toShow(t)},aClick:function(){}},created:function(){}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(2),n=e(22),i=e.n(n);a.default={data:function(){return{hasCity:!1,city:"郑州",cityLists:["郑州","北京","上海","周口","广州"],data:{total:0,title:""},currentPageShow:[],url:""}},props:{resourceUrls:{type:Array,default:function(){return[]}}},created:function(){for(var t=0;t<this.resourceUrls.length;t++)if(this.$route.name===this.resourceUrls[t].name){this.url=this.resourceUrls[t].url;break}"ishit"===this.$route.name?this.hasCity=!0:this.hasCity=!1,this.getData(0)},methods:{pageChange:function(t){this.getData(t-1)},cityChange:function(){this.data={title:"",total:0},this.getData(0)},getData:function(t){var a=this;if(a.data["page"+t])return void(a.currentPageShow=a.data["page"+t]);this.$Loading.start(),s.a.ajax({type:"GET",url:a.url,dataType:"jsonp",jsonp:"callback",jsonpCallback:"_jsonp",data:{city:a.city,count:4,start:4*t},success:function(e){"success"===arguments[1]&&(a.currentPageShow=e.subjects,a.data.title&&a.data.total||(a.data.title=e.title,a.data.total=e.total),a.data["page"+t]=a.currentPageShow),a.$Loading.finish()},error:function(t){console.log(t),a.$Loading.error()},complete:function(){}})}},computed:{},components:{Cards:i.a},watch:{$route:function(t,a){for(var e=0;e<this.resourceUrls.length;e++)if(t.name===this.resourceUrls[e].name){this.url=this.resourceUrls[e].url;break}"ishit"===t.name?this.hasCity=!0:this.hasCity=!1,this.data={title:"",total:0},this.getData(0)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(2);a.default={props:{},data:function(){return{status:!1,data:null,id:0}},methods:{toClose:function(){this.status=!1},toShow:function(t){this.data=null,this.status=!0,this.id=t,this.getData()},getData:function(){this.$Loading.start();var t=this;s.a.ajax({type:"GET",url:"https://api.douban.com/v2/movie/subject/"+t.id,dataType:"jsonp",jsonp:"callback",jsonpCallback:"_jsonp",success:function(a){"success"===arguments[1]&&(t.data=a,t.$Loading.finish())},error:function(a){console.log("error"),console.log(a),t.$Loading.error()},complete:function(){}})}},created:function(){}}},,,function(t,a){},function(t,a){},function(t,a){},function(t,a){},,,,function(t,a,e){e(15);var s=e(0)(e(10),e(25),null,null);t.exports=s.exports},function(t,a,e){e(17);var s=e(0)(e(11),e(27),null,null);t.exports=s.exports},function(t,a,e){e(16);var s=e(0)(e(12),e(26),null,null);t.exports=s.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("div",{attrs:{id:"cards"}},[t._l(t.data,function(a,s){return e("Card",{key:s,staticClass:"item-card",staticStyle:{width:"90%"},attrs:{"data-id":a.id},nativeOn:{click:function(e){e.stopPropagation(),t.showInfo(a.id)}}},[e("p",{slot:"title"},[e("span",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),e("Rate",{attrs:{value:Math.floor(a.rating.average/2*10)/10,showText:"","allow-half":"",disabled:""}})],1),t._v(" "),e("p",{slot:"extra"},[e("a",{attrs:{href:a.alt,target:"_blank"},on:{click:function(a){a.stopPropagation(),t.aClick(a)}}},[t._v("详情")])]),t._v(" "),e("div",{staticClass:"sub-content"},[e("Row",[e("Col",{attrs:{span:"6"}},[e("a",{attrs:{href:a.images.large,target:"_blank"},on:{click:function(a){a.stopPropagation(),t.aClick(a)}}},[e("img",{staticStyle:{width:"100px"},attrs:{src:a.images.small}})])]),t._v(" "),e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"genres"},t._l(a.genres,function(a,s){return e("Tag",{key:s,staticClass:"item-genre",attrs:{size:"small",type:"dot",color:"blue"}},[t._v(t._s(a)+"\n          ")])})),t._v(" "),e("div",{staticClass:"info-movie"},[e("div",{staticClass:"directors"},[t._v("\n            导演:\n            "),t._l(a.directors,function(a){return e("a",{staticClass:"item-director",attrs:{href:a.alt,"data-id":a.id,target:"_blank"},on:{click:function(a){a.stopPropagation(),t.aClick(a)}}},[t._v("\n              "+t._s(a.name)+"\n            ")])})],2),t._v(" "),e("div",{staticClass:"actors"},[t._v("\n            主演:\n            "),t._l(a.casts,function(a){return e("a",{staticClass:"item-actor",attrs:{href:a.alt,"data-id":a.id,target:"_blank"},on:{click:function(a){a.stopPropagation(),t.aClick(a)}}},[t._v("\n              "+t._s(a.name)+"\n            ")])})],2)])])],1)],1)])}),t._v(" "),e("movieInfo",{ref:"movieinfo"})],2):t._e()},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{width:"500"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[e("div",{slot:"header"},[t.data?e("p",[e("span",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),t._l(t.data.aka,function(a,s){return e("span",{staticClass:"title"},[t._v(" / "+t._s(a))])})],2):t._e()]),t._v(" "),t.data?e("div",{staticClass:"content"},[e("a",{attrs:{href:t.data.images.large,target:"_blank"}},[e("img",{staticStyle:{width:"300px"},attrs:{src:t.data.images.large,alt:""}})]),t._v(" "),e("div",{staticClass:"sub-content"},[e("Rate",{attrs:{value:Math.floor(t.data.rating.average/2*10)/10,showText:"",disabled:""}}),t._v(" "),e("div",{staticClass:"genres"},t._l(t.data.genres,function(a,s){return e("Tag",{key:s,staticClass:"item-genre",attrs:{size:"small",type:"dot",color:"blue"}},[t._v(t._s(a)+"\n        ")])})),t._v(" "),e("div",{staticClass:"info-movie"},[e("div",{staticClass:"directors"},[t._v("\n          导演:\n          "),t._l(t.data.directors,function(a){return e("a",{staticClass:"item-director",attrs:{href:a.alt,"data-id":a.id,target:"_blank"}},[t._v("\n            "+t._s(a.name)+"\n          ")])})],2),t._v(" "),e("div",{staticClass:"actors"},[t._v("\n          主演:\n          "),t._l(t.data.casts,function(a){return e("a",{staticClass:"item-actor",attrs:{href:a.alt,"data-id":a.id,target:"_blank"}},[t._v("\n            "+t._s(a.name)+"\n          ")])})],2)]),t._v(" "),e("p",{staticClass:"summary"},[t._v(t._s(t.data.summary))])],1)]):t._e(),t._v(" "),e("div",{staticClass:"close-wrapper",slot:"footer"},[e("Button",{attrs:{icon:"ios-close-outline",shape:"circle",type:"dashed"},on:{click:t.toClose}})],1)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"ishit"}},[t.hasCity?e("Select",{staticStyle:{width:"200px"},on:{"on-change":t.cityChange},model:{value:t.city,callback:function(a){t.city=a},expression:"city"}},t._l(t.cityLists,function(t,a){return e("Option",{key:a,attrs:{value:t}})})):t._e(),t._v(" "),t.data.total?e("Button-group",{staticClass:"btn-info",attrs:{shape:"circle"}},[e("Button",{attrs:{disabled:""}},[t._v(t._s(t.data.title))]),t._v(" "),e("Button",{attrs:{disabled:""}},[t._v(t._s(t.data.total))])],1):t._e(),t._v(" "),e("Cards",{attrs:{data:t.currentPageShow}}),t._v(" "),t.data.total?e("div",{staticClass:"page-wrapper"},[e("Page",{attrs:{total:t.data.total,"page-size":4},on:{"on-change":t.pageChange}})],1):t._e()],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Row",[e("Col",{attrs:{span:"6"}},[e("Menu",{attrs:{theme:t.currentTheme,"active-name":t.activeName}},t._l(t.tos,function(a,s){return e("Menu-item",{key:s,attrs:{name:s}},[e("router-link",{staticClass:"item-link",attrs:{to:t.tos[s]}},[t._v(t._s(t.menuLists[s].title))])],1)}))],1),t._v(" "),e("Col",{attrs:{span:"16",offset:"1"}},[e("router-view",{attrs:{resourceUrls:t.tos}})],1)],1)],1)},staticRenderFns:[]}}],[8]);