<template>
  <view>
    <input type="text" :value="$attrs.value" @input="inputChild" />
    <!-- <view @click="viewClk">testview</view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    // value: {
    // 	type: String,
    // 	default: ''
    // }
  },
  mounted() {
    console.log(this.$attrs, "this.$attrs")
  },
  watch: {
    '$attrs.value': function () {
      console.log(this.$attrs.value, 'watch');
    }
  },
  methods: {
    inputChild(e) {
      console.log(e.detail.value, 'inner')
      this.$emit('input', e.detail.value)
    },
    viewClk() {
      this.$emit('input', '9999999')
    }
  }
}
</script>

<style>
</style>
