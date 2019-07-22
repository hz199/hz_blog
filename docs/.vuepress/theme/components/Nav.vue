<template>
  <nav class="navs">
    <a class="nav" v-for="(nav, index) in navs" :key="index" :href="nav.link">
      <span>{{ nav.text }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  props: [
    'navs',
    'onclick',
  ],
}
</script>

<style lang="stylus" scoped>
.navs
  margin 0 auto 50px auto
  text-align center

a.nav 
  cursor pointer
  margin 0 8px
  border-bottom none
  img
    width 15px
    height 15px
</style>