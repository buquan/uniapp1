<template>
  <view>
    <!-- <x v-bind="{value, minDate, maxDate}" v-model="value1"></x> -->
    <y @input="onInput" v-model="val" v-bind="{ value: val2 }"></y>
    <view>outval: -> {{ val }}</view>
    <!-- 		<z :info="info">
			<view>{{info.name}}</view>
		</z> -->

    <!--	<view @click="changeZ">
			changeZ info:name{{info.name}}
		</view> -->
  </view>
</template>

<script>
import X from './com/x.vue'
import Y from './com/y.vue'
import Z from './com/z.vue'
export default {
  data() {
		const a = 999;
    const now = +new Date();
    return {
      val: '888',
      val2: '999',
      value1: now,
      value: 0,
      minDate: now + 60 * 60 * 1000,
      maxDate: now + 60 * 24 * 60 * 60 * 1000,
      info: {}
    }
  },
  computed: {
    info1() {
      console.log('info1 computed')
      return this.name + 'qwert';
    }
  },
  mounted() { },
  components: {
    X,
    Y,
    Z
  },
  methods: {
    onInput(e) {
      console.log(e, 'outer');
      // this.val = e + '666';
    },
    changeZ() {
      this.info.name = 'abc'
      this.info = {
        ...this.info
      }
      // this.$forceUpdate();
    }
  }
}
</script>
