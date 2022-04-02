<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import 'isomorphic-fetch';
import Card from './Card';

export default {
  name: 'App',
  components: {
    Card,
  },
};
</script>

<style>
html,
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
