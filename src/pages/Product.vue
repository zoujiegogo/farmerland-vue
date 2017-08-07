<template>
	<div id="product">
		<div  v-for='(item,idx) in detail' :key='idx'>
		<div id="details">
	     <HeaderTop></HeaderTop>
	     <div class="bannerbox">
	     	 <Banner :banner='item.banner'></Banner>
	     </div>
	     
	      <div class="info_box">
	        <h1>{{item.title}}</h1>
	        <div class="price_box">
	        	<div class="price">￥<label>{{item.price}}</label></div>
	        	<div class="full_price">
	        		<s>￥<label>{{item.fullprice}}</label></s>
	        		<span>免运费</span>
	        	</div>
	        </div>
	        <ul class="xc">
	        	<li>销量&nbsp;<label>2件</label></li>
	        	<li>好评率&nbsp;<label>0%(0人)</label></li>
	        </ul>
	        <div class="sale_box">
	        	<div>
	        		数量
	        	</div>
	        	<div>
	        		 <Count v-model='num' @add="addCount" @sub="subCount"></Count>
	        	</div>
	        	<div>
	        		库存：<label>{{item.sale}}件</label>
	        	</div>
	        </div>	        
	      </div>
	      <div class="go_farm">
	        	<ul>
	        		<li><img :src="item.titleimg"/></li>
	        		<li>{{item.sec_title}}</li>
	        		<li>进入农场</li>
	        	</ul>
	        </div>
	        <div class="detail_box">
	        	<ul class="detail_nav">
	        		<li><a href="#param">商品参数</a></li>
	        		<li><a href="#detail">商品详情</a></li>
	        		<li><a href="#comment">购买评价</a></li>
	        	</ul>
	        	<div class="detail_info">
	        		
	        		<dl>
	        			<dt id="param">
	        				<span>商品参数</span>
	        			</dt>
	        			<dd></dd>
	        		</dl>
	        		<dl>
	        			<dt id="detail"><span>商品详情</span></dt>
	        			<dd v-for="(img,num) in item.imgsrc" :key='num'><img :src="img"/></dd>
	        		</dl>
	        		<dl>
	        			<dt id="comment"><span>购买评价</span></dt>
	        			<dd></dd>
	        		</dl>
	        		
	        	</div>
	        </div>
	      <Server></Server>
	 </div>	  
	  <div id="gocart">
	  	<div class="gocart">
		<div class="cart_price"><label>￥{{item.price}}</label><s>￥{{item.fullprice}}</s></div>
		<div class="now_buy" @click='gopay'>立即购买</div>
		<div class="addcart" @click='gocart'>添加购物车</div>
	  </div>
	 </div>
	</div>
	</div>
</template>

<script>
	import HeaderTop from '../components/Head'
	import Server from '../components/Server'
	import Banner from '../components/Banner'
	import Count from '../components/Addcount'
	export default {
  name: 'hello',
  data () {
    return {
    	mark:0,
      detail: [],
      num:1
    }
  },
  components:{
  	HeaderTop,Server,Banner,Count
  },
  methods:{
  	gopay(){
  		this.$router.push('/cart');
  	},
  	addCount(){
				this.num++
				if(this.num>=30){
					this.num=30
				}
			},
	subCount(){
				this.num--
				if(this.num<=1){
					this.num=1
				}
			},
  	gocart(){
  		//var num = $('.addcount input').eq(1).val();
  		alert('已添加商品到购物车')
  	}	
  },
  created(){
    var param={
    	goods:this.$route.params.goods
    },
    _this=this
    $.get('detail',param,function(data){
    	 _this.detail = data.detail
    })
  },
  
 }
</script>

<style>
	#product{width: 100%;position: relative;height: 100%;overflow: hidden;}
	#details{position: absolute;top: 0;bottom: 1rem;overflow: auto;width: 100%;}
	#gocart{position:absolute;bottom: 0;height: 1rem;width: 100%;}
	.bannerbox{height: 4rem;}
    .info_box{width: 90%;margin: 0 auto;text-align: left;font-size: 0.25rem;margin-bottom:1.5rem ;}
    .info_box h1{font-size: 0.6rem;color: #666666;text-align: left;}
    .info_box .price {color: #7BC144;} 
    .info_box .price label{font-size:0.4rem ;}
    .info_box .full_price s{color: #9C9C9C;}
    .info_box .full_price span{display: inline-block;font-size: 0.3rem;padding: 0.05rem 0.1rem;background: #7BC144;color: #FFFFFF;margin-left: 0.2rem;}
    .xc{width:100%;height: 1rem;margin:0.2rem;border: 1px solid #666666;border-right: 0;border-left: 0;display: flex;}
    .xc li{flex: 1;text-align: center;line-height: 0.6rem;margin: 0.2rem 0;}
    .xc li:nth-child(1){border-right: 1px solid #666666;}
    .xc li label{color: #7BC144;}
    .sale_box{text-align: center;height: 0.7rem;overflow: hidden;}
    .sale_box div{float: left;height: 0.7rem;line-height: 0.7rem;margin-right: 0.2rem;}
    .go_farm{border: 1px solid #222222;border-left: 0;border-right: 0;height: 2rem;margin: 0.1rem 0;width:100%}
    .go_farm ul{padding: 0.2rem 0;width: 90%;height: 1.6rem;margin: 0 auto;}
    .go_farm ul li{float: left;height: 1.6rem;}
    .go_farm ul li:nth-child(1){width: 1.6rem;}
    .go_farm ul li:nth-child(1) img{width: 100%;height: 100%;}
    .go_farm ul li:nth-child(2){margin:0 0.2rem;font-size: 0.3rem;color: #7BC144;line-height: 1.6rem;text-align: center;}
    .go_farm ul li:nth-child(3){height: 0.6rem;margin-top: 0.4rem;margin-left:0.4rem;line-height: 0.6rem;font-size: 0.25rem;padding: 0.1rem 0.2rem;background: #f51655;color: #FFFFFF;}
    .detail_box{width: 100%;position: relative;}
    .detail_box .detail_nav{display: flex;border: 1px solid #666666;height: 1rem;line-height: 1rem;margin-bottom: 0.2rem;}
    .detail_box .detail_nav li{border-right: 1px solid #666666;flex: 1;}
    .detail_box .detail_nav li a{font-size:0.3rem;display: inline-block;width: 100%;height: 100%;}
    .detail_box .detail_nav li:nth-last-child(1){border-right: 0;}
    .detail_info{width: 90%;margin: 0 auto;}
    .detail_info dl dt{border-bottom: 1px solid #333333;text-align: left;margin-bottom: 0.1rem;}
    .detail_info dl dt span{display: inline-block;height: 0.5rem;line-height: 0.5rem;color: #666666;background: #8e8e8e;padding: 0 0.2rem;}
    .detail_info dl dd{min-height: 1.5rem;}
    .detail_info dl dd img{width: 100%;}
    .gocart{
		display: flex;font-size: 0.35rem;line-height: 1rem;color: #FFFFFF;
	}
	.cart_price{flex: 4;background: #efefef;color: #999999;}
	.cart_price label{color: #7BC144;font-size: 0.45rem;margin: 0.1rem;}
	.now_buy{flex:3;background:deeppink}
	.addcart{flex:3;background:#7BC144}
</style>