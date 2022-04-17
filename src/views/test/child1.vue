<template>
  <div class="container">
    <child2 v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
<script>
import child2 from './child2.vue'

export default {
  components: {
    child2
  },
  model: {
    prop: 'value',
    event: 'input'
  }

}
</script>
<style lang="scss" scoped>
.container {
    display: inline-block;
}
</style>
