<template>
  <my-navbar/>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from "@/components/UI/MyNavbar.vue";

export default {
  components: {MyNavbar}

}
</script>

<style scoped>

</style>