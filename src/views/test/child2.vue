
<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" v-on="inputListeners">
  </label>

</template>
<script>

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: [String],
      default: null
    }
  },
  computed: {
    inputListeners() {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function() {
            vm.$emit('input', event.target.value)
          },
          focus: function(event) {
            vm.$emit('focus', '哈哈哈，onfocus了')
          },
          change: function(event) {
            vm.$emit('change', event.target.value)
          }
        }
      )
    }
  },
  mounted() {
    console.log(this.$attrs)
    console.log(this.$listeners)
  }
}
</script>
