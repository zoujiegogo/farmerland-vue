<template>
	<div id="loginBox">
		<div class="login_title">
			<div class="title">会员登录</div>
			<div class="go">
				<i class="iconfont icon-fanhui1"></i>
				<label>立即注册</label>
			</div>
		</div>
		<form  action="" method="post">
			<input type="text"  id="user"  placeholder="请输入手机号或用户名" v-model.lazy='user'/>
		    <input type="password"  id="pwd"  placeholder="请输入密码" v-model='pwd'/>
			<input type="submit" id="btn" value="登录" @click.prevent='login'/>
		</form>
	</div>
</template>

<script>
	export default {
      name: 'loginBox',
	  data () {
	    return {
	        user:'',
	        pwd:''
	    }
	  },
  methods:{
  	login(){
  		var para={
  			'user':this.user,
  			'pwd':this.pwd
  		}
  		if(this.user===''){
  			alert('请输入用户名')
  			return
  		}
  		var arr=['test','user','qvb']
  		if(!arr.includes(this.user)){
  			alert('用户名不存在！')
  			return
  		}
  		if(this.pwd===''){
  			alert('请输密码')
  			return
  		}
  		var _this = this;
  		$.post('/login',para,function(data){
  			if(data.code===0){
  			//_this.$router.push({params: 'index'});
  	 _this.$router.push({name:"index/user", params: {user:_this.user}});
  			}
  		})
  	}
  },
  created(){
  	 
  }
 }
</script>

<style>
	#loginBox{width: 100%;height: 100%;background: #f5f5f5;overflow: hidden;}
	.login_title{display: flex;justify-content: space-between;width: 90%;margin: 1.6rem auto 0;height: 1.2rem;line-height: 1.2rem;margin-bottom: 0.2rem;}
	.title{font-weight: bolder;font-size: 0.5rem;}

	.go label{font-size: 0.3rem;color: red;}
	.go i{display: inline-block;width: 0.25rem ;height: 0.25rem;border-radius: 50%;color: #FFFFFF;background: red;line-height: 0.25rem;font-size: 0.16rem;}
	form{width: 90%;margin: 0 auto;}
	form input{width: 90%;height: 0.8rem;margin: 0 auto 0.6rem;border: 0;font-size:0.25rem ;text-indent: 0.2rem;}
	form #btn{height: 1rem;font-size:0.4rem ;color: #FFFFFF;background: #7BC144;letter-spacing: 0.3rem;}
</style>