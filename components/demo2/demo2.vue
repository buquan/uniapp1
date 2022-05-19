<template>
	<view>
		demo2
	</view>
</template>

<script>
	export default {
		name: "demo2",
		data() {
			return {

			};
		},

		methods: {},
		// 组件是没有页面周期的～
		beforeCreate() {
			console.log('demo2 beforeCreate')
		},
		created() {
			console.log('demo2 created')
		},

		beforeMount() {
			console.log('demo2 beforeMount')
		},
		mounted() {
			console.log('demo2 mounted')
		},
		beforeDestroy() {
			console.log('demo2 beforeDestroy')
		},
		destroyed() {
			console.log('demo2 destroyed')
		}

	}
</script>
