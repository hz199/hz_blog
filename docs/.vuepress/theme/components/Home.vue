<template>
  <!-- <div class="home">
    <div class="item" v-for="(item, index) in list" :key="index">
      <router-link class="title" :to="item.path">{{ item.title }}</router-link>
      <div class="tag">{{ item.tag }}</div>
    </div>
  </div> -->
  <div class="home">
    <div class="item" v-for="(item, index) in list" :key="index">
      <!-- <router-link class="title" :to="item.path">{{ item.title }}</router-link>
      <div class="tag">{{ item.tag }}</div> -->
      <div class="ribbonHead">
        <h4>{{ item.title }}</h4>
        <div class="ribbonBack"></div>
      </div>

      <img :src="item.bgImage" alt="">
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