<template>
	<li class="pro-item">
		<div class="pro-info" >
			<p class="title" @click='go_detail'>{{info.title}}</p>
			<p class="price">￥{{info.price}}</p>
			<p class="sale">此产品已售 <label>{{info.sale}}</label>件</p>
		</div>
		<div class="pro-img" @click='go_detail'>
			<img :src="info.imgsrc"/>
		</div>
	</li>
</template>

<script>
	 export default {
		  name: 'pro-item',
		  data () {
		    return {
		      
		    }
		  },
		  props:['info','a'],
		  methods:{
		  	go_detail(){
		    this.$router.push({name:"Product", params: {goods:this.a}})
		  	}
		  },
		  created(){
		  	
		  }
		}
</script>

<style>
	.pro-item{
		display: flex;
		border: 1px solid #cccccc;
		box-sizing: border-box;
		height:2rem;
		background: #FFFFFF;
		margin: 0.2rem 0;
	}
	.pro-info{flex: 1;font-size: 0.2rem;}
	.pro-info .title{font-size: 0.35rem;color: #000000;font-weight: bolder;}
	.pro-info .price{font-size: 0.25rem;color: #7BC144;margin: 0.08rem 0;}
	.pro-info .sale{color: #CCCCCC;}
	.pro-info .sale label{color: red;}
	
	.pro-img{flex: 2;}
	.pro-img img{width: 100%;height: 100%;}
</style>