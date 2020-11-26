<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
    </div>
    <transition-page>
      <router-view/>
    </transition-page>
  </div>
</template>

<script>
import TransitionPage from './transitions/TransitionPage.vue';

export default {
  name: 'App',
  components: {
    TransitionPage,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
