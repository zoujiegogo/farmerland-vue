<template>
	<div id="cart_box">
		<div id="container">
		  <div id="cart_top">
		    <div id="cart_title">全部商品</div>
		    <div id="back" @click='goindex'><i class="iconfont icon-fanhui1"></i></div>
		  </div>
		  <div id="cart_info">
		  	购物车信息
		  </div>
		  <ul id="cart_list">
		  	 <Cart :item='item' :key='idx' :a='idx' @changeCount='changeCookieCount' v-for='(item,idx) in product' @omitProduct='omit'></Cart>
		  </ul>
		  
		  <div id="pay">
		  	 <div id="pay_info">
		  	 	商品总价：(不含运费和优惠扣减)：<label>{{price}}</label>元
		  	 </div>
		  	 <div id="go_pay"><p>买单</p></div>
		  </div>
		  <div class="fooer">
		   <Server></Server>
		   <div class="bootom">
		     <p> 农田在线 备案号:冀C20160000</p>
		     <p>版权归属:冀C20160000   技术支持：LZ </p>
		   </div>
		</div>
	   </div>
	</div>
</template>

<script>
	import Server from '../components/Server';
	import Cart from '../components/Cart-item';
	
	export default{
		name:"cart_box",
		data(){
			return {
				product:[],
				price:0
			}
		},
		methods:{
			omit(val){
				var arr = [];
				this.product.map(function(ele,index){
					 arr.push(ele.id)
				});
				var num = arr.indexOf(val);
				  this.product.splice(num,1)
				 $.cookie('product',this.product)
			},
			changeCookieCount(arr){
				if(arr){
					this.product[arr[0]].count = arr[1]
				}
				$.cookie('product',this.product)
				this.totalMoney()
			},
			goindex(){
				this.$router.push('/index')
			},
			totalMoney(){
				var total = 0
				this.product=$.cookie("product")
				this.product.map(function(ele){
					var price = ele.count*ele.price;
					 total += price
				})
				this.price = total
			}
			
		},
		components:{
			Server,Cart
		},
		created(){
			$.cookie.json = true
		 this.product = $.cookie('product')
		  console.log(this.product)
		  this.changeCookieCount()
		},
		mounted(){
			$('#cart_list #count').map(function(index,ele){   //遍历div元素时，第二个参数才是处理元素？？？
				  
			})
			
		}
	}
</script>

<style>
	#cart_box{
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-top: 0.2rem;
	}
	#container{height: 100%;width: 99%;margin: 0 auto;}
	#cart_top{background: #7BC144;height: 0.6rem;line-height: 0.6rem;display: flex;justify-content: space-between;color: #FFFFFF;font-size: 0.3rem;}
	
	#cart_title{text-indent: 0.3rem;}
	#back{width: 1rem;margin-right: 0.2rem;}
	
	#cart_info{width: 100%;height: 0.8rem;line-height: 0.8rem;border: 1px solid #222222;box-sizing: border-box;text-align: left;font-size: 0.25rem;text-indent: 0.2rem;}
	#pay{height: 0.8rem;box-sizing: border-box;border: 1px solid #7BC144;margin: 0.1rem auto;}
	#pay div{float: left;height: 0.8rem;line-height: 0.8rem;font-size: 0.2rem;color: #666;}
	#pay_info{text-indent: 0.1rem;width: 75%;text-align: left;}
	#pay_info label{font-size: 0.25rem;color: #7BC144;}
	#pay #go_pay{width: 25%;background: #7BC144;color: #FFFFFF;font-size: 0.4rem;}
	.fooer{font-size: 0.25rem;color: #666;}
</style>