<template>
  <div class="home">
    <div class="item">
      哈哈哈
    </div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <!-- <div class="tag">{{ item.tag }}</div> -->
      <router-link class="title" :to="item.path">
        <div class="ribbonHead">
          <h4>{{ item.title }}</h4>
          <div class="ribbonBack"></div>
        </div>

        <img :src="item.bgImage" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'list',
  ]
}
</script>

<style lang="stylus" scoped>
@require './styles/home.styl';
</style>