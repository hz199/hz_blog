
<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import "gitalk/dist/gitalk.css"
import Gitalk from "gitalk"

export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {
    const commentConfig = {
      clientID: "8ef50c7652aa5c5404ca",
      clientSecret: "bade3c08f5f288d7984c9be4d411cf0fda8997f9",
      repo: "relearningFE",
      owner: "hz199",
      admin: ["hz199"],
      id: location.pathname,
      distractionFreeMode: false
    };
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  }
}
</script>
