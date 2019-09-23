<template>
  <div class="page">

    <h2 style="border-bottom: none; margin-bottom: 0;display:flex;">
      <p style="padding: 0; margin:0; flex:4">{{$page.title}}</p>
      <div style="flex:1;">
        <ul>
          <li :style="`background: ${tagColor}; color: #fff`" class="tag">
            <i :style="`border-right-color: ${tagColor}`"></i>
            <span>
              {{$page.frontmatter.tag}}
            </span>
          </li>
        </ul>
      </div>
    </h2>
    <Content />
  </div>
</template>

<script>
import Tags from './Tag'

export default {
  components: {
    Tags
  },
  data () {
    return {
      tagColor: ''
    }
  },
  computed: {
    href: function () {
      let github = `https://github.com`
      let repo = this.$site.themeConfig.repo
      let path = this.$page.path
      let file = path.substring(path.length - 5) === '.html' ? path.substring(0, path.length - 5) + '.md' : path + 'README.md'
      return `${github}/${repo}/edit/master${file}`
    }
  },
  methods: {
    randomColor () {
      const r = Math.floor(Math.random() * 255)
      const g = Math.floor(Math.random() * 255)
      const b = Math.floor(Math.random() * 255)

      return `rgb(${r}, ${g}, ${b})`
    }
  },
  mounted () {
    if (this.$page.frontmatter.tag !== 'Home') {
      const bgImage = this.$page.frontmatter.meta[0].bgImage
      document.getElementById('app').style.backgroundImage = `url(${bgImage})`
    }

    this.tagColor = this.randomColor()
  }
}
</script>

<style lang="stylus" scoped>
.page {
  position relative
}

  ul {
    margin 0
    padding 0
    text-align right 
  }
  .tag {
    padding-left: 12px
    padding-right: 10px
  }
  .tag:after {
    content: " ";
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.3);
    position: absolute;
    top: 10px;
    left: -1px;
  }
  li {
    display inline-block
    padding: 5px 8px
    position: relative
    margin: 5px 15px
    font-size: 12px
    line-height: 14px
    color: #fefefe
    // transform rotate(-90deg)
    background: green
    border-radius: 0 5px 5px 0
    span {
      display inline-block
    }
    i {
      position: absolute;
      top: -0px
      left: -30px
      right: 100%;
      font-size: 0;
      line-height: 0;
      border: 12px solid transparent;
      border-right-color: green;
    }
  }
</style>
