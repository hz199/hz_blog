<template>
  <transition-group name="list" tag="div" appear class="home">
    <div class="item" key="item-1">
      <ul class="clearfix">
        <li style="background: #333333; color: #333; color: #fff" class="tag" @click="onClick('/')">
          <i style="border-right-color: #333333"></i>
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
    <div class="item item--shadow" 
      v-for="(item, index) in list" :key="'item'+ index"
    >
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
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@require './styles/home.styl';
.item--shadow {
  box-shadow: -10px -10px 20px #FFF, 10px 10px 20px #BABECC;
  padding 5px
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>