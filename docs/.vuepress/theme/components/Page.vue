<template>
  <div class="page">
    <Content />
  </div>
</template>

<script>
export default {
  computed: {
    href: function () {
      let github = `https://github.com`
      let repo = this.$site.themeConfig.repo
      let path = this.$page.path
      let file = path.substring(path.length - 5) === '.html' ? path.substring(0, path.length - 5) + '.md' : path + 'README.md'
      return `${github}/${repo}/edit/master${file}`
    }
  },
  mounted () {
    const bgImage = this.$page.frontmatter.meta[0].bgImage
    document.getElementById('app').style.backgroundImage = `url(${bgImage})`
  }
}
</script>

<style lang="stylus" scoped>
.page {
  position relative
}
</style>
