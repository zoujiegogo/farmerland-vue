<template>
	<div id="product_item">
		<HeaderTop></HeaderTop>
		<ul id="list">
			<Item v-for='(item,index) in list' :key='index' :item='item' :a="index" @addProduct='add'></Item>
		</ul>
		<div class="fooer">
		   <Server></Server>
		   <div class="bootom">
		     <p> 农田在线 备案号:冀C20160000</p>
		     <p>版权归属:冀C20160000   技术支持：LZ </p>
		   </div>
		</div>
		<div id="right" @click='gocart'>
			<i class="iconfont icon-gouwuche"></i>
		</div>
	</div>
</template>

<script>
	import HeaderTop from '../components/Head';
	import Server from '../components/Server';
	import Item from '../components/ProductList-item';
	export default{
	  name:'product_item',
	  data(){
	  	return {
	  		list:[],
	  		product:[]
	  	}
	  },
	  components:{
	  	HeaderTop,Server,Item
	  },
	  methods:{
	  	add(val){
	  		var _this=this, bool=false;
	  		if(this.product.length==0){
	  			this.product.push(val)
	  			$.cookie('product',this.product)
	  		}else{
	  			var arr = [];
	  		    this.product.map(function(ele,idx){
	  		    	 arr.push(ele.id)
	  		    });
	  		    if(!arr.includes(val.id)){
	  		    	this.product.push(val)
	  		   $.cookie('product',_this.product)
	  		   //console.log($.cookie('product'))
	  		    }else{
	  		    	var num = arr.indexOf(val.id) + 0;
	  		    	if(confirm('该商品已添加购物车')){
	  		    		//this.product[num].count+=1;
	  		    	//$.cookie('product',this.product)
	  		    	}
                }
	  		}
	  	},
	  	gocart(){
	  		this.$router.push('/cart')
	  	}
	  },
	  computed:{
	  	
	  },
	  created(){
	  	var _this = this;
	  	  $.cookie.json = true;
	  	  if($.cookie('product')){
	  	  	this.product=$.cookie('product')
	  	  }
	  	  console.log($.cookie('product'))
	  	$.get('/recom',function(data){
	  		_this.list = data.list
	  	})
	  	
	  }
	}
</script>

<style>
	#product_item{position: relative;}
	#right{position: fixed;bottom: 2rem;right: 0.2rem;}
	#right i{display: inline-block;border: 1px solid #7BC144;width: 1rem;height: 1rem;line-height: 1rem;color: #7BC144;border-radius: 50%;font-size: 0.7rem;}
	
	 #list{width: 90%;margin: 0 auto;display: flex;flex-wrap: wrap;justify-content: space-between;align-content:space-around ;}
	.fooer{background: #FFFFFF;}
	.bootom{color:#333333;font-size: 0.2rem;}
</style>