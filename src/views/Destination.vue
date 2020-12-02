<template>
  <div class="my-6">
    <div class="flex justify-between">
      <p class="text-2xl font-bold">{{ destination.name }}</p>
      <Goback />
    </div>
    <p class="text-sm text-gray-500 mt-4">{{ destination.description }}</p>
    <p class="mt-6 font-bold text-xl">Experiences</p>
    <div class="grid grid-cols-4 gap-4 mt-6">
      <div v-for="experience in destination.experiences" :key="experience.slug">
        <router-link :to="{ name: 'experience', params: { experienceSlug: experience.slug } }">
          <div class="h-40 overflow-hidden">
            <img class="object-cover" :src="require(`@/assets/${experience.image}`)" alt="">
          </div>
          <p class="font-bold hover:text-green-500">{{experience.name}}</p>
        </router-link>
      </div>
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import store from '@/store.js';
import Goback from '@/components/Goback.vue';

export default {
  name: 'destination',
  components: {
    Goback
  },
  data() {
    return {
    }
  },
  props: {
    slug: {
      type: String,
      required: true
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