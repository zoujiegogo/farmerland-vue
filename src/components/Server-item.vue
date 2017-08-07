<template>
	<li class="server-li">
		<div class="server-box">
			<span>{{info.title}}</span>
			<label v-if="bool" >+</label>
			<label v-else>-</label>
		</div>
		<ul class="sec-ul">
		  <li v-for='b in info.info2'>{{b}}</li>
		</ul>
	</li>
</template>

<script>
	 export default {
	  name: 'server-li',
	  data () {
	    return {
	         
	      }
	   },
	   methods:{
	   	 
	  },
	  props:["info","bool"]
	  
	 }
</script>
<style>
	.server-li{
		height: auto;
		font-size: 0.3rem;
		background: #FFFFFF;
	}
	.server-box{
		margin: 0 0.2rem;
		height: 0.3rem;
		line-height: 0.3rem;
	}
	.server-box span{display: inline-block;float: left;}
	.server-box label{float: right;color: #DDDDDD;}
	.sec-ul li{display: none;,text-indent: 1rem;text-align: left;color: #9c9c9c;font-size: 0.2rem;}
</style>