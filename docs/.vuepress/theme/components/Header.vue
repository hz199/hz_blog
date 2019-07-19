<template>
  <header class="header">
    <div class="content">
      <div class="title" @click="onclick('/')">{{ $site.title }}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: [
    'onclick',
  ],
}
</script>

<style lang="stylus" scoped>
.header {
  height 64px
  line-height 64px  
}
</style>