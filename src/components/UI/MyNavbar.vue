<template>
  <div class="navbar flex-horizontal gap2">
    <div class="logo-container flex-horizontal gap1">
      <div>Тут будет пикча</div>
      <div class="logo-title"><h1>Просто-постильня</h1></div>
    </div>
    <div class="nav-buttons flex-horizontal gap2">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/posts-store')">Посты store</my-button>
      <my-button @click="$router.push('/about')">О нас</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: 'my-navbar',
  components: {MyButton}
}
</script>

<style scoped>
.navbar{
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  background: lightgray;
  box-shadow: 0 0 1rem #000000AA;
  border-radius: 0 0 1rem 1rem;
  position: sticky;
  top: 0;
}
.logo-container{
  align-items: flex-start;

}
</style>