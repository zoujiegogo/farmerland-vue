<template>
	<div class="header-box">
		<div class="header">
		<h1 class="img-box">
			<img src="../assets/logo.png"></img>
		</h1>
		<div class="right">
			<i class="iconfont icon-wode" @click='myinfo'></i>
			<i class="iconfont icon-shouyesantiaoxian" @click='showlist'></i>
		</div>
		</div>
			<ul class="list_box" v-show="show">
				<li class="list" v-for='(item,index) in list' :key='index' @click='golist(index)' >{{item}}</li>
			</ul>
	</div>
</template>

<script>
export default {
  name: 'header-box',
  data () {
    return {
         bool:false,
         show:false,
         list:['首页','粮油','蔬菜','肉类','蛋类','干果'],
         count:1
    }
  },
  methods:{
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
  	myinfo(){
  		 if(this.bool){
  		   this.$router.push({name:'Info',params:{user:$.cookie('user')}})
  		 }else{
  		 	if(confirm('是否去注册或登录')){
  		 		this.$router.push({path:'/login'})
  		 	}
  		 }
  	},
  	golist(val){
  		if(val===0){
  			console.log(11)
  			this.$router.push({path:'/'})
  		}else{console.log(22)
  			this.$router.push({name:'List',params:{type:'type='+this.list[val]}})
  		}
  	}
  },
  created(){
  	 //console.log($.cookie('user'))
  	 if($.cookie('user')){
  	 	this.bool=true
  	 }
  }
 }
</script>
  
<style>
	.header-box{
  	 height:auto;
  	 width:100%;
  	 background: #FFFFFF;
  	}
  	.header{height: 1rem;width: 100%;}
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