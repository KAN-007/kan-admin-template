<template>
  <div>
    <h1>控制台</h1>
    <button @click="show">show</button>
  </div>

</template>
<script>
import NProgress from 'nprogress' // progress bar

export default {
  methods: {
    show() {
      NProgress.start()
    }
  }
}
</script>

