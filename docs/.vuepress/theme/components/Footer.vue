<template>
  <footer class="footer">
    {{footerText || ''}}
    <div style="margin-top:10px;">
      <a class="footer-a" target="_block" href="http://www.beian.miit.gov.cn/">浙ICP备18051710号</a>
    </div>
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
  padding-bottom 40px
  // margin-bottom 40px
  font-family Georgia
  font-style italic
  text-align center
  color #c1866a
}
.footer-a {
  color #c1866a
  
}
.footer-a:hover {
  border none
}
</style>