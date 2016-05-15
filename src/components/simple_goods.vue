<template>
	<div class="simple-goods">
		<div class="goods-img"><img class="img" :src="goods.img" /></div>
		<div class="goods-name">苹果iPhone6苹果iPhone6苹果iPhone6苹果iPhone6苹果iPhone6苹果iPhone6</div>
	</div>
</template>

<style lang="sass">
	@import "../sass/vars";

	.simple-goods{
		@include pr(padding-left, 30);
		@include pr(padding-right, 30);
		background: #fff;

		.goods-img{
			@include pr(width, 750);
			@include pr(height, 330);
			@include pr(line-height, 330);
			text-align: center;
			font-size:0px;
			margin: 0 auto;
		}

		.img{
			@include pr(max-height, 330);
			@include pr(max-width, 330);
			vertical-align: middle;
		}

		.goods-name{
			font-size: 17px;
			color: #373737;
			@include pr(margin-top, 18);
			@include text-overflow();

		}
	}
</style>

<script>
	export default {
		props: {
			goods: {
				default: {}
			}
		}
	}	
</script>