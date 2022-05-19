<template>
	<view>
		<!-- <slot></slot> -->
		<view>z:::::{{info.name}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		watch: {
			info: {
				deep: true,
				handler: function(newVal) {
					console.log(2345678)
					this.$forceUpdate();
				}
			}
		},
	}
</script>

<style>
</style>
