<template>
  <div class="home">
    <div class="item" v-for="(item, index) in list" :key="index">
      <router-link class="title" :to="item.path">{{ item.title }}</router-link>
      <div class="tag">{{ item.tag }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'list',
  ],
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.item
  padding 30px 0 30px 0
  font-size 20px

.title
  display block
  
.tag 
  display inline-block
  margin 20px 0 0 0
  border-top 1px solid $borderColor
  padding 10px 0 0 0
  color #999
  font-size 12px

a
  color $textColor
  transition color 0.2s ease
  border-bottom none
  &:hover
    color $accentColor
</style>