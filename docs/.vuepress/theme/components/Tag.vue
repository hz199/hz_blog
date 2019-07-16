<template>
  <div class="tags">
    <div class="tag" v-for="(tag, index) in tags" :key="index" @click="onclick(tag)"><a>{{ tag }}</a></div>
  </div>
</template>

<script>
export default {
  props: [
    'tags',
    'onclick',
  ],
}
</script>

<style lang="stylus" scoped>
.tags
  margin 50px 0 50px 0
  overflow auto
  
.tag
  float left
  cursor pointer
  margin 8px 20px 8px 0
  padding 4px 10px 4px 10px
  font-size 12px
  border-radius 3px
  background-color lighten($accentColor, 90%)
  transition background-color 0.2s ease
  &:hover
    background-color lighten($accentColor, 80%)
  a
    border-bottom none
</style>
  