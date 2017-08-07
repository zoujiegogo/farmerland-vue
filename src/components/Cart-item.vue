<template>
	<li class="cart_item">
		<div class="item_top">
		<h1><img :src="item.imgsrc"/></h1>
		  <div class="infobox">
		      <div class="info">
		      	<span>{{item.msg}}</span>	
		      	<i class="iconfont icon-lajitong" @click='shanchu'></i>
		      </div>
		      <div class="countbox">
		      	<Count @add="addCount" @sub='subCount' :value='num' @input='getCount'></Count>
		      </div>
		  </div>
		</div>
		<div class="item_bottom">
		    <span class="price">￥{{item.price}}</span><s>￥{{item.full_price}}</s>
		</div>
	</li>
</template>

<script>
	import Count from './Addcount';
	export default{
		name:"cart_item",
		data(){
			return {
				num: $.cookie('product')[this.a].count
			}
		},
		props:['item','a'],
		components:{
			Count
		},
		methods:{
			shanchu(){
				this.$emit('omitProduct',this.item.id)
			},
			addCount(){
				this.num++
				this.$emit('changeCount',[this.a,this.num])
			  },
			subCount(){
				this.num--
				if(this.num<=1){
					this.num=1
				}
				this.$emit('changeCount',[this.a,this.num])
			},
			getCount(val){
				 this.num=val
			this.$emit('changeCount',[this.a,this.num])
			}
		},
		update(){
			console.log(this.num)

			
		}
	}
</script>

<style>
	.cart_item{border: 1px solid #CCCCCC; border-top:0 ;border-right: 0;box-sizing: border-box;height: 3.4rem;overflow: hidden;}
	.item_top{height: 2.4rem;display: flex;width: 85%;margin: 0.2rem auto 0;}
	.item_top h1{width: 3rem;height: 2.4rem;margin-right: 0.2rem;}
	.item_top h1 img{width: 100%;height: 100%;}
	.item_top .infobox{width: 3.5rem;}
	.item_top .info{display: flex;justify-content: space-between;height: 0.8rem;line-height: 0.8rem;}
	.item_top .info span{width: 2rem;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;font-size: 0.25rem;}
	.item_top .info i{font-size: 0.35rem;}
	
    .item_bottom{height: 0.8rem;line-height: 0.8rem;width: 85%;margin: 0 auto;text-align: left;}
    .item_bottom span{font-size: 0.35rem;color: #7BC144;}
    .item_bottom s{padding-left: 0.25rem;font-size: 0.24rem;color: #666666;}
</style>