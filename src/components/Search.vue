<template>
	<div class="searchbox">
		<input type="text" v-model.lazy='search' placeholder='请输入搜索关键字' autofocus />
		<button class="search iconfont icon-sousuo" @click='found'></button>
	</div>
</template>

<script>
	export default {
  name: 'searchbox',
  data () {
    return {
        search:''
    }
  },
  methods:{
  	found(){
  		var param ={'search':this.search},_this=this;
  		if(this.search!==''){
  			$.post('/regist',param,function(data){
  				if(data.code===0){
  				_this.$router.push({name:"List", params: {type:'type='+_this.search}})
  				   }
  			})
  		}
  	}
  }
}
</script>

<style>
	.searchbox{width: 90%;margin: 0.2rem auto;border: 1px solid #333333;height: 0.8rem;display: flex;font-size: 0.3rem;line-height: 0.8rem;background: #f0f0f0;}
	.searchbox input{height: 100%;width: 2rem;flex: 4;border: 0;padding: 0 0.1rem;}
	.search{border: 0;}
	.searchbox .search{flex:1;font-size:0.6rem;text-align: center;background-color: #f0f0f0;}
</style>