<template>
	<view>
		<u-datetime-picker
		        :show="show"
		        v-model="$attrs.value"
		        :minDate= "$attrs.minDate"
		        :maxDate= "$attrs.maxDate"
		        mode="datetime"
				onChange="change"
				@confirm="regionConfirm"
		></u-datetime-picker>
		<u-button @click="show = true">dakai</u-button>
	</view>
</template>

<script>
	export default {
		data() {
				return {
					  show: false,
				};
		},
		mounted() {
			console.log(this.$attrs, 'this.$attrs')
		},
		methods: {
			change(e) {
				console.log(e, 'e')
			
			},
			regionConfirm(e) {
				console.log(e, 123456)
				this.show = false;
				// this.value1 = uni.$u.timeFormat(
				//   e.value,
				//   "yyyy-mm-dd hh:MM:ss"
				// );
			}
		}
	}
</script>

<style>
</style>