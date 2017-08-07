<template>
	<ul class="server">
		<Item :info="ite" v-for="(ite,idx) in info" :key='idx' :bool='bool'></Item>
	</ul>
</template>

<script>
	import ServerItem from './Server-item';
	export default {
	  name: 'server',
	  data () {
	    return {
	        bool:true,
	        info:[
	           {"title":'服务保障',"info2":["常见问题","帮助中心"]},
	           {"title":'购物指南',"info2":["购物流程","电话订购","会员注册"]},
	           {"title":'支付方式',"info2":["微信支付","支付宝支付"]},
	           {"title":'配送方式',"info2":["包邮政策","配送方式",'发货时间']},
	           {"title":'售后服务',"info2":["质量保证","退货政策",'退货流程','退款说明']}
	          ]
	     }
	  },
	  methods:{
	  	 change(){
	  	 	 this.bool = !this.bool
	  	 }
	  },
	  components:{
	  	"Item":ServerItem
	  }
	}
	
</script>

<style>
	.server{width: 90%;margin: 0 auto;background: #FFFFFF;}
</style>