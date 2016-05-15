<template>
	<div class="tab-bd">
		<goods v-for="item in goodsList" :goods="item"></goods>
	</div>
	<div class="tab-bar"></div>
	
</template>

<style lang="sass">
	@import "../sass/vars";

	.tab-bd{
		position: absolute;
		top:0px;
		left: 0px;
		right:0px;
		overflow: auto;
		-webkit-overflow-scrolling:touch;
		@include pr(bottom, 100);

	}

	.tab-bar{
		position:absolute;
		bottom:0px;
		left: 0px;
		right: 0px;
		@include pr(height, 100);
		border-top :1px solid #b2b2b2
	}
</style>

<script>
	import  goods from "components/simple_goods.vue"
	export default{
		data () {
			return {
				goodsList: [{
					img: 'http://wdwd-prod.wdwdcdn.com/57328484e326b.jpg'
				}]
			}
		},
		components:{
			goods
		},
	}	
</script>