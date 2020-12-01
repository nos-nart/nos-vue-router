<template>
  <div class="my-6 flex">
    <div class="mr-12" :style="{'width': '550px'}">
      <div class="flex flex-col">
        <div>
          <p class="text-2xl font-bold">{{ destination.name }}</p>
          <p class="text-sm text-gray-500 mt-4">{{ destination.description }}</p>
        </div>
        <div class="mt-6">
          <img class="object-cover" :src="require(`@/assets/${destination.image}`)" alt="">
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div v-for="experience in destination.experiences" :key="experience.slug">
          <!-- <router-link> -->
            <div class="h-40 overflow-hidden">
              <img class="object-cover" :src="require(`@/assets/${experience.image}`)" alt="">
            </div>
            <p class="font-bold hover:text-green-500">{{experience.name}}</p>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'destination',
  components: {},
  data() {
    return {
    }
  },
  props: {
    slug: {
      type: String,
      // required: true
    }
  },
  computed: {
    destination: function() {
      return store.destinations.find(s => s.slug === this.slug)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>