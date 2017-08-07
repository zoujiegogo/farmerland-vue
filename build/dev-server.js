require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

app.post("/regist",function(req,res){
	console.log(req.body)
  res.json({
  		code:0,
    	msg:"注册成功"	
   });
  })

app.post("/login",function(req,res){
	console.log(req.body);
	 res.json({
   	code:0,
   	msg:"登陆成功"
    });
  })

app.get('/recom',function(req,res){
	   console.log(req.query);
	    res.json({
	    	 list:[
	    	  {imgsrc:"../../static/img/swiper0.jpg",msg:"仙鸣园鹅蛋  农家放养  新鲜草鹅蛋 十枚装  包邮",price:"88.00",full_price:'89.00'},
	    	  {imgsrc:"../../static/img/swiper1.jpg",msg:"绿豆800g/袋",price:"58.00",full_price:'79.00'},
	    	  {imgsrc:"../../static/img/swiper2.jpg",msg:"仙鸣园鹅蛋  农家放养  ",price:"88.00",full_price:'89.00'},
	    	  {imgsrc:"../../static/img/swiper3.jpg",msg:" 农家放养仙鸣园鹅蛋  ",price:"25.60",full_price:'27.00'},
	    	  {imgsrc:"../../static/img/swiper4.jpg",msg:"印耕农业——原蜜荆花蜜",price:"32.00",full_price:'32.00'},
	    	  {imgsrc:"../../static/img/swiper5.jpg",msg:"【一周热卖】黄金小米    加送6枚土鸡蛋",price:"58.00",full_price:'69.00'},
	    	   ]
	    })
})
app.get('/server',function(req,res){
	    res.json({
	    	  info:{title:'电话订购',info:['农田在线致辞电话订购哦！','一个电话，农产品送到家','订购热线：0.11-8956225']}
	    })
})
app.get('/detail',function(req,res){
	    res.json({
	    	  detail:[
	    	  {title:"印耕农业——原蜜荆花蜜",
	    	  banner:['http://www.nongtian.tv/uploads/2016/04/20160421143506338.jpg','http://www.nongtian.tv/uploads/2016/04/20160421143854831.jpg','http://www.nongtian.tv/uploads/2016/04/20160421144435951.jpg'],
	    	  price:"58.00",
	    	  fullprice:'69.00',
	    	  sale:'30',
	    	  titleimg:'http://www.nongtian.tv/uploads/2016/04/20160407112332172.jpg',
	    	  imgsrc:['http://www.nongtian.tv/uploads/2016/05/20160510164934_86788.jpg','http://www.nongtian.tv/uploads/2016/05/20160510164942_77651.jpg','http://www.nongtian.tv/uploads/2016/05/20160510164947_96625.jpg','http://www.nongtian.tv/uploads/2016/05/20160510164955_98832.jpg','http://www.nongtian.tv/uploads/2016/05/20160510165009_99811.jpg','http://www.nongtian.tv/uploads/2016/05/20160510165016_77990.jpg','http://www.nongtian.tv/uploads/2016/05/20160510165022_96820.jpg'],
	    	  sec_title:'印耕农业'
	    	  }
	    	  ]
	    })
})
app.get('/product',function(req,res){
	console.log(req.query)
	   res.json({
		 product:[
{"imgsrc":"../../static/img/product0.jpg","title":'印耕农业——原蜜荆花蜜','price':'58.00','sale':0},{"imgsrc":"../../static/img/product1.jpg","title":'印耕农业——原蜜荆花蜜','price':'68.00','sale':1},{"imgsrc":"../../static/img/product2.jpg","title":'印耕农业——原蜜荆花蜜','price':'56.00','sale':2}
	        ]
	   })
});


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
