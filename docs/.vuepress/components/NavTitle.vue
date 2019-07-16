<template>
  <div class="nav-wrapper">
    <h2>{{title}}</h2>
    <h5 v-html="date"></h5>
  </div>
</template>
<script>
export default {
  name: 'NavTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.nav-wrapper {
  text-align: center;
  border: none;
}
.nav-wrapper > h2 {
  border: none;
  margin-bottom: 0;
}
.nav-wrapper > h5 {
  margin-top: 5px;
  border: none;
  opacity: 0.7;
}
</style>
