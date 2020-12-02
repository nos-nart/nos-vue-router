<template>
  <main-layout>
    <transition-page>
      <router-view :key="$route.params.slug"/>
    </transition-page>
  </main-layout>
</template>

<script>
import TransitionPage from './transitions/TransitionPage.vue';
import MainLayout from './layout/MainLayout.vue';

export default {
  name: 'App',
  components: {
    TransitionPage,
    MainLayout
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
