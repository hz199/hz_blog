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
.header
  width 100%
  height $headerHeight
  line-height $headerHeight
.content 
  width $contentWidth
  margin 0 auto

</style>