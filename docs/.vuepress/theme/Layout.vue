<template>
  <div class="layout">
    <Header :navs="navs" :onclick="onClick" />
    <SearchBox v-if="$site.themeConfig.search" style="margin: 20px 0;" />
    <main>
      <Home v-if="$page.path === '/'" :list="list" :tags="tags" :onClick="onClick" />
      <Page v-else />
    </main>
    <Footer :footerText="footerText" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
import Tag from "./components/Tag";
import Home from "./components/Home";
import Page from "./components/Page";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Nav,
    SearchBox,
    Tag,
    Home,
    Page,
    Footer
  },
  data: function() {
    return {
      navs: [],
      list: [],
      footerText: ""
    };
  },
  computed: {
    tags: function() {
      let tags = [];
      let flag = {};
      for (let i = 0; i < this.$site.pages.length; i++) {
        let page = this.$site.pages[i];
        let tag = page.frontmatter.tag;
        if (page.path !== "/" && !flag[tag]) {
          flag[tag] = true;
          tags.push({
            tag,
            color: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
          });
        }
      }
      return tags;
    }
  },
  mounted: function() {
    this.list = [];
    for (let i = 0; i < this.$site.pages.length; i++) {
      let page = this.$site.pages[i];
      if (page.path !== "/" && page.frontmatter.tag !== 'Home') {
        let tag = decodeURI(page.path.split("/")[1]);
        this.list.push({
          tag: tag,
          title: page.title,
          path: page.path,
          bgImage: page.frontmatter.meta
            ? page.frontmatter.meta[0].bgImage
            : ""
        });
      }

      if (page.frontmatter.footer) {
        this.footerText = page.frontmatter.footer;
      }
    }
    this.navs = this.$site.themeConfig.nav;
  },
  methods: {
    onClick: function(arg) {
      this.list = [];
      for (let i = 0; i < this.$site.pages.length; i++) {
        let page = this.$site.pages[i];
        if (page.path !== "/") {
          let tag = page.frontmatter.tag;
          if (arg === "/" && tag !== 'Home') {
            this.list.push({
              tag: tag,
              title: page.title,
              path: page.path,
              bgImage: page.frontmatter.meta[0]
                ? page.frontmatter.meta[0].bgImage
                : ""
            });
          } else if (arg === tag) {
            this.list.push({
              tag: arg,
              title: page.title,
              path: page.path,
              bgImage: page.frontmatter.meta[0]
                ? page.frontmatter.meta[0].bgImage
                : ""
            });
          }
        }
      }

      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.layout {
  max-width: 966px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  background: #c7edcc;

  // border-radius 30px
  div {
    box-sizing: border-box;
  }
}

@media screen and (max-width: 966px) {
  .layout {
    max-width: 100%;
    min-width: 100%;
  }
}
</style>