<template>
  <transition-group name="list" tag="div" appear class="home">
    <div class="item" key="item-1">
      <ul class="clearfix">
        <li style="background: #fff; color: #333" class="tag" @click="onClick('/')">
          <i style="border-right-color: #fff"></i>
          <span>
            全部
          </span>
        </li>
        <li :style="`background: ${tag.color}`" class="tag" v-for="(tag, index) in tags" :key="index" @click="onClick(tag.tag)">
          <i :style="`border-right-color: ${tag.color}`"></i>
          <span>
            {{ tag.tag }}
          </span>
        </li>
      </ul>
    </div>
    <div class="item" v-for="(item, index) in list" :key="'item'+ index">
      <!-- <div class="tag">{{ item.tag }}</div> -->
      <router-link class="title" :to="item.path">
        <div class="ribbonHead">
          <h4>{{ item.title }}</h4>
          <div class="ribbonBack"></div>
        </div>

        <img class="item-iamge" :src="item.bgImage" alt="">
      </router-link>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: [
    'list',
    'onClick',
    'tags'
  ],
  mounted () {
    document.getElementById('app').style.backgroundImage = ''
  }
}
</script>

<style lang="stylus" scoped>
@require './styles/home.styl';
.list-item {
  // display: inline-block;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>