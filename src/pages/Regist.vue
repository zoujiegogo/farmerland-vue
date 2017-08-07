<template>
	<div id="registbox">
		<div class="regist_title">
			<div class="title">会员注册</div>
			<div class="go">
				<i class="iconfont icon-fanhui1"></i>
				<label>立即登录</label>
			</div>
		</div>
		<form method="post">
			<input type="text" data-required="required" id="user" v-model.lazy='user'  placeholder="请输入手机号或用户名"/>
		    <input type="password" required="required" id="pwd" v-model.lazy='pwd' placeholder="请输入密码"/>
		    <input type="password" required="required" id="again_pwd" v-model.lazy='again_pwd' placeholder="请再次输入密码"/>
			<input type="submit" id="btn" value="注册" @click.prevent='regist'/>
		</form>
	</div>
</template>

<script>
  
	export default {
   name: 'registbox',
  data () {
    return {
         user:'',
         pwd:'',
         again_pwd:''
    }
  },
  methods:{
  	 regist(){
  	 	var param={
  	 		"user":this.user,
  	 		"pwd":this.pwd
  	 	}
  	 	if(this.user==''){
  	 		alert('请填写用户名')
  	 		return
  	 	}
  	 	if(this.pwd==''){
  	 		alert('请填写密码')
  	 		return
  	 	}
  	 	if(this.pwd===this.again_pwd){
  	 		console.log(param)
  	 		var _this=this
  	 		$.post('/regist',param,function(data){
  	 			if(data.code==0){
  	 				alert('注册成功')
  	 				//console.log(_this.$router)
  	 	_this.$router.push({name:"index/user", params: {user:_this.user}});
  	 	  
  	 			}
  	 		})
  	 	}else{
  	 		alert("俩次密码不同")
  	 	}
  	 	
  	 }
  },
  updated(){
  	 
  }
 }
</script>

<style>
	#registbox{width: 100%;height: 100%;background: #f5f5f5;overflow: hidden;}
	.regist_title{display: flex;justify-content: space-between;width: 90%;margin: 1.6rem auto 0;height: 1.2rem;line-height: 1.2rem;margin-bottom: 0.2rem;}
	.title{font-weight: bolder;font-size: 0.5rem;}

	.go label{font-size: 0.3rem;color: red;}
	.go i{display: inline-block;width: 0.25rem ;height: 0.25rem;border-radius: 50%;color: #FFFFFF;background: red;line-height: 0.25rem;font-size: 0.16rem;}
	form{width: 90%;margin: 0 auto;}
	form input{width: 90%;height: 0.8rem;margin: 0 auto 0.6rem;border: 0;font-size:0.25rem ;text-indent: 0.2rem;}
	form #btn{height: 1rem;font-size:0.4rem ;color: #FFFFFF;background: #7BC144;letter-spacing: 0.3rem;}
</style>