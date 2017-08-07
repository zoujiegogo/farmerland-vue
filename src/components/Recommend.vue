<template>
	<div class="recomm">
	   <!--<ul class="nav">
	      <li v-for='(ite,i) in hot' :key='i' :class="{'bg':i===page}" @click='change(i)'>{{ite}}</li>
	   </ul>-->
	   <ul id="pagination"></ul>
	   <div class="swiper-container">
		    <div class="swiper-wrapper">
		       <List :product="info" class='swiper-slide' v-for='(ite,n) in hot' :key='n' :a='n'></List>
		       </div>
		     </div>
	   <!--<transition appear name="fade" mode="out-in">
		   
	   </transition>-->
	  
	</div>
</template>

<script>
	import List from './RecomList';
	export default { 
	  name: 'recomm',
	  data () {
	    return {
	    	page:0,
	    	hot:["热销","推荐","新品"],
	    	info:[
	    	  {imgsrc:"../../static/img/swiper0.jpg",msg:"仙鸣园鹅蛋  农家放养  新鲜草鹅蛋 十枚装  包邮",price:"88.00"},
	    	  {imgsrc:"../../static/img/swiper1.jpg",msg:"仙鸣园鹅蛋  农家放养 ",price:"98.00"},
	    	  {imgsrc:"../../static/img/swiper2.jpg",msg:"仙鸣园鹅蛋  农家放养  新鲜草鹅蛋 十枚装  包邮",price:"108.00"}
	    	    ]
	     }
	  },
	  methods:{
	  	change(i){
	  		this.page=i
	  	}
	  },
	  mounted(){  
	  	var mySwiper = new Swiper ('.swiper-container', {  //swiper 切换 放到mounted钩子里面
		    direction: 'horizontal',
		    speed:1000,
		   
		    pagination: '#pagination',  
		    bulletClass : 'swiper_bullet',
		    bulletActiveClass : 'swiper_active',
		    paginationClickable: true,
		    paginationBulletRender: function(swiper, index, className) {
		    	 var arr = ["热销","推荐","新品"]
		      return '<li class="' + className + '">' + arr[index] + '</li>';
		  } ,
		     lazyLoading:true
		     //lazyLoadingInPrevNext:true
		  }) 
	  },
	  components:{
	    	List
	    }
	  }
</script>

<style>
	   .recomm #pagination{
			display: flex;
			justify-content: space-around;
			height: 0.8rem;
			margin-bottom: 0.2rem;
		}
	   .recomm #pagination	.swiper_bullet{
	   	    display: inline-block;
			height: 0.8rem;
			box-sizing: border-box;
			text-align: center;
			font-size: 0.3rem;
			line-height: 0.8rem;
			background: #E8E8E8;
			width: 2rem;
		}
	   .recomm #pagination .swiper_active{
			    background: none;
                color: #FFFFFF;
                background-color: #7BC144;
		}
	
	/*.nav{width: 90%;margin: 0 auto;display: flex;font-size:0.3rem;color: #333333;justify-content: space-around;margin-bottom:0.2rem ;}
	.nav li{background: #dcdcdc;width: 32%;height: 0.6rem;line-height: 0.6rem;}
	.recomm .nav .bg{color: #FFFFFF;background: #7bc144;}*/
	

	
/*	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}*/
</style>