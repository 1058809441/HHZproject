<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgb(17, 132, 248);
}
#app {
  color: black;
}

/* router-link标签默认类名 */
.router-link-active {
  text-decoration: none;
}a{
  text-decoration: none;
}
</style>
