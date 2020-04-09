<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-4 fill-height">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
</style>
