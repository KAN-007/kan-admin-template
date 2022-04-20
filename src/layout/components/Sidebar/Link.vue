<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script>
// 判断是链接还是路由
import { isExternal } from '@/utils/validate'
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    to: {
      type: String,
      require: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
