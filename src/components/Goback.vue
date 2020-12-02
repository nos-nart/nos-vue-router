<template>
  <button class="focus:outline-none" @click="goBack">
    <IconArrowLeft :width="40" :height="40"/>
  </button>
</template>

<script>
import IconArrowLeft from './icons/IconArrowLeft.vue';

export default {
  components: {
    IconArrowLeft
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>