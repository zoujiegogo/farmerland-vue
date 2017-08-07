<template>
	<div class="banner">
		<ul class="box">
			<transition name="image">
				<li class="imgbox" v-for='(imgsrc,index) in banner' :key='index' v-if='index===num' ><img :src="imgsrc"/></li>
			</transition >
		</ul>
	    <div class="bullet">
	    	<span v-for='(ite,i) in banner.length' :class="{'bg':i===num}" @click='change(i)' :key='i'></span>
	    </div>
	</div>
	
</template>

<script>
	export default {
	  name: 'banner',
	  data () {
	    return {
	         num:0
	     }
	  },
	  props:['banner'],
	  methods:{
	  	autoPlay(){
	  	 	  this.num++;
	  	 	  if(this.num==this.banner.length){
	  	 	  	  this.num = 0
	  	 	  	  return
	  	 	  }
	  	 }, 
	  	play(){
	  	 	setInterval(this.autoPlay,3000)
	  	},
	  	change(i){
	  	 	  this.num = i
	  	 }
	  },
	  computed:{
	  	
	  },
	  created(){
	  	 this.play()
	  }
		}
</script>

<style>
	.banner{
		width: 100%;height: 100%;position:relative;
	}
	.box{
		width: 100%;height: 100%;overflow: hidden;position:relative;
	}
	.imgbox{
		 width: 100%;height: 100%;float: left;position: absolute;
	}
	.imgbox img{
		width: 100%;height: 100%;float: left;
	}
	.bullet{
	   position: absolute;bottom: 0.2rem;text-align: center;
	   height: 0.2rem;width: 90%;left: 5% 
	}
	.bullet span{display: inline-block; width: 0.2rem;height: 0.2rem;border-radius: 50%;background: #FFFFFF;margin: 0 0.1rem;line-height: 0.2rem;float: left;}
	.bullet .bg{background: red;}
	.image-enter-active,.image-leave-active{
		transition:all 1s ease
	}
	.image-enter-active{
		transform: translateX(0%);
	}
	.image-leave-active{
		transform: translateX(-100%);
	}
	.image-enter{
		transform: translateX(100%);
	}
	.image-leave{
		transform: translateX(0%);
	}
</style>