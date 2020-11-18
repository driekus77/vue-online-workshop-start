<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <HelloWorld msg="Your component goes here..." />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  background-color: rgba(2, 21, 49, 0.95);
  color: #FFF;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
