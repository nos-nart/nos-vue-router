<template>
<div>
  <nav class="container m-auto flex justify-between py-4">
    <h1 class="logo text-2xl font-bold text-green-500 ">
      <router-link to="/" exact>Vue router</router-link>
    </h1>
    <ul class="flex items-center text-md cursor-pointer text-sm">
      <li class="mx-3">
        <router-link to="/hanoi" exact class="route" active-class="route-active">Hà Nội</router-link>
      </li>
      <li class="mx-3">
        <router-link to="/hue" class="route" active-class="route-active">Huế</router-link>
      </li>
      <li class="mx-3">
        <router-link to="/saigon" class="route" active-class="route-active">Sài Gòn</router-link>
      </li>
      <div class="uppercase text-gray-900 cursor-pointer">
        <a href="https://github.com/nos-nart/nos-vue-router" target="_blank" rel="noopener noreferrer">
          <IconGithub :width="30" :height="30"/>
        </a>
      </div>
    </ul>
  </nav>
  <main class="container m-auto">
    <slot></slot>
  </main>
</div>
</template>

<script>
import IconGithub from "@/components/icons/IconGithub.vue";

export default {
  components: {
    IconGithub,
  },
};
</script>

<style lang="scss" scoped>
  .route {
    position: relative;
    transition: all 0.2 linear;

    &:before {
      position: absolute;
      content: "";
      left: 0;
      bottom: -5px;
      height: 3px;
      width: 0;
      background: #48bb78;
    }

    &-active {
      color: #48bb78;

      &:before {
        width: 100%;
      }
    }
  }
</style>
