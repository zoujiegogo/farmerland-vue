webpackJsonp([2],[,,,,,,,,,,,,,,,function(e,t,n){function i(e){n(117)}var o=n(3)(n(62),n(137),i,null,null);e.exports=o.exports},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"server-li",data:function(){return{}},methods:{},props:["info","bool"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),o=n.n(i);t.default={name:"server",data:function(){return{bool:!0,info:[{title:"服务保障",info2:["常见问题","帮助中心"]},{title:"购物指南",info2:["购物流程","电话订购","会员注册"]},{title:"支付方式",info2:["微信支付","支付宝支付"]},{title:"配送方式",info2:["包邮政策","配送方式","发货时间"]},{title:"售后服务",info2:["质量保证","退货政策","退货流程","退款说明"]}]}},methods:{change:function(){this.bool=!this.bool}},components:{Item:o.a}}},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".server{width:90%;margin:0 auto;background:#fff}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Server.vue"],names:[],mappings:"AACA,QAAQ,UAAW,cAAe,eAAoB,CACrD",file:"Server.vue",sourcesContent:["\n.server{width: 90%;margin: 0 auto;background: #FFFFFF;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".server-li{height:auto;font-size:.3rem;background:#fff}.server-box{margin:0 .2rem;height:.3rem;line-height:.3rem}.server-box span{display:inline-block;float:left}.server-box label{float:right;color:#ddd}.sec-ul li{display:none;,text-indent:1rem;text-align:left;color:#9c9c9c;font-size:.2rem}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Server-item.vue"],names:[],mappings:"AACA,WACC,YAAa,AACb,gBAAkB,AAClB,eAAoB,CACpB,AACD,YACC,eAAiB,AACjB,aAAe,AACf,iBAAoB,CACpB,AACD,iBAAiB,qBAAsB,UAAY,CAClD,AACD,kBAAkB,YAAa,UAAe,CAC7C,AACD,WAAW,aAAc,kBAAmB,gBAAiB,cAAe,eAAkB,CAC7F",file:"Server-item.vue",sourcesContent:["\n.server-li{\n\theight: auto;\n\tfont-size: 0.3rem;\n\tbackground: #FFFFFF;\n}\n.server-box{\n\tmargin: 0 0.2rem;\n\theight: 0.3rem;\n\tline-height: 0.3rem;\n}\n.server-box span{display: inline-block;float: left;\n}\n.server-box label{float: right;color: #DDDDDD;\n}\n.sec-ul li{display: none;,text-indent: 1rem;text-align: left;color: #9c9c9c;font-size: 0.2rem;\n}\n"],sourceRoot:""}])},function(e,t,n){var i=n(21);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("937897bc",i,!0)},function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("5ab447c2",i,!0)},function(e,t,n){e.exports=n.p+"static/img/logo.a0a0f13.png"},function(e,t,n){function i(e){n(24)}var o=n(3)(n(19),n(29),i,null,null);e.exports=o.exports},function(e,t,n){function i(e){n(23)}var o=n(3)(n(20),n(28),i,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"server"},e._l(e.info,function(t,i){return n("Item",{key:i,attrs:{info:t,bool:e.bool}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"server-li"},[n("div",{staticClass:"server-box"},[n("span",[e._v(e._s(e.info.title))]),e._v(" "),e.bool?n("label",[e._v("+")]):n("label",[e._v("-")])]),e._v(" "),n("ul",{staticClass:"sec-ul"},e._l(e.info.info2,function(t){return n("li",[e._v(e._s(t))])}))])},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header-box",data:function(){return{bool:!1,show:!1,list:["首页","粮油","蔬菜","肉类","蛋类","干果"],count:1}},methods:{showlist:function(){this.count++,this.count%2==0&&$(".list_box").slideDown(1e3,function(){this.show=!this.show}),this.count%2!=0&&$(".list_box").slideUp(1e3,function(){this.show=!this.show})},myinfo:function(){this.bool?this.$router.push({name:"Info",params:{user:$.cookie("user")}}):confirm("是否去注册或登录")&&this.$router.push({path:"/login"})},golist:function(e){0===e?(console.log(11),this.$router.push({path:"/"})):(console.log(22),this.$router.push({name:"List",params:{type:"type="+this.list[e]}}))}},created:function(){$.cookie("user")&&(this.bool=!0)}}},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".header-box{height:auto;width:100%;background:#fff}.header{height:1rem;width:100%}.img-box{height:1rem;float:left;width:5rem}.img-box img{width:100%;height:100%}.right{float:right}.right i{margin-right:.4rem;color:#7bc144;font-size:.5rem;text-align:center;line-height:1rem;float:left}.list_box{width:100%;height:auto}.list_box li{height:.7rem;color:#fff;border-bottom:1px solid #fff;background:#7bc144;line-height:.7rem;letter-spacing:.2rem;font-size:.33rem}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Head.vue"],names:[],mappings:"AACA,YACI,YAAY,AACZ,WAAW,AACX,eAAoB,CACvB,AACD,QAAQ,YAAa,UAAY,CAChC,AACD,SACI,YAAa,AACb,WAAY,AACZ,UAAY,CACf,AACD,aACI,WAAY,AACZ,WAAa,CAChB,AACD,OACI,WAAa,CAChB,AACD,SACI,mBAAqB,AACrB,cAAc,AACd,gBAAkB,AAClB,kBAAmB,AACnB,iBAAkB,AAClB,UAAW,CACd,AACD,UAAU,WAAY,WAAa,CAClC,AACD,aAAa,aAAe,WAAe,6BAAiC,mBAAoB,kBAAoB,qBAAuB,gBAAmB,CAC7J",file:"Head.vue",sourcesContent:["\n.header-box{\n  \t height:auto;\n  \t width:100%;\n  \t background: #FFFFFF;\n}\n.header{height: 1rem;width: 100%;\n}\n.img-box{\n  \t\theight: 1rem;\n  \t\tfloat: left;\n  \t\twidth: 5rem;\n}\n.img-box img{\n  \t\twidth: 100%;\n  \t\theight: 100%;\n}\n.right{\n  \t\tfloat: right;\n}\n.right i{\n  \t\tmargin-right: 0.4rem;\n  \t\tcolor:#7bc144;\n  \t\tfont-size: 0.5rem;\n  \t\ttext-align: center;\n  \t\tline-height: 1rem;\n  \t\tfloat:left;\n}\n.list_box{width: 100%;height: auto;\n}\n.list_box li{height: 0.7rem;color: #FFFFFF;border-bottom: 1px solid #FFFFFF;background: #7BC144;line-height: 0.7rem;letter-spacing: 0.2rem;font-size: 0.33rem;\n}\n"],sourceRoot:""}])},function(e,t,n){var i=n(31);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("7920c7ef",i,!0)},function(e,t,n){function i(e){n(32)}var o=n(3)(n(30),n(34),i,null,null);e.exports=o.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-box"},[n("div",{staticClass:"header"},[e._m(0),e._v(" "),n("div",{staticClass:"right"},[n("i",{staticClass:"iconfont icon-wode",on:{click:e.myinfo}}),e._v(" "),n("i",{staticClass:"iconfont icon-shouyesantiaoxian",on:{click:e.showlist}})])]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"list_box"},e._l(e.list,function(t,i){return n("li",{key:i,staticClass:"list",on:{click:function(t){e.golist(i)}}},[e._v(e._s(t))])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",{staticClass:"img-box"},[i("img",{attrs:{src:n(25)}})])}]}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"banner",data:function(){return{num:0}},props:["banner"],methods:{autoPlay:function(){if(++this.num==this.banner.length)return void(this.num=0)},play:function(){setInterval(this.autoPlay,3e3)},change:function(e){this.num=e}},computed:{},created:function(){this.play()}}},,,,,,function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".banner,.box{width:100%;height:100%;position:relative}.box{overflow:hidden}.imgbox{position:absolute}.imgbox,.imgbox img{width:100%;height:100%;float:left}.bullet{position:absolute;bottom:.2rem;text-align:center;height:.2rem;width:90%;left:5%}.bullet span{display:inline-block;width:.2rem;height:.2rem;border-radius:50%;background:#fff;margin:0 .1rem;line-height:.2rem;float:left}.bullet .bg{background:red}.image-enter-active,.image-leave-active{-webkit-transition:all 1s ease;transition:all 1s ease}.image-enter-active{-webkit-transform:translateX(0);transform:translateX(0)}.image-leave-active{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.image-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.image-leave{-webkit-transform:translateX(0);transform:translateX(0)}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Banner.vue"],names:[],mappings:"AAIA,aAFC,WAAY,YAAa,iBAAkB,CAI3C,AAFD,KAC0B,eAAiB,CAC1C,AACD,QACuC,iBAAmB,CACzD,AACD,oBAFE,WAAY,YAAa,UAAY,CAItC,AACD,QACG,kBAAmB,aAAe,kBAAmB,AACrD,aAAe,UAAW,OAAQ,CACpC,AACD,aAAa,qBAAsB,AAAC,YAAc,aAAe,kBAAmB,gBAAoB,eAAiB,kBAAoB,UAAY,CACxJ,AACD,YAAY,cAAgB,CAC3B,AACD,wCACC,+BAAgC,AAChC,sBAAsB,CACtB,AACD,oBACC,gCAAkC,AAC1B,uBAA0B,CAClC,AACD,oBACC,oCAAqC,AAC7B,2BAA6B,CACrC,AACD,aACC,mCAAoC,AAC5B,0BAA4B,CACpC,AACD,aACC,gCAAkC,AAC1B,uBAA0B,CAClC",file:"Banner.vue",sourcesContent:["\n.banner{\n\twidth: 100%;height: 100%;position:relative;\n}\n.box{\n\twidth: 100%;height: 100%;overflow: hidden;position:relative;\n}\n.imgbox{\n\t width: 100%;height: 100%;float: left;position: absolute;\n}\n.imgbox img{\n\twidth: 100%;height: 100%;float: left;\n}\n.bullet{\n   position: absolute;bottom: 0.2rem;text-align: center;\n   height: 0.2rem;width: 90%;left: 5%\n}\n.bullet span{display: inline-block; width: 0.2rem;height: 0.2rem;border-radius: 50%;background: #FFFFFF;margin: 0 0.1rem;line-height: 0.2rem;float: left;\n}\n.bullet .bg{background: red;\n}\n.image-enter-active,.image-leave-active{\n\t-webkit-transition: all 1s ease;\n\ttransition:all 1s ease\n}\n.image-enter-active{\n\t-webkit-transform: translateX(0%);\n\t        transform: translateX(0%);\n}\n.image-leave-active{\n\t-webkit-transform: translateX(-100%);\n\t        transform: translateX(-100%);\n}\n.image-enter{\n\t-webkit-transform: translateX(100%);\n\t        transform: translateX(100%);\n}\n.image-leave{\n\t-webkit-transform: translateX(0%);\n\t        transform: translateX(0%);\n}\n"],sourceRoot:""}])},,function(e,t,n){var i=n(42);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("79026922",i,!0)},,function(e,t,n){function i(e){n(44)}var o=n(3)(n(36),n(48),i,null,null);e.exports=o.exports},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("ul",{staticClass:"box"},[n("transition",{attrs:{name:"image"}},e._l(e.banner,function(t,i){return i===e.num?n("li",{key:i,staticClass:"imgbox"},[n("img",{attrs:{src:t}})]):e._e()}))],1),e._v(" "),n("div",{staticClass:"bullet"},e._l(e.banner.length,function(t,i){return n("span",{key:i,class:{bg:i===e.num},on:{click:function(t){e.change(i)}}})}))])},staticRenderFns:[]}},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pro-item",data:function(){return{}},props:["info","a"],methods:{go_detail:function(){this.$router.push({name:"Product",params:{goods:this.a}})}},created:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(122),o=n.n(i);t.default={name:"pro-list",data:function(){return{product:[{imgsrc:"../../static/img/product0.jpg",title:"印耕农业——原蜜荆花蜜",price:"58.00",sale:0},{imgsrc:"../../static/img/product1.jpg",title:"印耕农业——原蜜荆花蜜",price:"68.00",sale:1},{imgsrc:"../../static/img/product2.jpg",title:"印耕农业——原蜜荆花蜜",price:"56.00",sale:2}]}},components:{item:o.a},methods:{getProduct:function(){}},created:function(){this.getProduct()}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"recom-box",data:function(){return{list:this.product}},props:["product","a"],methods:{go_detail:function(){this.$router.push({name:"Product",params:{goods:this.a}})}},created:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(125),o=n.n(i);t.default={name:"recomm",data:function(){return{page:0,hot:["热销","推荐","新品"],info:[{imgsrc:"../../static/img/swiper0.jpg",msg:"仙鸣园鹅蛋  农家放养  新鲜草鹅蛋 十枚装  包邮",price:"88.00"},{imgsrc:"../../static/img/swiper1.jpg",msg:"仙鸣园鹅蛋  农家放养 ",price:"98.00"},{imgsrc:"../../static/img/swiper2.jpg",msg:"仙鸣园鹅蛋  农家放养  新鲜草鹅蛋 十枚装  包邮",price:"108.00"}]}},methods:{change:function(e){this.page=e}},mounted:function(){new Swiper(".swiper-container",{direction:"horizontal",speed:1e3,pagination:"#pagination",bulletClass:"swiper_bullet",bulletActiveClass:"swiper_active",paginationClickable:!0,paginationBulletRender:function(e,t,n){return'<li class="'+n+'">'+["热销","推荐","新品"][t]+"</li>"},lazyLoading:!0})},components:{List:o.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"searchbox",data:function(){return{search:""}},methods:{found:function(){var e={search:this.search},t=this;""!==this.search&&$.post("/regist",e,function(e){0===e.code&&t.$router.push({name:"List",params:{type:"type="+t.search}})})}}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(33),o=n.n(i),r=n(27),s=n.n(r),a=n(123),A=n.n(a),l=n(127),c=n.n(l),m=n(46),u=n.n(m),f=n(126),d=n.n(f);t.default={name:"index",data:function(){return{mark:0,imgs:["../../static/img/banner0.jpg","../../static/img/banner1.jpg","../../static/img/banner2.jpg"]}},components:{HeaderTop:o.a,Server:s.a,Product:A.a,Search:c.a,Banner:u.a,Recom:d.a},created:function(){$.cookie.json=!0,this.$route.params.user&&$.cookie("user",this.$route.params.user,{expires:1})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".pro-item{display:-webkit-box;display:-ms-flexbox;display:flex;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;height:2rem;background:#fff;margin:.2rem 0}.pro-info{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:.2rem}.pro-info .title{font-size:.35rem;color:#000;font-weight:bolder}.pro-info .price{font-size:.25rem;color:#7bc144;margin:.08rem 0}.pro-info .sale{color:#ccc}.pro-info .sale label{color:red}.pro-img{-webkit-box-flex:2;-ms-flex:2;flex:2}.pro-img img{width:100%;height:100%}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Product-item.vue"],names:[],mappings:"AACA,UACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,sBAA0B,AAC1B,8BAA+B,AACvB,sBAAuB,AAC/B,YAAY,AACZ,gBAAoB,AACpB,cAAiB,CACjB,AACD,UAAU,mBAAoB,WAAY,OAAQ,eAAkB,CACnE,AACD,iBAAiB,iBAAmB,WAAe,kBAAoB,CACtE,AACD,iBAAiB,iBAAmB,cAAe,eAAkB,CACpE,AACD,gBAAgB,UAAe,CAC9B,AACD,sBAAsB,SAAW,CAChC,AACD,SAAS,mBAAoB,WAAY,MAAQ,CAChD,AACD,aAAa,WAAY,WAAa,CACrC",file:"Product-item.vue",sourcesContent:["\n.pro-item{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tborder: 1px solid #cccccc;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\theight:2rem;\n\tbackground: #FFFFFF;\n\tmargin: 0.2rem 0;\n}\n.pro-info{-webkit-box-flex: 1;-ms-flex: 1;flex: 1;font-size: 0.2rem;\n}\n.pro-info .title{font-size: 0.35rem;color: #000000;font-weight: bolder;\n}\n.pro-info .price{font-size: 0.25rem;color: #7BC144;margin: 0.08rem 0;\n}\n.pro-info .sale{color: #CCCCCC;\n}\n.pro-info .sale label{color: red;\n}\n.pro-img{-webkit-box-flex: 2;-ms-flex: 2;flex: 2;\n}\n.pro-img img{width: 100%;height: 100%;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".pro-list{width:90%;margin:0 auto}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Product-list.vue"],names:[],mappings:"AACA,UAAU,UAAW,aAAe,CACnC",file:"Product-list.vue",sourcesContent:["\n.pro-list{width: 90%;margin: 0 auto;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".recom-box{width:100%;margin:0 auto;height:5.6rem;border-bottom:1px solid #ccc;margin-bottom:.2rem}.recom-box .img-box{width:100%;height:5rem}.recom-box .img-box img{width:100%;height:100%}.info-box{font-size:.25rem;height:.6rem;line-height:.6rem}.info-box span{display:inline-block}.info-box .info{width:60%;letter-spacing:.01rem;text-align:left;float:left;white-space:nowrap;overflow:hidden}.info-box .price{width:30%;float:right}.info-box .price label{color:#7bc144;font-size:.4rem}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/RecomList.vue"],names:[],mappings:"AACA,WACC,WAAY,cAAe,cAAe,6BAAiC,mBAAsB,CACjG,AACD,oBACG,WAAY,WAAa,CAC3B,AACD,wBACG,WAAY,WAAY,CAC1B,AACD,UAAU,iBAAmB,aAAe,iBAAoB,CAC/D,AACD,eAAe,oBAAsB,CACpC,AACD,gBAAgB,UAAW,sBAAwB,gBAAiB,WAAY,mBAAoB,eAAiB,CACpH,AACD,iBAAiB,UAAW,WAAa,CACxC,AACD,uBAAuB,cAAe,eAAkB,CACvD",file:"RecomList.vue",sourcesContent:["\n.recom-box{\n\twidth: 100%;margin: 0 auto;height: 5.6rem;border-bottom: 1px solid #CCCCCC;margin-bottom: 0.2rem;\n}\n.recom-box .img-box{\n  \twidth: 100%;height: 5rem;\n}\n.recom-box .img-box img{\n  \twidth: 100%;height: 100%\n}\n.info-box{font-size: 0.25rem;height: 0.6rem;line-height: 0.6rem;\n}\n.info-box span{display: inline-block;\n}\n.info-box .info{width: 60%;letter-spacing: 0.01rem;text-align: left;float: left;white-space: nowrap;overflow: hidden;\n}\n.info-box .price{width: 30%;float: right;\n}\n.info-box .price label{color: #7BC144;font-size: 0.4rem;\n}\n  \n"],sourceRoot:""}])},,,,,,function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".recomm #pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;height:.8rem;margin-bottom:.2rem}.recomm #pagination .swiper_bullet{display:inline-block;height:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:.3rem;line-height:.8rem;background:#e8e8e8;width:2rem}.recomm #pagination .swiper_active{background:none;color:#fff;background-color:#7bc144}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Recommend.vue"],names:[],mappings:"AACA,oBACG,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,6BAA8B,AAClC,aAAe,AACf,mBAAsB,CACxB,AACD,mCACS,qBAAsB,AAC5B,aAAe,AACf,8BAA+B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,gBAAkB,AAClB,kBAAoB,AACpB,mBAAoB,AACpB,UAAY,CACd,AACD,mCACO,gBAAiB,AACR,WAAe,AACf,wBAA0B,CACzC",file:"Recommend.vue",sourcesContent:["\n.recomm #pagination{\n\t\t\tdisplay: -webkit-box;\n\t\t\tdisplay: -ms-flexbox;\n\t\t\tdisplay: flex;\n\t\t\t-ms-flex-pack: distribute;\n\t\t\t    justify-content: space-around;\n\t\t\theight: 0.8rem;\n\t\t\tmargin-bottom: 0.2rem;\n}\n.recomm #pagination\t.swiper_bullet{\n\t   \t    display: inline-block;\n\t\t\theight: 0.8rem;\n\t\t\t-webkit-box-sizing: border-box;\n\t\t\t        box-sizing: border-box;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 0.3rem;\n\t\t\tline-height: 0.8rem;\n\t\t\tbackground: #E8E8E8;\n\t\t\twidth: 2rem;\n}\n.recomm #pagination .swiper_active{\n\t\t\t    background: none;\n                color: #FFFFFF;\n                background-color: #7BC144;\n}\n\t\n\t/*.nav{width: 90%;margin: 0 auto;display: flex;font-size:0.3rem;color: #333333;justify-content: space-around;margin-bottom:0.2rem ;}\n\t.nav li{background: #dcdcdc;width: 32%;height: 0.6rem;line-height: 0.6rem;}\n\t.recomm .nav .bg{color: #FFFFFF;background: #7bc144;}*/\n\t\n\n\t\n/*\t.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0\n}*/\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".index{height:100%;width:100%;background:#f8f8f8}.fooer{background:#fff}.bootom{color:#333;font-size:.2rem}#pro-title{height:1rem;line-height:1rem;width:90%;font-size:.6rem;text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto}#pro-title h1{float:left}#pro-title span{display:block;color:#42b983;font-size:.4rem;height:.6rem;line-height:.6rem;border-bottom:1px solid #42b983;margin-left:.2rem}#search{height:1.2rem;overflow:hidden;background:#fff}#bannerbox{width:100%;height:3rem}#recom{width:90%;margin:0 auto;background:#fff;padding:.2rem 0}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/pages/Index.vue"],names:[],mappings:"AACA,OAAO,YAAa,WAAY,kBAAoB,CACnD,AACD,OAAO,eAAoB,CAC1B,AACD,QAAQ,WAAc,eAAkB,CACvC,AACD,WAAW,YAAa,iBAAiB,UAAW,gBAAkB,gBAAiB,oBAAqB,oBAAqB,aAAc,uBAAwB,oBAAqB,2BAA4B,yBAA0B,sBAAuB,mBAAoB,aAAe,CAC3S,AACD,cAAc,UAAY,CACzB,AACD,gBAAgB,cAAc,cAAe,gBAAkB,aAAe,kBAAoB,gCAAiC,iBAAoB,CACtJ,AACD,QAAQ,cAAe,gBAAiB,eAAoB,CAC3D,AACD,WAAW,WAAY,WAAa,CACnC,AACD,OAAO,UAAW,cAAe,gBAAoB,eAAkB,CACtE",file:"Index.vue",sourcesContent:["\n.index{height: 100%;width: 100%;background: #f8f8f8;\n}\n.fooer{background: #FFFFFF;\n}\n.bootom{color:#333333;font-size: 0.2rem;\n}\n#pro-title{height: 1rem;line-height:1rem;width: 90%;font-size: 0.6rem;text-align: left;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: start;-ms-flex-pack: start;justify-content: flex-start;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: 0 auto;\n}\n#pro-title h1{float: left;\n}\n#pro-title span{display:block;color: #42B983;font-size: 0.4rem;height: 0.6rem;line-height: 0.6rem;border-bottom: 1px solid #42B983;margin-left: 0.2rem;\n}\n#search{height: 1.2rem;overflow: hidden;background: #FFFFFF;\n}\n#bannerbox{width: 100%;height: 3rem;\n}\n#recom{width: 90%;margin: 0 auto;background: #FFFFFF;padding: 0.2rem 0;\n}\n"],sourceRoot:""}])},function(e,t,n){t=e.exports=n(12)(!0),t.push([e.i,".searchbox{width:90%;margin:.2rem auto;border:1px solid #333;height:.8rem;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.3rem;line-height:.8rem;background:#f0f0f0}.searchbox input{height:100%;width:2rem;-webkit-box-flex:4;-ms-flex:4;flex:4;border:0;padding:0 .1rem}.search{border:0}.searchbox .search{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:.6rem;text-align:center;background-color:#f0f0f0}","",{version:3,sources:["E:/Vue/mytext0/nongtian/src/components/Search.vue"],names:[],mappings:"AACA,WAAW,UAAW,kBAAoB,sBAA0B,aAAe,oBAAqB,oBAAqB,aAAc,gBAAkB,kBAAoB,kBAAoB,CACpM,AACD,iBAAiB,YAAa,WAAY,mBAAoB,WAAY,OAAQ,SAAU,eAAkB,CAC7G,AACD,QAAQ,QAAU,CACjB,AACD,mBAAmB,mBAAmB,WAAW,OAAO,gBAAiB,kBAAmB,wBAA0B,CACrH",file:"Search.vue",sourcesContent:["\n.searchbox{width: 90%;margin: 0.2rem auto;border: 1px solid #333333;height: 0.8rem;display: -webkit-box;display: -ms-flexbox;display: flex;font-size: 0.3rem;line-height: 0.8rem;background: #f0f0f0;\n}\n.searchbox input{height: 100%;width: 2rem;-webkit-box-flex: 4;-ms-flex: 4;flex: 4;border: 0;padding: 0 0.1rem;\n}\n.search{border: 0;\n}\n.searchbox .search{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:0.6rem;text-align: center;background-color: #f0f0f0;\n}\n"],sourceRoot:""}])},,,function(e,t,n){var i=n(95);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("5afcb8a4",i,!0)},function(e,t,n){var i=n(96);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("011e41a9",i,!0)},function(e,t,n){var i=n(97);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("3bad4656",i,!0)},,,,,,function(e,t,n){var i=n(103);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("1d3407be",i,!0)},function(e,t,n){var i=n(104);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("09315ae6",i,!0)},function(e,t,n){var i=n(105);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(13)("06fcb0d6",i,!0)},,,,function(e,t,n){function i(e){n(108)}var o=n(3)(n(55),n(128),i,null,null);e.exports=o.exports},function(e,t,n){function i(e){n(109)}var o=n(3)(n(56),n(129),i,null,null);e.exports=o.exports},,function(e,t,n){function i(e){n(110)}var o=n(3)(n(58),n(130),i,null,null);e.exports=o.exports},function(e,t,n){function i(e){n(116)}var o=n(3)(n(59),n(136),i,null,null);e.exports=o.exports},function(e,t,n){function i(e){n(118)}var o=n(3)(n(60),n(138),i,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"pro-item"},[n("div",{staticClass:"pro-info"},[n("p",{staticClass:"title",on:{click:e.go_detail}},[e._v(e._s(e.info.title))]),e._v(" "),n("p",{staticClass:"price"},[e._v("￥"+e._s(e.info.price))]),e._v(" "),n("p",{staticClass:"sale"},[e._v("此产品已售 "),n("label",[e._v(e._s(e.info.sale))]),e._v("件")])]),e._v(" "),n("div",{staticClass:"pro-img",on:{click:e.go_detail}},[n("img",{attrs:{src:e.info.imgsrc}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pro-list"},e._l(e.product,function(e,t){return n("item",{key:t,attrs:{info:e,a:t}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.list,function(t,i){return n("dl",{key:i,staticClass:"recom-box"},[n("dt",{staticClass:"img-box",on:{click:e.go_detail}},[n("img",{attrs:{src:t.imgsrc}})]),e._v(" "),n("dd",{staticClass:"info-box"},[n("span",{staticClass:"info",on:{click:e.go_detail}},[e._v(e._s(t.msg))]),e._v(" "),n("span",{staticClass:"price"},[n("label",[e._v(e._s(t.price))]),e._v("元")])])])}))},staticRenderFns:[]}},,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recomm"},[n("ul",{attrs:{id:"pagination"}}),e._v(" "),n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.hot,function(t,i){return n("List",{key:i,staticClass:"swiper-slide",attrs:{product:e.info,a:i}})}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[n("HeaderTop"),e._v(" "),n("div",{attrs:{id:"bannerbox"}},[n("Banner",{attrs:{banner:e.imgs}})],1),e._v(" "),n("div",{attrs:{id:"search"}},[n("Search")],1),e._v(" "),n("div",{attrs:{id:"productbox"}},[e._m(0),e._v(" "),n("Product")],1),e._v(" "),n("div",{attrs:{id:"recom"}},[n("Recom")],1),e._v(" "),n("div",{staticClass:"fooer"},[n("Server"),e._v(" "),e._m(1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pro-title"}},[n("h1",[e._v("新品推荐")]),e._v(" "),n("span",[e._v("NEWS PRODUCTS")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bootom"},[n("p",[e._v(" 农田在线 备案号:冀C20160000")]),e._v(" "),n("p",[e._v("版权归属:冀C20160000   技术支持：LZ ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchbox"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.search,expression:"search",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入搜索关键字",autofocus:""},domProps:{value:e.search},on:{change:function(t){e.search=t.target.value}}}),e._v(" "),n("button",{staticClass:"search iconfont icon-sousuo",on:{click:e.found}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=2.446a1d1984f9269c75f0.js.map