<template>
  <div>
    <a class="button" :href="href" target="_blank" v-if="$site.themeConfig.editLinks">{{ $site.themeConfig.editLinkText }}</a>

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
}
</script>

<style lang="stylus" scoped>
a.button
  cursor pointer
  color #999
  font-size 14px
  border-bottom none
</style>
