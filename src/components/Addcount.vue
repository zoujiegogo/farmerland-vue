<template>
	<div class="addcount">
		<input type="button" value="-" @click='sub'/>
		<input type="text" id="count" :value="value" @input="changeCount" />
		<input type="button" value="+" @click='add'/>
	</div>
</template>

<script>
	export default{
		name:'addcount',
		data(){
			return {
				
			}
		},
		props:['value'],
		methods:{
			sub(){
				this.$emit('sub')
			},
			add(){
				this.$emit('add')
			},
			changeCount(event){
				this.$emit('input',event.target.value)
			}
			
		}
	}
</script>

<style>
	.addcount{width: 100%;height: 100%;text-align: center;line-height: 0.4rem;}
	.addcount input{margin-top:0.11rem;width: 0.5rem;height: 0.5rem;align-content: center;float: left;}
    .addcount input:nth-child(2){text-align: center;width: 0.7rem;box-sizing: border-box;border: 1px solid #000000;}
</style>