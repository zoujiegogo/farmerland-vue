var express = require("express");
var bodyParser = require("body-parser"); //导入处理post请求的中间件 
var app = express();

 //处理post请求
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
	extended:true
}));
//数据保存
/*app.use(session({ 
    secret:"1702demo" ,//用来生成session 表示的 字符串
    maxAge:60000000 //如果当中这个登陆用户 在这个时间段（毫秒）以内不发任何请求 这个session就失效
}))*/

app.post("/regist",function(req,res){
  res.json({
   	code:0,
   	msg:"注册成功"	
   });
  })

app.post("/login",function(req,res){
	 //req.session.user = req.body.user
	// var _user = req.session.user
	 //console.log(req.session)
     console.log(req.body)
	 //console.log(req.body.user)
   res.json({
   	code:0,
   	msg:"登陆成功",
   	user:req.body.user
    });
  })
app.get('/product',function(req,res){
	console.log(req.query)
	res.json({
		 product:[
{"imgsrc":"../../static/img/product0.jpg","title":'印耕农业——原蜜荆花蜜','price':'58.00','sale':0},{"imgsrc":"../../static/img/product1.jpg","title":'印耕农业——原蜜荆花蜜','price':'68.00','sale':1},{"imgsrc":"../../static/img/product2.jpg","title":'印耕农业——原蜜荆花蜜','price':'56.00','sale':2}
	        ]
	     
	})
})
app.get("/list",function(req,res){
	console.log(req.query)
	res.json({
		
	})
  })

app.get ('/city',function(req,res){
	res.json({
		city: [
		{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},    {"cityList":["保定","北京","包头","长春","成都","重庆","长沙","常州","沧州","东莞","大连","东营","德阳","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","呼和浩特","海口","黄石","杭州","惠州","湖州","金华","九江","江门","济南","济宁","嘉兴","揭阳","晋中"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","廊坊","拉萨","丽水","临沂","洛阳","连云港","兰州","柳州","泸州","茂名","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"}, {"cityList":["莆田","青岛","秦皇岛","清远","泉州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["韶关","上海","石家庄","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","新乡","咸阳","徐州","盐城","银川","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}
		]
      
	})
})
app.listen(8000,function(){
	console.log("连接成功!")
 }); //设置监听的端口