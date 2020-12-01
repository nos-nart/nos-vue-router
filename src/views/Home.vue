<template>
  <div class="my-6">
    <div>
      <p class="text-2xl font-bold">Khám phá Việt Nam</p>
      <p class="text-gray-500">Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
    </div>
    <div class="grid grid-cols-5 gap-4 mt-6">
      <div v-for="destination in destinations" :key="destination.id">
        <router-link :to="destination.slug">
          <div class="h-40 overflow-hidden">
            <img class="object-cover" :src="require(`@/assets/${destination.image}`)" alt="">
          </div>
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
  components: {
  },
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style lang="scss" scoped>

</style>