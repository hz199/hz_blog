<template>
  <header class="header clearfix">
    <div class="content-logo">
      <div class="title" @click="onclick('/')">{{ $site.title }}</div>
    </div>
    <div class="nav-wrapper">
      <nav class="navs">
        <div v-for="(nav, index) in navs" :key="index">
          <a class="nav" :href="nav.link" @click="handleOver(nav.text)">
            <span>{{ nav.text }}</span>
          </a>
          <ul v-if="nav.items && drapMore">
            <li v-for="aItem in nav.items" :key="aItem.link">
              <a :href="aItem.link" target="_black">{{aItem.text}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: [
    'onclick',
    'navs'
  ],
  data () {
    return {
      drapMore: false
    }
  },
  methods: {
    handleOver (text) {
      if (text === '更多') {
        this.drapMore = !this.drapMore
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  height 64px
  line-height 64px  
}
.content-logo {
  float left
  cursor pointer
  font-weight bold
}
.nav-wrapper {
  float right
}
.clearfix:after {
  clear both
  content ''
  height 0
  line-height 0
  overflow hidden
}
.clearfix {
  zoom 1
}
.navs
  margin 0 auto 0px auto
  text-align center
  > div 
    display inline-block
    position relative
    ul
      height: auto!important;
      box-sizing: border-box;
      max-height: calc(100vh - 2.7rem);
      overflow-y: auto;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #fff;
      padding: .6rem 0;
      border: 1px solid;
      border-color: #ddd #ddd #ccc;
      text-align: left;
      border-radius: .25rem;
      white-space: nowrap;
      margin: 0;
      z-index 2000
      li
        a
          display: block;
          line-height: 1.7rem;
          position: relative;
          border-bottom: none;
          font-weight: 400;
          margin-bottom: 0;
          padding: 0 1.5rem 0 1.25rem;
    
a.nav
  cursor pointer
  margin 0 8px
  display inline-block
  color #2c3e50
  span 
    display inline-block
</style>