<template>
  <div class="my-12">
    <p>Top destinations in <span class="font-bold text-green-500">Vietnam</span></p>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="destination in destinations" :key="destination.id">
        <image class="w-48" :src="require(`@/assets/${destination.image}`)" alt=""/>
        <router-link :to="destination.slug">
          <p class="font-bold hover:text-green-500">{{destination.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js';
export default {
  name: "home",
  components: {},
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style lang="scss" scoped>

</style>