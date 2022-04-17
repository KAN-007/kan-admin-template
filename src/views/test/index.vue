<template>
  <div>
    <child1 v-model="num" label="基础输入组件" placeholder="请输入" @input="input" @focus="focus" @change="change" />
    <h3>{{ num }}</h3>
  </div>
</template>
<script>
import child1 from './child1.vue'

export default {
  components: {
    child1
  },
  data() {
    return {
      num: 123
    }
  },
  methods: {
    input(val) {
      console.log('input', val)
    },
    focus(e) {
      console.log('focus', e)
    },
    change(e) {
      console.log(e)
    }
  }
}
</script>
