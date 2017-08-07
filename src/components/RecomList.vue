<template>
	   <div>
	   	<dl class="recom-box" v-for='(ite,index) in list' :key='index'>
			<dt class="img-box" @click='go_detail'>
				<img :src="ite.imgsrc"/>
			</dt>
			<dd class="info-box">
				<span class="info" @click='go_detail'>{{ite.msg}}</span>
				<span class="price"><label>{{ite.price}}</label>元</span>
			</dd>
	    </dl>	
	   </div>
		
</template>

<script>	
 export default {
  name: 'recom-box',
  data () {
    return {
    	list:this.product
    }
  },
  props:["product",'a'],
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
	.recom-box{
		width: 100%;margin: 0 auto;height: 5.6rem;border-bottom: 1px solid #CCCCCC;margin-bottom: 0.2rem;
	  }
	 .recom-box .img-box{
	  	width: 100%;height: 5rem;
	  }
	 .recom-box .img-box img{
	  	width: 100%;height: 100%
	  }
	  .info-box{font-size: 0.25rem;height: 0.6rem;line-height: 0.6rem;}
	  .info-box span{display: inline-block;}
	  .info-box .info{width: 60%;letter-spacing: 0.01rem;text-align: left;float: left;white-space: nowrap;overflow: hidden;}
	  .info-box .price{width: 30%;float: right;}
	  .info-box .price label{color: #7BC144;font-size: 0.4rem;}
	  
</style>