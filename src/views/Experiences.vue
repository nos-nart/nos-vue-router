<template>
  <div class="flex my-12">
    <div class="flex-1 mr-12">
      <p class="text-sm text-gray-500">{{experience.description}}</p>
      <p class="font-bold float-right">{{experience.name}}</p>
    </div>
    <div :style="{'width': '550px'}">
      <img class="object-cover" :src="require(`@/assets/${experience.image}`)" alt="">
    </div>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: "experience",
  components: {},
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(d => d.slug === this.slug)
    },
    experience() {
      console.log('this.destination: ', this.destination);
      return this.destination.experiences.find(i => i.slug === this.experienceSlug)
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>