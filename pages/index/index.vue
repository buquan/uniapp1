<template>
  <view>
    <u-button color="red" text="按钮"></u-button>
    <button type="default" @click="jump">跳转</button>
    <demo2></demo2>
  </view>
</template>

<script>
// 以下是wx mp 打印顺序 （注意：小程序和浏览器端打印顺序不一样！！）
// App Launch
// App.vue:7 App Show
// index.vue:39 index beforeCreate
// index.vue:42 index created
// index.vue:45 index beforeMount
// demo2.vue:19 demo2 beforeCreate
// demo2.vue:22 demo2 created
// demo2.vue:26 demo2 beforeMount
// index.vue:24 index onLoad
// index.vue:27 index onShow
// demo2.vue:29 demo2 mounted
// index.vue:48 index mounted
// index.vue:30 index onReady
export default {
  name: "index",
  data() {
    return {

    };
  },
  methods: {
    jump() {
      uni.redirectTo({
        url: '../../pages/log/log'
      })
    }
  },
  onLoad() {
    console.log('index onLoad')
  },
  onShow() {
    console.log('index onShow')
  },
  onReady() {
    console.log('index onReady')
  },
  onHide() {
    console.log('index onHide')
  },
  onUnload() {
    console.log('index onUnload')
  },
  beforeCreate() {
    console.log('index beforeCreate')
  },
  created() {
    console.log('index created')
  },
  beforeMount() {
    console.log('index beforeMount')
  },
  mounted() {
    console.log('index mounted')
  },
  beforeDestroy() {
    console.log('index beforeDestroy')
  },
  destroyed() {
    console.log('index destroyed')
  },

}
</script>
