<template>
	<div class="index">
	<HeaderTop></HeaderTop>
	<div id="bannerbox">
		<Banner :banner='imgs'></Banner>
	</div>
	<div id="search">
	<Search></Search>
	</div>
	<div id="productbox">
		<div id="pro-title">
			 <h1>新品推荐</h1>
		  <span>NEWS PRODUCTS</span>
		</div>
	  <Product></Product>
	</div>
	<div id="recom">
	      <Recom></Recom>
	</div>
	<div class="fooer">
	   <Server></Server>
	   <div class="bootom">
	     <p> 农田在线 备案号:冀C20160000</p>
	     <p>版权归属:冀C20160000   技术支持：LZ </p>
	   </div>
	</div>
	</div>
	
</template>

<script>
	import HeaderTop from '../components/Head';
	import Server from '../components/Server';
	import Product from '../components/Product-list';
	import Search from '../components/Search';
	import Banner from '../components/Banner';
	import Recom from '../components/Recommend';
 export default {
  name: 'index',
  data () {
    return {
    	  mark:0,
          imgs:['../../static/img/banner0.jpg',
                "../../static/img/banner1.jpg",
                '../../static/img/banner2.jpg']
      }
   },
  components:{
  	HeaderTop,Server,Product,Search,Banner,Recom
  },
  created(){
  	 $.cookie.json=true;
  	//console.log(this.$route.params.user)
  	if(this.$route.params.user){
  	  $.cookie('user',this.$route.params.user,{expires:1})
  	}
  
  	
  }
 }
</script>

<style>
	.index{height: 100%;width: 100%;background: #f8f8f8;}
	.fooer{background: #FFFFFF;}
	.bootom{color:#333333;font-size: 0.2rem;}
	#pro-title{height: 1rem;line-height:1rem;width: 90%;font-size: 0.6rem;text-align: left;display: flex;justify-content: flex-start;align-items: center;margin: 0 auto;}
	#pro-title h1{float: left;}
	#pro-title span{display:block;color: #42B983;font-size: 0.4rem;height: 0.6rem;line-height: 0.6rem;border-bottom: 1px solid #42B983;margin-left: 0.2rem;}
	#search{height: 1.2rem;overflow: hidden;background: #FFFFFF;}
	#bannerbox{width: 100%;height: 3rem;}
	#recom{width: 90%;margin: 0 auto;background: #FFFFFF;padding: 0.2rem 0;}
</style>