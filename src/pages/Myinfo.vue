<template>
	<div id="myinfo">
		<div class="header_box" key='1'>
		<h1 class="img-box">
			<img src="../assets/logo.png"></img>
		</h1>
		<div class="right">
			<i class="iconfont icon-shouye" @click='goindex'></i>
			<i class="iconfont icon-shouyesantiaoxian" @click='showlist'></i>
		</div>
	  </div>
	  <ul class="list_box" v-show="show">
			<li class="list" v-for='(item,index) in list' :key='index' @click='golist(index)' >{{item}}</li>
	 </ul> 
	 <div class="inof_my">
	    欢迎：{{user}}<br />
	    个人信息：
	 </div>
	   
	</div>
</template>

<script>

	
export default {
  name: 'myinfo',
  data () {
    return {
      user:'',
      show:false,
      list:['首页','粮油','蔬菜','肉类','蛋类','干果'],
      count:1
    }
  },
  methods:{
  	goindex(){
  		this.$router.push({path:'/index/user='+this.user})
  	},
  	showlist(){
  	  this.count++;
  	  if((this.count%2)===0){
  	  	$('.list_box').slideDown(1000,function(){
  	  		this.show=!this.show
  	  	})
  	  }
  	  if((this.count%2)!==0){
  	  	 $('.list_box').slideUp(1000,function(){
  	  	 	this.show=!this.show
  	  	 })
  	  }
  	},
  	golist(val){
  		if(val===0){
  			this.$router.push({path:'/'})
  		}else{
  			this.$router.push({name:'List',params:{type:'type='+this.list[val]}})
  		}
  	}
  },
  created(){
      this.user=this.$route.params.user
  }
  
}
</script>

<style>
	.header_box{
  	 height:1rem;
  	 width:100%;
  	 background: #FFFFFF;
  	}
 
  	.img-box{
  		height: 1rem;
  		float: left;
  		width: 5rem;
  	}
  	.img-box img{
  		width: 100%;
  		height: 100%;
  	}
  	.right{
  		float: right;
  	}
  	.right i{
  		margin-right: 0.4rem;
  		color:#7bc144;
  		font-size: 0.5rem;
  		text-align: center;
  		line-height: 1rem;
  		float:left;
  	}
  	.list_box{width: 100%;height: auto;}
  	.list_box li{height: 0.7rem;color: #FFFFFF;border-bottom: 1px solid #FFFFFF;background: #7BC144;line-height: 0.7rem;letter-spacing: 0.2rem;font-size: 0.33rem;}
</style>