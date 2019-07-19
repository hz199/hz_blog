<template>
  <footer class="footer">
    {{footerText || ''}}
  </footer>
</template>

<script>
export default {
 props: [
   'footerText'
 ]
}
</script>

<style lang="stylus" scoped>
.footer {
  margin-top 140px
  margin-bottom 40px
  font-family Georgia
  font-style italic
  text-align center
  color #c1866a
}
</style>