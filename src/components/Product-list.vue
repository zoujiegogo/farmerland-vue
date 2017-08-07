<template>
	<ul class="pro-list">
	   <item :info="item" v-for='(item,index) in product' :key="index" :a='index'></item>
	</ul>
</template>

<script>
import Proitem from "./Product-item";
  export default {
	  name: 'pro-list',
	  data () {
	    return {
	        product:[
	          {"imgsrc":"../../static/img/product0.jpg","title":'印耕农业——原蜜荆花蜜','price':'58.00','sale':0},
	          {"imgsrc":"../../static/img/product1.jpg","title":'印耕农业——原蜜荆花蜜','price':'68.00','sale':1}, 
	          {"imgsrc":"../../static/img/product2.jpg","title":'印耕农业——原蜜荆花蜜','price':'56.00','sale':2}
	        ]
	     }
	  },
	  components:{
	  	'item':Proitem
	  },
	  methods:{
	  	 getProduct(){ }
	  },
	  created(){
	  	   this.getProduct()
	  }
	  
	}
</script>

<style>
	.pro-list{width: 90%;margin: 0 auto;}
</style>