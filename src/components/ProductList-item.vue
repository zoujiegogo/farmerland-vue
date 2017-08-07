<template>
	<li class="product_itme" :key='a'>
	   <h1  @click='go_detail'><img :src="item.imgsrc"/></h1>
	   <span class="product_info"  @click='go_detail'>{{item.msg}}</span>
	   <span class="product_price">￥{{item.price}}</span><s>￥{{item.full_price}}</s>
	   <div class="add_cart" @click='add' :key='a'>
	   	 <i class="iconfont icon-gouwuche"></i><label>加入购物车</label>
	   </div>
	</li>
</template>

<script>
	export default{
	  name:'product_item',
	  data(){
	  	return {
	  		
	  	}
	  },
	  props:['item','a'],
	  methods:{
	  	go_detail(){
		    this.$router.push({name:"Product", params: {goods:this.a}})
		    //$.cookie('product',{'title':this.item.msg})
		  },
		add(){
			var param = Object.assign(this.item,{id:"c"+this.a,count:1})
			 this.$emit('addProduct',param)
		}
	  },
	  computed:{
	  	
	  },
	  created(){
	  	
	  }
	}
</script>
<style>
	.product_itme{width: 47%;margin-bottom: 0.2rem;text-align: left;}
	.product_itme h1{width: 100%;height: 3.5rem;}
	.product_itme h1 img{width: 100%;height: 100%;}
	.product_itme .product_info{width: 70%;height: 0.6rem;line-height: 0.6rem;display: inline-block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 0.25rem;}
	.product_itme .product_price{height: 0.6rem;line-height: 0.6rem;font-size: 0.3rem;color: #7BC144;}
    .product_itme s{font-size: 0.2rem;color: #666666;padding-left:0.2rem ;}
    .product_itme .add_cart{width: 2rem;height: 0.6rem;line-height: 0.6rem;border: 1px solid #CCCCCC;font-size: 0.25rem;text-align: center;}
    .product_itme i{color: #7BC144;margin-right: 0.2rem;font-size: 0.3rem;} 
     
</style>